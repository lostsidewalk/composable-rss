<template>
    <div class="auth-panel">
        <!-- row -->
        <div class="d-flex row text-center justify-center">
            <!-- col -->
            <div class="cols-12 cols-sm-10">
                <!-- card -->
                <div @mouseover="isHovering = true" @mouseleave="isHovering = false"
                    :class="isHovering ? 'elevation-7' : 'elevation-6'" class="card flat">
                    <!-- row -->
                    <div class="row">
                        <!-- col -->
                        <div class="col cols-12">
                            <!-- card-text -->
                            <div class="card-text">
                                <!-- banner (large) -->
                                <div class="text-h5 text-center m-4 logotext">
                                    {{ $t("loginToComposableRss") }}
                                </div>
                                <!-- row -->
                                <div class="row text-center">
                                    <!-- col -->
                                    <div class="col cols-12 cols-sm-8">
                                        <div class="d-flex flex-row flex-wrap justify-center gap-1">
                                            <!-- username -->
                                            <AuthTextField class="m-4" :label="$t('username')" :placeholder="$t('username')"
                                                :model-value="username" @update:modelValue="username = $event" />
                                            <!-- password -->
                                            <AuthTextField type="password" class="m-4" :label="$t('password')"
                                                :placeholder="$t('password')" :model-value="password"
                                                @update:modelValue="password = $event" />
                                        </div>
                                        <div class="d-flex flex-row flex-wrap justify-center">
                                            <!-- submit button -->
                                            <AuthButton class="m-4" :label="$t('login')" :tooltip="$t('login')"
                                                :is-loading="isLoading"
                                                @clicked="$emit('login', { username: username, password: password })" />
                                            <!-- google button -->
                                            <GoogleAuthButton class="m-4" :tooltip="$t('login')" />
                                        </div>
                                        <AuthPanelLink @go="$emit('pw_reset')" :message="$t('accountRecoveryHere')" />
                                        <AuthPanelLink @go="$emit('register')" :message="$t('registerHere')" />
                                        <AuthServerResponse :server-message="serverMessage" />
                                        <button class="pa-2 text" :text="$t('privacyPolicy')"
                                            @click="showPrivacyPolicy = !showPrivacyPolicy" />
                                        <div class="dialog" v-if="showPrivacyPolicy" fullscreen scrollable>
                                            <PrivacyPolicyPanel @dismiss="showPrivacyPolicy = false" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "AuthPanel",
    props: {
        serverMessage: { type: String, default: null },
        isLoading: { type: Boolean, default: false },
    },
    emits: ["login", 'pw_reset', 'register'],
    data() {
        return {
            isHovering: false,
            step: null,
            username: "",
            password: "",
            showPrivacyPolicy: false,
        };
    },
};
</script>
  
<style scoped>
.logotext {
    font-family: "Russo One" !important;
}

.auth-panel {
    padding: 2rem;
}

.gap-1 {
    gap: 1rem;
}
</style>
