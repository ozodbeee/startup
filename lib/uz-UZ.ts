import type { LocalizationResource } from '@clerk/types'

export const uzUZ: LocalizationResource = {
	locale: 'uz-UZ',
	socialButtonsBlockButton: '{{provider|titleize}} orqali davom etish',
	dividerText: 'yoki',
	formFieldLabel__emailAddress: 'Pochta',
	formFieldLabel__emailAddresses: 'Pochta manzillari',
	formFieldLabel__phoneNumber: 'Telefon raqami',
	formFieldLabel__username: 'Foydalanuvchi nomi',
	formFieldLabel__emailAddress_username: 'Pochta yoki foydalanuvchi nomi',
	formFieldLabel__password: 'Parol',
	formFieldLabel__currentPassword: 'Hozirgi parol',
	formFieldLabel__newPassword: 'Yangi parol',
	formFieldLabel__confirmPassword: 'Parolni tasdiqlang',
	formFieldLabel__signOutOfOtherSessions: 'Boshqa qurilmalardan chiqish',
	formFieldLabel__firstName: 'Ism',
	formFieldLabel__lastName: 'Familiya',
	formFieldLabel__backupCode: 'Qayta tiklash kodi',
	formFieldLabel__organizationName: 'Tashkilot nomi',
	formFieldLabel__role: 'Rol',
	formFieldInputPlaceholder__emailAddress: '',
	formFieldInputPlaceholder__emailAddresses:
		"Bitta yoki bir nechta pochta manzillarini probel yoki vergul bilan kiriting yoki qo'shing",
	formFieldInputPlaceholder__phoneNumber: '',
	formFieldInputPlaceholder__username: '',
	formFieldInputPlaceholder__emailAddress_username: '',
	formFieldInputPlaceholder__password: '',
	formFieldInputPlaceholder__firstName: '',
	formFieldInputPlaceholder__lastName: '',
	formFieldInputPlaceholder__backupCode: '',
	formFieldInputPlaceholder__organizationName: '',
	formFieldError__notMatchingPasswords: 'Parollar mos kelmadi.',
	formFieldError__matchingPasswords: 'Parollar mos keladi.',
	formFieldAction__forgotPassword: 'Parolingizni unutdingizmi?',
	formFieldHintText__optional: '',
	formButtonPrimary: 'Davom etish',
	signInEnterPasswordTitle: 'Parolni kiriting',
	backButton: 'Orqaga',
	footerActionLink__useAnotherMethod: 'Boshqa usulni ishlatish',
	badge__primary: 'Asosiy',
	badge__thisDevice: 'Bu qurilma',
	badge__userDevice: 'Foydalanuvchi qurilmasi',
	badge__otherImpersonatorDevice: 'Boshqa qurilma',
	badge__default: 'Standart',
	badge__unverified: 'Tekshirilmagan',
	badge__requiresAction: 'Amalga oshirilishi zarur',
	badge__you: 'Siz',
	footerPageLink__help: 'Yordam',
	footerPageLink__privacy: 'Maxfiylik',
	footerPageLink__terms: 'Shartlar',
	paginationButton__previous: 'Oldinga',
	paginationButton__next: 'Keyingi',
	paginationRowText__displaying: "Ko'rsatilmoqda",
	paginationRowText__of: 'dan',
	membershipRole__admin: 'Administrator',
	membershipRole__basicMember: "A'zo",
	membershipRole__guestMember: 'Mehmon',
	signUp: {
		start: {
			title: 'Hisob yarating',
			subtitle: '"{{applicationName}}" da ishlashni davom ettirish uchun',
			actionText: 'Akkountingiz bormi?',
			actionLink: 'Kirish',
		},
		emailLink: {
			title: 'Pochtangizni tasdiqlang',
			subtitle: '"{{applicationName}}" da ishlashni davom ettirish uchun',
			formTitle: 'Tasdiqlash havolasi',
			formSubtitle: 'Pochtaga yuborilgan tasdiqlash havolasini ishlatish',
			resendButton: 'Havolani qayta yuborish',
			verified: {
				title: 'Muvaffaqiyatli kirish',
			},
			loading: {
				title: 'Kirish amalga oshirilyapti...',
			},
			verifiedSwitchTab: {
				title: 'Pochta tasdiqlangan',
				subtitle: "Davom etish uchun yangi ochilgan varag'ga qayting",
				subtitleNewTab: "Davom etish uchun oldingi varag'ga qayting",
			},
		},
		emailCode: {
			title: 'Pochtangizni tasdiqlang',
			subtitle: '"{{applicationName}}" da ishlashni davom ettirish uchun',
			formTitle: 'Tasdiqlash kodi',
			formSubtitle: 'Pochtaga yuborilgan tasdiqlash kodini kiriting',
			resendButton: 'Kodni qayta yuborish',
		},
		phoneCode: {
			title: 'Telefon raqamingizni tasdiqlang',
			subtitle: '"{{applicationName}}" da ishlashni davom ettirish uchun',
			formTitle: 'Tasdiqlash kodi',
			formSubtitle: 'Telefongizga yuborilgan tasdiqlash kodini kiriting',
			resendButton: 'Kodni qayta yuborish',
		},
		continue: {
			title: "Barcha maydonlarni to'ldiring",
			subtitle: '"{{applicationName}}" da ishlashni davom ettirish uchun',
			actionText: 'Akkountingiz bormi?',
			actionLink: 'Kirish',
		},
	},
	signIn: {
		start: {
			title: 'Kirish',
			subtitle: '"{{applicationName}}" da ishlashni davom ettirish uchun',
			actionText: "Akkount yo'qmi?",
			actionLink: "Ro'yxatdan o'tish",
			actionLink__use_email: 'Pochta ishlatish',
			actionLink__use_phone: 'Telefon raqamini ishlatish',
			actionLink__use_username: 'Foydalanuvchi nomini ishlatish',
			actionLink__use_email_username:
				'Pochta yoki foydalanuvchi nomini ishlatish',
		},
		password: {
			title: 'Parolni kiriting',
			subtitle: '"{{applicationName}}" da ishlashni davom ettirish uchun',
			actionLink: 'Boshqa usulni ishlatish',
		},
		forgotPasswordAlternativeMethods: {
			title: 'Parolingizni unutdingizmi?',
			label__alternativeMethods: 'Yoki, boshqa usul orqali kirish',
			blockButton__resetPassword: 'Parolni qayta tiklash',
		},
		forgotPassword: {
			subtitle_email: 'Pochtangizni tekshiring',
			subtitle_phone: 'Telefon raqamingizni tekshiring',
			subtitle: 'Parolni tiklash uchun',
			formTitle: 'Parolni qayta tiklash kodi',
			// formSubtitle_email: 'Pochtangizga yuborilgan kodi kiriting',
			// formSubtitle_phone: 'Telefon raqamingizga yuborilgan kodi kiriting',
			resendButton: 'Kodni qayta yuborish',
		},
		resetPassword: {
			title: 'Parolni qayta tiklash',
			formButtonPrimary: 'Parolni qayta tiklash',
			successMessage:
				"Sizning parolingiz muvaffaqiyatli o'zgartirildi. Kirish amalga oshirilyapti, kuting.",
		},
		resetPasswordMfa: {
			detailsLabel:
				"Parolni tiklashdan oldin shaxsiy ma'lumotlaringizni tasdiqlang",
		},
		emailCode: {
			title: 'Pochtangizni tekshiring',
			subtitle: '"{{applicationName}}" da ishlashni davom ettirish uchun',
			formTitle: 'Tasdiqlash kodi',
			// formSubtitle: 'Pochtaga yuborilgan tasdiqlash kodini kiriting',
			resendButton: 'Kodni qayta yuborish',
		},
		emailLink: {
			title: 'Pochtangizni tekshiring',
			subtitle: '"{{applicationName}}" da ishlashni davom ettirish uchun',
			formTitle: 'Tasdiqlash havolasi',
			formSubtitle: 'Pochtaga yuborilgan tasdiqlash havolasini ishlatish',
			resendButton: 'Havolani qayta yuborish',
			unusedTab: {
				title: 'Varaqni yopish mumkin',
			},
			verified: {
				title: 'Muvaffaqiyatli kirish',
				subtitle: "Tez orada qaytadan yo'naltirilasiz",
			},
			verifiedSwitchTab: {
				// title: 'Pochta tasdiqlangan',
				subtitle: "Davom etish uchun yangi ochilgan varag'ga qayting",
				subtitleNewTab: "Davom etish uchun oldingi varag'ga qayting",
			},
			loading: {
				title: 'Kirish amalga oshirilyapti...',
			},
		},
		phoneCode: {
			title: 'Telefoningizni tekshiring',
			subtitle: '"{{applicationName}}" da ishlashni davom ettirish uchun',
			formTitle: 'Tekshiruv kodi',
			// formSubtitle: 'Telefoningizga yuborilgan tekshiruv kodini kiriting',
			resendButton: 'Kodni qayta yuborish',
		},
	},
	// userProfile: {
	// 	deleteProfile: {
	// 		title: 'Profilni o`chirish',
	// 		messageLine1: 'Profilingizni o`chirib tashlashiga ishonchingiz komilmi?',
	// 		messageLine2: 'Bu amalni bekor qilishning hech qanday iloji yo`q.',
	// 		actionButton: 'Profilni o`chirish',
	// 	},
	// 	mobileMenu: {
	// 		title: 'Menyu',
	// 	},
	// },
}

export const commonTexts = {
	signIn: {
		phoneCode: {
			title: 'Telefoningizni tekshiring',
			subtitle: '"{{applicationName}}" da ishlashni davom ettirish uchun',
			formTitle: 'Tekshiruv kodi',
			formSubtitle: 'Telefoningizga yuborilgan tekshiruv kodi ni kiriting',
			resendButton: 'Kodni qayta yuborish',
		},
	},
} as const

export default uzUZ
