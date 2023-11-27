import { createI18n } from 'vue-i18n';

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'en',
    messages: {
      en: {
        // Generic
        "submit": "Submit",
        "cancel": "Cancel",
        "dismiss": "Dismiss",
        "username": "Username",
        "emailAddress": "Email Address",
        "privacyPolicy": "Privacy Policy",
        "accountRecoveryHere": "Account recovery",
        "registerHere": "Register",
        "responsePayloadWillLookLikeThis": "The response payload will look like this:",
        // AccountSettings
        "oAuth2ProfileImage": "OAuth2 Profile Image",
        "yourEmailAddressIs": "Email Address: {emailAddress}",
        "yourApiKeyIs": "API Key: {apiKey}",
        "youHaveXPostsInYQueues": "You have a total of {x} posts in {y} queues.",
        "youAreAboutToPermanentlyDeactivateYourAccount": "You are about to permanently deactivate your account. You can register a new account at any time. Please download your data before you go, as it will be irretrievable after you permanently delete your account.",
        "thanksForBeingPartOfComposableRSS": "Thanks for being part of the ComposableRSS community!",
        "weWillSendYourApiKeyViaEmail": "We will send your API secret value to your registered email address.",
        "deactivateAccount": "Deactivate account",
        "downloadYourData": "Download your data",
        "permanentlyDeleteYourAccount": "Permanently delete your account",
        "resetPassword": "Reset password",
        "sendPasswordResetEmail": "Send password reset email",
        "emailApiKey": "Email API credentials",
        "sendApiKeyEmail": "Send API credentials email",
        // AdditionalResources
        "additionalResources": "Additional Resources",
        // ApiRequirements
        "apiRequiresTWoHeaderValues": "The ComposableRSS API requires two header values to be present in each request",
        "apiKey": "API Key",
        "apiSecret": "API Secret",
        "apiSecretHasBeeenMailed": "These values are emailed to users upon registration.",
        "yourImageMayAlreadyHaveCredentials": "Note that your image may already have active credentials defined for predefined users. This will be indicated in the image documentation.",
        "basicQueryInstructions": "Assuming API_KEY and API_SECRET are properly defined environment variables, you can query the ComposableRSS API using cURL as follows:",
        // AuthPanel
        "loginToComposableRss": "Login to ComposableRSS",
        "password": "Password",
        "login": "Login",
        // Banner
        "composableRss": "ComposableRSS",
        // Footer
        "devBlog": "DevBlog",
        "email": "Email",
        "twitter": "Twitter",
        "github": "Github",
        "twitch": "Twitch.tv",
        "discord": "Discord",
        "copyright": "Copyright (C)",
        // GoogleAuthButton
        "signinWithGoogle": "Sign-In with Google",
        // LogoutButton
        "logout": "Logout",
        // PasswordResetRequestPanel
        "pwResetRequestMessage": "Enter your username and email address to recover your password.",
        // PasswordUpdatePanel
        "passwordReset": "Password Reset",
        "newPassword": "New password",
        "confirmNewPassword": "Confirm new password",
        // RegistrationPanel
        "accountRegistration": "Account Registration",
        "alreadyHaveAnAccount": "Sign-In",
        // SettingsPanel
        "settings": "Settings",
        "account": "Account",
        "notifications": "Notifications",
        "howYouCanHelp": "How You Can Help",
        "enableAccountAlertsNotifications": "Enable account alerts",
        "updateNotificationPreferences": "Update notification preferences",
        "supportComposableRSS": "Please consider donating to keep ComposableRSS alive.",
        "supportUsOnPatreon": "Support us on Patreon",
        // UsingTheApi
        "usingTheApi": "Using the API",
        "useTheFollowingInstructions": "Use the following instructions to interact with the ComposableRSS API. Examples are shown using cURL.",
        "step1": "STEP 1 - CREATE AND PUBLISH YOUR FIRST FEED",
        "step2": "STEP 2 - SETUP AUTHENTICATION AND ADD CREDENTIALS",
        "step3": "STEP 3 - ADD A POST TO YOUR FEED",
        "step4": "STEP 4 - ADD A PODCAST TO YOUR POST USING THE ITUNES MODULE AND ENCLOSURES",
        "step5": "STEP 5 - ADD MEDIA TO YOUR POST USING THE POST MEDIA MODULE",
        "step6": "STEP 6 - CONFIGURE ADVANCED OPTIONS",
        // app
        "usernameAndPasswordAreRequired": "Username and password are required",
        "usernameIsRequired": "Username is required",
        "passwordIsRequired": "Password is required",
        "registrationRequirements": "Email address, username, and password are required to register",
        "youAreNowVerified": "You are now verified.",
        "checkEmailForFurther": "Check your email for further instructions",
        "somethingHorribleHappened": "Something horrible happened",
        // useSettingsService
        "settingsUpdated": "Your account settings have been updated",
        "unexpectedResponseStatus": "Unexpected response status code: {statusCode}",
        // useNotifications
        "somethingHorribleHappenedDueTo": "Something horrible happened due to: {cause}",
        // AddContent 
        "addContentRequest": "Let's add an article about spiders 🕷️ to our queue. Posts require at least a title and a description:",
        "addContentResponseDetails": "The HTTP 200 (OK) response status code indicates that the post was successfully created in the queue. We now have the newly created post ID, 1048576, which we can use for further API calls to modify the post. For example, posts are not published to the live feeds by default when created; that will require two additional API calls.  The first 'stages' the post for deployment by updating its status to 'PUB_PENDING':",
        "updateQueueStatusDetails": "UPDATE QUEUE STATUS DETAILS", // TODO: fix this 
        "addContentPublishResponseDetails": "The HTTP 200 (OK) response status code indicates that the post was successfully published. Once again, the response body provides updated details of the queue as well as the URLs of the associated feeds organized by format.",
        "addContentFeedAccess": "By accessing each feed URL, you can see that our feed now includes the post we created about spiders 🕷️:",
        "addContentSummary": "Now, we have an article about spiders 🕷️, but it's still quite basic. The next steps will illustrate how to add media content, such as an iTunes podcast episode, to a post.",
        // AddMedia 
        "addMediaRequest": "The MediaRSS API can also be used for podcasting.",
        "addMediaRequestDetails": "Use this API to add a single video element and set some basic metadata:",
        "addMediaResponseDetails": "The HTTP 200 (OK) response status code indicates that the post was successfully updated.",
        "addMediaFeedAccess": "By accessing each feed URL, you can see that our article now contains a MediaRSS module:",
        "addMediaSummary": "Next we'll look at some advanced options such as format-specific configuration, auto-deployment, and post archiving and purging.",
        // AddPodcast 
        "addPodcastRequest": "Let's add an iTunes podcast episode to our article about spiders 🕷️. Podcasts require two elements: an iTunes descriptor, which contains metadata about the episode; and an enclosure, which is a pointer to the actual episode content. Start by updating the post iTunes descriptor with the following API call:",
        "addPodcastResponseDetails": "The HTTP 200 (OK) response status code indicates that the post was successfully updated. The body of the response shows the current state of the iTunes descriptor.",
        "addEnclosureRequest": "We still need to add a streamable artifact to our post, which we can do using the enclosure API, as follows:",
        "addPodcastFeedAccess": "By following each feed URL, we now see that our article now contains an iTunes descriptor and an enclosure:",
        "addPodcastSummary": "Next, we'll look at the MediaRSS API, which is another method for distributing multimedia syndicated content.",
        // ApiRequest 
        "httpRequest": "HTTP REQUEST",
        // ApiResponse
        "httpResponse": "HTTP RESPONSE ({statusCode})",
        // ConfigureAdvancedOptions 
        "advancedOptionsRequest": "The Queue Options API allows configuration of format-specific options, using an API call such as the following:",
        "advancedOptionsFeedAccess": "By access each feed URL, you can now see that the additional properties have been added to the metadata:",
        "archivalAndPurgingRequest": "Finally, we can configure the post archival and purging processes.  Posts are archived when their expiration timestamp is reached, or when their position in the queue goes below the maximum number of posts allowed in that queue.  Archived posts are removed from all feeds, and are eventually deleted permanently (purged).  Let's set the maximum number of published posts in the queue to 50, and set the purge delay to 60 days:",
        "archivalAndPurgingSummary": "Note that archival and purging are disabled entirely when a queue has no maximum number of published posts, and posts have no expiration timestamps.",
        // CreateAndPublishYourFirstFeed 
        "createQueueRequest": "To publish your first feed, create a post queue. The only required field in the request is 'ident,' a short unique identifier for the queue. Let's name our queue 'spiders' 🕷️, which will contain articles (posts) about spiders 🕷️:",
        "createQueueResponseDetails": "The HTTP 201 (CREATED) response status code indicates that the queue was successfully created. The body of the response provides the URLs of the associated feeds organized by format (the deployResponses section), and the properties of the newly created queue (the queueDTO section). ComposableRSS will respond with this information any time you create or change a queue.",
        "createQueueFeedAccess": "Following each feed URL, we can see that our queue is delivered in the requested format by the feed server:",
        "createQueueSummary": "Our 'spiders' 🕷️ feed is currently missing any items/entries since our newly created queue doesn't have any posts yet. Adding posts will be the next step after exploring how to set up authentication, an optional step for securing access to your feeds.",
        // GettingStarted 
        "gettingStarted": "Getting started",
        "imagesAreAvailable": "ComposableRSS is available as pre-built Docker images that work out of the box, and they can be found in the lostsidewalk Docker repository.",
        "toDeployThePlatform": "To deploy the entire platform, you can use the provided docker-compose.yml file from the composable-rss-app repository:",
        "pleaseAddressComments": "Make sure to address the comments in the docker-compose.yml.sample file to enable additional features such as email integration and OAuth2.",
        "onceUpAndRunning": "Once the platform is up and running:",
        "uiAccessDesc": "The ComposableRSS UI (this program) is available at http://localhost:3000. The UI provides features for logged-in users to access API keys, manage preferences, and get instructions for using the API.",
        "apiAccessDesc": "The base URL of the ComposableRSS API is http://localhost:8080. Use this API to create and manage your feeds (queues) and content (posts). The container image you use may provide predefined users with active API credentials. Refer to the detailed instructions below.",
        "feedAccessDesc": "The base URL of the ComposableRSS feed server is http://localhost:8081. Once you've created and published feeds, you can access them in various formats on this server at paths reported by the API. Check the example under 'STEP 1' for more information.",
        // SetupAuthAndAddCreds 
        "setupAuthRequest": "To access authenticated feeds, the requestor must provide a valid username and password using HTTP BASIC authentication. Let's enable authentication on the spiders 🕷️ queue with the following PUT request:",
        "setupAuthResponseDetails": "The HTTP 200 (OK) response status code indicates that the queue was updated successfully. The queueDTO portion of the response body now indicates that 'isAuthenticated' is now set to true.",
        "feedsNowRequireCreds": "To fetch the feed URLs, you need to provide a username and password, as shown below:",
        "addCredsRequest": "Thus, you must add credentials for each user who requires access to your feed, as follows:",
        "addCredsResponseDetails": "The HTTP 200 response status code indicates that the credential was successfully added. There is no set maximum number of credentials you can define per queue.",
        "setupAuthSummary": "Now that you have secure feeds, let's proceed to add content in step 3.",
        // WhatIsComposableRss 
        "whatIsComposableRss": "What is ComposableRSS?",
        "composableRssIs": "ComposableRSS is a multiuser platform for creating, publishing, and fully managing all aspects of the syndicated web feed lifecycle. It provides a robust solution for managing web feeds and content distribution using a developer-friendly REST API. ComposableRSS is built upon the GPLV3 NewsGears libraries, implemented entirely in Java, and is freely available on Github.",
        "useComposableRssTo": "Use ComposableRSS to:",
        "createAndPublishFeedsTitle": "Create and publish syndicated data feeds",
        "createAndPublishFeedsDetails": "ComposableRSS allows you to create and publish RSS, ATOM, and JSON web feeds. This flexibility ensures compatibility with a wide range of feed readers and content consumers. You can define feed categories, tags, and metadata to organize and enhance the discoverability of your content. Creating your first feed is as simple as a single API call.",
        "organizeAndPublishContentTitle": "Organize and publish content of any type",
        "organizeAndPublishContentDetails": "With ComposableRSS, you can add and update content within your feeds by invoking targeted methods on the API. Whether you're publishing articles, blog posts, or multimedia content, managing your feed's content is straightforward behind a developer-friendly interface.",
        "organizeAndPublishContentDetails2": "Schedule content updates, set publication dates, and edit existing entries to keep your audience engaged with fresh, relevant content.",
        "manageFeedAuthenticationTitle": "Manage feed authentication and user credentials",
        "manageFeedAuthenticationDetails": "ComposableRSS offers HTTP BASIC user authentication and credential management for all feeds.",
        "customizeContentExpirationTitle": "Customize content expiration, archival, and purging",
        "customizeContentExpirationDetails": "ComposableRSS allows you to set custom rules for content expiration, archival, and purging. This helps you maintain a clean and efficient feed while ensuring that important content is preserved. Configure auto-archiving policies, content retention periods, and data purging schedules to align with your content strategy and compliance requirements.",
        "publishITunesTitle": "Publish iTunes podcasts",
        "publishITunesDetails": "If you're podcasting, ComposableRSS provides support for publishing iTunes podcasts and managing media enclosures. Utilize rich metadata support, episode management, and enclosure attachments to create an engaging podcasting experience for your audience.",
        "publishMediaRssTitle": "Publish MediaRSS groups and content",
        "publishMediaRssDetails": "ComposableRSS offers full support for MediaRSS groups and content, making it easy to manage and distribute multimedia content such as images, videos, and audio files within your feeds. Enhance your content distribution strategy by incorporating rich media assets, galleries, and multimedia enclosures to captivate your audience.",
        "supportOrganizationalNeedsTitle": "Support organizational needs with multiple users, social authentication and easy scaling via container composition",
        "supportOrganizationalNeedsDetails": "ComposableRSS is a multiuser platform that aims to be both secure and compliant with modern authentication standards. Additionally, its container composition architecture enables easy scaling and customization to meet your organizational requirements.",
        "supportOrganizationalNeedsDetails2": "Deploy ComposableRSS in containerized environments, leverage OAuth2 providers for centralized authentication, and scale horizontally to accommodate growing user demands while maintaining system reliability.",
        "composableRssIsFree": "ComposableRSS is fully free, open-source, community-supported, and protected by the GPLV3.",
        "openApiV3": "OpenAPIv3 is a standardized specification for documenting RESTful APIs. This OpenAPIv3 document is your guide to using the ComposableRSS API. Click the link to access detailed information on API endpoints, parameters, request/response formats, and examples for integration with ComposableRSS.",
        // 
      },
    },
  });

  vueApp.use(i18n);
});
