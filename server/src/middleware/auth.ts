import { Request, Response, NextFunction } from 'express';
import admin from 'firebase-admin';
import * as path from 'path';
import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Adjust the path as necessary to point to your serviceAccountKey.json
const serviceAccountPath = path.resolve(__dirname, '../../serviceAccountKey.json');
const serviceAccount = require(serviceAccountPath);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  const devEnv = process.env.DEV_ENV === 'true';
  const isLocalhost = req.hostname === 'localhost' || req.hostname === '127.0.0.1';

  if (devEnv && isLocalhost) {
    // Skip authentication in development mode on localhost
    console.log('dev mode, skipping auth')
    return next();
  }

  const idToken = req.headers.authorization?.split('Bearer ')[1];
  if (!idToken) {
    return res.status(401).send('Unauthorized');
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    (req as any).user = decodedToken;
    next();
  } catch (error) {
    console.error('Error verifying token:', error);
    res.status(401).send('Unauthorized');
  }
};
