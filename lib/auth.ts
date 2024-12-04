import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import app from './firebaseConfig';
// Initialize Firebase Authentication instance.
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

//Function to handle Google Sign-In.
export const signInWithGoogle = async () => {
    try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;   // Return the authenticated user object.
    } catch (error) {
    console.error('Error signing in with Google:', error);
    }
    };

//Function to handle user logout.
export const logout = async () => {
    try {
    await signOut(auth);  // Sign out the current user.
    } catch (error) {
    console.error('Error signing out:', error);
    }
};

export { auth };
