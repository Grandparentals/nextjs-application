import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { initializeAnalytics, isSupported } from 'firebase/analytics';

const firebaseCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
}

async function loadAnalytics(firebaseApp: any){
  const isSupportedAnalytics = await isSupported();
  if (isSupportedAnalytics)
    initializeAnalytics(firebaseApp);
}

if (!getApps().length) {
  const firebaseApp = initializeApp(firebaseCredentials);
  loadAnalytics(firebaseApp)
}

export const auth = getAuth();

export default firebaseCredentials;
