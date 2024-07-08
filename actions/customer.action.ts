'use server'

import User from '@/database/user.model'
import { connectToDatabase } from '@/lib/mongoose'
import stripe from '@/lib/stripe'

export const createCustomer = async (userId: string) => {
	try {
		await connectToDatabase()
		const user = await User.findById(userId).select('email fullName')
		if (!user) {
			throw new Error('User not found')
		}
		const { email, fullName } = user

		const customer = await stripe.customers.create({
			email,
			name: fullName,
			metadata: { userId: userId.toString() },
		})

		await User.findByIdAndUpdate(userId, { customerId: customer.id })

		return customer
	} catch (error) {
		console.error('Error creating customer:', error)
		throw new Error("Couldn't create customer")
	}
}

export const getCustomer = async (clerkId: string) => {
	try {
		await connectToDatabase()
		const user = await User.findOne({ clerkId }).select('customerId')
		if (!user) {
			throw new Error('User not found')
		}
		const { _id, customerId } = user

		if (!customerId) return await createCustomer(_id.toString())

		return await stripe.customers.retrieve(customerId)
	} catch (error) {
		console.error('Error getting customer details:', error)
		throw new Error("Couldn't get customer details")
	}
}

export const atachPayment = async (paymentMethod: string, customer: string) => {
	try {
		return await stripe.paymentMethods.attach(paymentMethod, { customer })
	} catch (error) {
		console.error('Error attaching payment method:', error)
		throw new Error("Couldn't attach payment method")
	}
}
