# Authentication-Nextjs

This is a [Next.js](https://nextjs.org) project that demonstrates a complete authentication system using Firebase and Google Sign-In.

## Check out the demo!
https://sidheimer.netlify.app/

## Features

- Google Authentication using Firebase
- Protected routes with user-specific data
- Tailwind CSS for styling
- Optimized for deployment on Netlify or Vercel
- Responsive design

# Getting Started

Follow these steps to set up and run the project locally:

## Prerequisites
* Install [Node.js](https://nodejs.org/en) (v16.x or later).

* Install [Git](https://git-scm.com/).

* Create a Firebase project:

  * Go to the Firebase Console and create a new project.
  * Enable Authentication with the Email/Password method.
  * Add a Web App to your Firebase project and copy the configuration details.
* Clone the repository:

```bash
git clone https://github.com/sidk44/Authentication-Nextjs.git
cd Authentication-Nextjs

```

## Setup
* Install Dependencies: Run the following command to install all required dependencies:
```bash
npm install
```
* Configure Firebase:

   - Open the firebaseConfig.js file in the src directory.
   - Replace the placeholder configuration with your Firebase app's 
    credentials:
```bash
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};
export default firebaseConfig;
```
*  Start the Development Server: Run the following command:
```bash
npm run dev
```
The development server will start at http://localhost:3000.
