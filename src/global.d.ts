// global.d.ts (create this file if it doesn't exist)
export { };

declare global {
    interface Window {
        recaptchaVerifier: any; // You can type this as Firebase's RecaptchaVerifier if needed
    }
}
