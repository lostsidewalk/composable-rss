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
        "support": "Support", // tab label 
        "defaultProfileImage" : "Default profile image",
        "emailApiKey": "Email API credentials",
        "sendApiKeyEmail": "Send API credentials email",
        "deactivateAccount" : "Deactivate account",
        "emailNotifications" : "Email Notificatiohs",
        "enableAccountAlertsNotifications" : "Enable account alerts",
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
        "supportComposableRSS": "Please considering donating to keep ComposableRSS alive.",
        "supportUsOnPatreon": "Support us on Patreon",
        "clickHere": "Click here",
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
        "apiKey": "API Key",
        "apiSecret": "API Secret",
        "apiSecretHasBeeenMailed": "These values are emailed to you upon registration.  Click the verification link in that email to activate your API credentials.",
        "basicQueryInstructions": "Once your credentials are activated, you can query the ComposableRSS API using cURL as follows:",
        // 
        "youAreAboutToPermanentlyDeactivateYourAccount": "You are about to permanently deactivate your account. You can register a new account at any time. Please download your data before you go, as it will be irretrievable after your permanently delete your account.",
        "thanksForBeingPartOfComposableRSS": "Thanks for being part of the ComposableRSS community!",
        // 
        "weWillSendYourApiKeyViaEmail": "We will send your API secret value to your registered email address.",
        // 
        "whatIsComposableRSS": "What is ComposableRSS?",
        "gettingStarted": "Getting started",
        "createAndPublishYourFirstFeed": "Create and publish your first feed",
        "addContentToYourFeed": "Add content to your feed",
        "addMediaToYourFeed": "Add media to your feed",
        "addAPodcastToYourFeed": "Add a podcast to your feed",
        "setupAuthentication": "Setup authentication",
        "configureAdvancedOptions": "Configure advanced options",
        "additionalResources": "Additional Resources",
        // 
        "whatInformationDoWeCollect": "What information do we collect?",
        "whatWeCollectSummary": "",
        "whatWeCollectDetails": "",
        "whatWeCollectImportantDetails": "",
        "whatWeCollectFurtherDetails": "",
        "someCollectionIsAutomatic": "Some collection is automatic",
        "automaticCollectionDetails": "",
        "howDoWeProcess": "How do we process your information?",
        "howDoWeProcessSummary": "",
        "socialLogins": "Social logins",
        "socialLoginsSummary": "",
        "socialLoginsDetails": "",
        "internationalInformationTransfers": "International information transfers",
        "internationalInformationTransfersSummary": "",
        "internationalInformationTransfersDetails": "",
        "internationalInformationTransfersDetailsFurther": "",
        "whatAreYourPrivacyRights": "What are your privacy rights?",
        "yourPrivacyRights": "",
        "yourPrivacyRightsDetails": "",
        "yourPrivacyRightsSummary": "",
        "yourConsent": "Your consent",
        "yourConsentSummary": "",
        "doWeMakeUpdates": "Do we make updates to this policy?",
        "doWeMakeUpdatesSummary": "",
        "compRssPrivacyPolicy": "ComposableRSS Privacy Policy",
        "howCanYouContactUs": "How can you contact us?",
        "contactUsWithQuestionsViaEmail": "",
        "supportEmail": "Support email",
      }
    }
  })

  vueApp.use(i18n)
})