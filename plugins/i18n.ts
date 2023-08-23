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
        "apiDocs": "{name} API Version {version} Documentation", 
        "footer": "Footer", 
        // 
        "loginToComposableRss": "Login to ComposableRSS",
        "accountRegistration": "Account Registration",
        "registrationRequirements": "Email address, username, and password are required to register",
        "username": "Username",
        "password": "Password",
        "login": "Login",
        "accountRecoveryHere": "Account recovery",
        "alreadyHaveAnAccount": "Sign-In",
        "registerHere": "Register",
        "privacyPolicy": "Privacy Policy",
        "signinWithGoogle": "Sign-In with Google",
        "logout": "Logout",
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
        "emailApiKey": "Email API credentials",
        "sendApiKeyEmail": "Send API credentials email",
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
        // 
        "yourEmailAddressIs": "Email Address: {emailAddress}",
        "yourApiKeyIs": "API Key: {apiKey}",
        "youHaveXPostsInYQueues": "You hve a total of {x} posts in {y} queues.",
        // 
        "apiRequiresTWoHeaderValues": "The ComposableRSS API requires two header values to be present in each request:",
        "apiSecret": "API Secret",
        "apiSecretHasBeeenMailed": "The 'API secret' value has been emailed to you.  Click the verification link in that email to activate your API credentials.",
        "instructionsLocatedBelow": "Instructions for using the API, including examples with cURL, are located below.",
        // 
        "youAreAboutToPermanentlyDeactivateYourAccount": "You are about to permanently deactivate your account. You can register a new account at any time. Please download your data before you go, as it will be irretrievable after your permanently delete your account.",
        "thanksForBeingPartOfComposableRSS": "Thanks for being part of the ComposableRSS community!",
        // 
        "weWillSendYourApiKeyViaEmail": "We will send your API secret value to your registered email address."
      }
    }
  })

  vueApp.use(i18n)
})