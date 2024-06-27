import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
	apiKey: 'AIzaSyBClrd5oTCYOPjlrasYI7LMBj_ZV9VYX5E',
	authDomain: 'startup-96fb6.firebaseapp.com',
	projectId: 'startup-96fb6',
	storageBucket: 'startup-96fb6.appspot.com',
	messagingSenderId: '1085815029756',
	appId: '1:1085815029756:web:373cf1f664b32995e83c79',
}

const app = initializeApp(firebaseConfig)
const storage = getStorage(app)

export { storage }
