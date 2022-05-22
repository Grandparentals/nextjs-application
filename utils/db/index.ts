import admin from 'firebase-admin';

const serviceAccount = {
  "type": "service_account",
  "project_id": "remoteu-org",
  "private_key_id": "6be22fb9b5784ab42d531b5dfe606b956eb91453",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC7XhJree9LAB+2\n4Spif4yrM22cIKURNeeBniq0YO9xF7K6MVWx3lZRs6GsE08vqZSsbjmdHWjHAyGB\n9a3de5IcmQlC+86lfbj3MDfPqVwG5nWKl1ifPdnOwAR8/H8uTJ0xC6Ial3je8yLC\n4mtFJ7mTpG7sBfDyqy+JHLh9ZSXW/PqN0chNKNDYx5wXBUFY36jtABDy32DMCRkS\nW79zdOSzJ4+gvnjFXN942MLJA4jjLeWs1hbNpE+/VTnwwp+1+hbNzsExcV41zkh/\nbRNs33XFzLSeRdiJn1coLCtiwNLnfchfTqD2Q/lvVAWDO00M5/CGyFMDw7+vHVsI\nLXjTL+otAgMBAAECggEAHlXAMLNoqSFngRHabWEOMsecRutIHk22Yhdr/ZE2Iv69\nuoRzRd1j501obvYfW22euv4LiOLyjEn2+lX+5L11bfje9X/UOJnuwOKHHrFiS2Gz\nhRE00W9PnLgc4el1Y9cWmhKyl5CPirUdmyTSTjt8wakdJkxd8sQBabcDLZYbNr+u\njKlKlJkOn6CGP2v4hDr9V8u8wTZApMqn5rUM4l5U4VR1kdO9bOrrgXC6Is1MeI+/\neGenCKtSmOzUHk9tgkcI3T1sIaeUG/WLVfL+XcTvePmrqNnRusxHVBtuldQT+KHj\n80k4GVK6/cWznrCvO/+ABEPKKyAMMThovAAIUdXrIQKBgQDkRcBJOniayPvIFr3l\nmFxWKTwp/2QTJDdceDxRDOPJjHQH174YAM9ZExQavp2u1AiuFteRfW6hPFXeIc1p\nsn1QmGu/LpeUwdEDXJqkM/+1nZlCae9gAiiHIPc9xopOUVrF6B7OeJHhvmu9TIkI\nnon3K0z0hMpLdFfO58YCDQKsPQKBgQDSIFvsJ28r4Cp1GUHMcc93azqnfHNhjy2n\n9vPnYz6ASbB7E0sRuUoLIsYaKSxpKPfVWVX7lqDARnoB5UlMUGpZjs6FZKHwQrGv\nWwGF2NQ8djNDDDDd65Q+musVLBpLSq7JpGJ95os6dUK5k8JTX5h+bHW/xz3lELc9\nulo14ztksQKBgFIjfyNadNdNhrvi4wXgoyklwU5jZYE1wO33Hc0UVErLzVydFvvQ\nHswwf0V4XYjxJwZtlbf2aH6AFW3Ov/lOjqUXk33BqC2Q6ELLaaG4TETvppwtPkNP\nw4GMLSr/a/jucTlRYvRskiGmwWHmTlDZq09TN2es+JXaEVaUM729LL8JAoGBAMsb\npD7cz0Tl5aRSyZtI13VjHMsQLKc8srEMsC4VbDCtCf2tZH65T6z76+kVq2vqwcRk\nGgyaSMASX5S9gOBXSrVOqKmf4DhQ/1e06//o2x2mU16XxhR8xkrNjDZm7vOgONuI\nHfv8gM/80IZ5IPleChUJ2beKa3WjdrwgCVrVTm/BAoGAK+NgTR9fLXfbbPfIaJ5u\n/SmZ4eq3rjlYWcMkpMKYbOPpaDdp9HJUypecDSKML7pxfqjmxsPcjoKrjNaFChKP\nXMjKgZqTdyABRygaRybtvCLoA3NxdWMJyo0cMpIk+aF9sZx1S0mO6Eibic6CqCZy\nkC342ooH/1bXXrQslHatCQw=\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-lscmw@remoteu-org.iam.gserviceaccount.com",
  "client_id": "108735571662462939822",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-lscmw%40remoteu-org.iam.gserviceaccount.com"
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
