// // PhoneAuth.tsx
// import React, { useState } from 'react';
// import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'; // Adjusted import
// import { auth } from '../../firebase'; // Ensure this is the correct import

// const PhoneAuth: React.FC = () => {
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [verificationCode, setVerificationCode] = useState('');
//   const [verificationId, setVerificationId] = useState<string | null>(null);
//   const [message, setMessage] = useState('');

//   const setupRecaptcha = () => {
//     // Check if recaptchaVerifier is already defined to avoid duplicate
//     if (!window.recaptchaVerifier) {
//       window.recaptchaVerifier = new RecaptchaVerifier(
//         'recaptcha-container',
//         {
//           size: 'invisible', // Invaisible reCAPTCHA
//           callback: (response: any) => {
//             console.log('reCAPTCHA solved');
//           },
//         },
//         auth // Passing the correct `auth` object here
//       );
//     }
//   };

//   const handleSendOTP = () => {
//     setupRecaptcha();

//     const appVerifier = window.recaptchaVerifier;
//     signInWithPhoneNumber(auth, phoneNumber, appVerifier)
//       .then((confirmationResult) => {
//         setVerificationId(confirmationResult.verificationId);
//         setMessage('OTP sent!');
//       })
//       .catch((error) => {
//         setMessage('Failed to send OTP. Try again.');
//         console.error('Error during OTP sending:', error);
//       });
//   };

//   const handleVerifyOTP = () => {
//     if (verificationId) {
//       const credential = auth.PhoneAuthProvider.credential(verificationId, verificationCode);
//       auth.signInWithCredential(credential)
//         .then((result) => {
//           console.log('User signed in:', result.user);
//           setMessage('Phone number verified and user signed in.');
//         })
//         .catch((error) => {
//           setMessage('Failed to verify OTP. Try again.');
//           console.error('Error during OTP verification:', error);
//         });
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen">
//       <div id="recaptcha-container"></div>
      
//       <input
//         type="text"
//         placeholder="Enter phone number"
//         value={phoneNumber}
//         onChange={(e) => setPhoneNumber(e.target.value)}
//         className="border p-2 m-2"
//       />
//       <button
//         onClick={handleSendOTP}
//         className="bg-blue-500 text-white px-4 py-2 rounded"
//       >
//         Send OTP
//       </button>

//       <input
//         type="text"
//         placeholder="Enter OTP"
//         value={verificationCode}
//         onChange={(e) => setVerificationCode(e.target.value)}
//         className="border p-2 m-2"
//       />
//       <button
//         onClick={handleVerifyOTP}
//         className="bg-green-500 text-white px-4 py-2 rounded"
//       >
//         Verify OTP
//       </button>

//       {message && <p className="text-red-500 mt-4">{message}</p>}
//     </div>
//   );
// };

// export default PhoneAuth;
