import admin from 'firebase-admin';

const serviceAccount = {
  "type": process.env.NEXT_PRIVATE_FIREBASE_TYPE,
  "project_id": process.env.NEXT_PRIVATE_FIREBASE_PROJECT_ID,
  "private_key_id": process.env.NEXT_PRIVATE_FIREBASE_PRIVATE_KEY_ID,
  "private_key": process.env.NEXT_PRIVATE_FIREBASE_PRIVATE_KEY,
  "client_email": process.env.NEXT_PRIVATE_FIREBASE_CLIENT_EMAIL,
  "client_id": process.env.NEXT_PRIVATE_FIREBASE_CLIENT_ID,
  "auth_uri": process.env.NEXT_PRIVATE_FIREBASE_AUTH_URI,
  "token_uri": process.env.NEXT_PRIVATE_FIREBASE_TOKEN_URI,
  "auth_provider_x509_cert_url": process.env.NEXT_PRIVATE_FIREBASE_AUTH_PROVIDER_x509_CERT_URL,
  "client_x509_cert_url": process.env.NEXT_PRIVATE_FIREBASE_CLIENT_x509_CERT_URL
} as any;

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    });
  } catch (error: any) {
    console.log('Firebase admin initialization error', error.stack);
  }
}

export default admin.firestore();
