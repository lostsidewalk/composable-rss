import { createI18n } from 'vue-i18n'

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'en',
    messages: {
      en: {
        "composableRss": "ComposableRSS",
        "authentication": "Authentication",
        "apiDocs": "API Documentation", 
        "footer": "Footer", 
        // 
        "loginToComposableRss": "Login to ComposableRSS",
        "accountRegistration": "Account Registration",
        "registrationRequirements": "Email address, username, and password are required to register",
        "username": "Username",
        "password": "Password",
        "login": "Login",
        "accountRecoveryHere": "-- account recovery here --",
        "alreadyHaveAnAccount": "-- login here --",
        "registerHere": "-- register here --",
        "privacyPolicy": "Privacy Policy",
        "signinWithGoogle": "Sign-In with Google",
        // 
        "usernameAndPasswordAreRequired": "Username and password are required",
        "usernameIsRequired": "Username is required",
        "passwordIsRequired": "Password is required",
        // 
        "emailAddress": "Email Address",
        "submit": "Submit",
        "settings": "Settings",
        "oAuth2ProfileImage": "OAuth2 Profile Image",
        "settingsUpdated": "Your account settings have been updated",
        // 
        "thankYouForYourOrder": "THank you for your order!",
        "youAreNowVerified": "You are now verified.",
        "pwResetRequestMessage": "Enter your username and email address to recover your password.",
        "passwordReset": "Password Reset",
        "newPassword": "New password",
        "confirmNewPassword": "Confirm new password",
        // 
        "devBlog": "DevBlog",
        "email": "Email",
        "twitter": "Twitter",
        "github": "Github",
        "twitch": "Twitch.tv",
        "discord": "Discord",
        "copyright": "Copyright (C)",
        // 
        "account": "Account", // tab label 
        "notifications": "Notifications", // tab label 
        "subscription": "Subscription", // tab label 
        "defaultProfileImage" : "Default profile image",
        "emailApiKey": "Email API key",
        "deactivateAccount" : "Deactivate account",
        "emailNotifications" : "Email Notificatiohs",
        "enableAccountAlertsNotifications" : "Enable account alerts",
        "enableProductNotifications" : "Enable product update alerts",
        "updateNotificationPreferences" : "Update notification preferences",
        "dismiss": "Dismiss", 
        "resetPassword": "Reset password",
        "emailAddressColon": "Email address:",
        "emailAddressHint": "Email address",
        "applyChanges": "Apply changes",
        "cancel": "Cancel",
        "sendPasswordResetEmail": "Send password reset email",
        "checkEmailForFurther": "Check your email for further instructions",
        "downloadYourData": "Download your data",
        "permanentlyDeleteYourAccount": "Permanently delete your account",
        "supportComposableRSS": "Please considering subscribing to keep ComposableRSS alive.",
        "checkout": "Checkout",
        "subscriptionStatus": "Subscription status: {status} since {started}",
        "mostRecentInvoice": "Most recent invoice",
        "statusColon": "Status:",
        "cancelSubscription": "Cancel subscription",
        "amountDueColon": "Amount due:",
        "amountPaidColon": "Amount paid:",
        "amountRemainingColon": "Amount remaining:",
        "customerEmailAddressColon": "Customer email address:",
        "customerNameColon": "Customer name:",
        "invoiceUrlColon": "Invoice URL:",
        "clickHere": "Click here",
        "productColon": "Product:",
        // 
        "systemMessage": "ComposableRSS Message",
        "somethingHorribleHappened": "Something horrible happened",
        "somethingHorribleHappenedDueTo": "Something horrible happened due to: {cause}",
      }
    }
  })

  vueApp.use(i18n)
})