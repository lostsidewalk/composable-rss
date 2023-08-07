<template>
    <div class="card m-4">
        <div class="card-text d-flex flex-row">
            <!-- profile image -->
            <img v-if="authProvider !== 'LOCAL' && authProviderProfileImgUrl" :src="authProviderProfileImgUrl"
                referrerpolicy="no-referrer" class="m-4 profile-img" :alt="$t('oAuth2ProfileImage')" height="96"
                max-height="96" max-width="96" />
            <img v-else src="~/assets/feedgears.png" referrerpolicy="no-referrer" class="m-4 profile-img" height="96" max-height="96"
                max-width="96" />
        </div>
        <div class="card-actions">
            <!-- send API key via email -->
            <button class="text settings-button" v-if="!showDeactivateUser && !showResetPassword" size="small" @click="sendApiKeyViaEmail">
                {{ $t('emailApiKey') }}
            </button>
            <!-- deactivate account button -->
            <button class="text settings-button" v-if="!showDeactivateUser && !showResetPassword" size="small"
                @click="showDeactivateUser = true">
                {{ $t('deactivateAccount') }}
            </button>
            <!-- download your data button-->
            <button class="text settings-button" v-if="showDeactivateUser" size="small" @click="$emit('exportData')">{{
                $t('downloadYourData') }}</button>
            <!-- permanently delete your account button -->
            <button class="text settings-button" v-if="showDeactivateUser" size="small"
                @click="$emit('finalizeDeactivation')">{{
                    $t('permanentlyDeleteYourAccount') }}</button>
            <!-- cancel (deactivate account) button -->
            <button class="text settings-button" v-if="showDeactivateUser" id="cancelDeactivateAccount" size="small"
                @click="showDeactivateUser = false">{{ $t('cancel') }}</button>
            <button class="text settings-button" v-if="showResetPassword" size="small"
                @click="$emit('initPasswordReset')">{{
                    $t('sendPasswordResetEmail') }}</button>
            <!-- reset password button (local) -->
            <button class="text settings-button"
                v-if="authProvider === 'LOCAL' && !showResetPassword && !showDeactivateUser" id="resetPassword" size="small"
                @click="showResetPassword = true">{{ $t('resetPassword')
                }}</button>
            <!-- cancel (reset password) -->
            <button class="text settings-button" v-if="showResetPassword" id="cancelResetPassword" size="small"
                @click="showResetPassword = false">{{ $t('cancel') }}</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        authProvider: { type: String, required: true },
        authProviderImgUrl: { type: String, required: false },
    },
    emits: ["exportData", "finalizeDeactivation", "initPasswordReset"],
    data() {
        return {
            showDeactivateUser: false,
            showResetPassword: false,
            showApiKey: false,
        }
    }
}
</script>

<style scoped>
.profile-img {
    height: 96px;
    width: 95px;
    border: 1px solid black;
    border-radius: 3px;
}

.api-key {
    font-family: 'Russo One';
}
</style>