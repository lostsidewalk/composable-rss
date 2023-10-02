<template>
    <div class="auth-panel">
        <div class="flex row text-center justify-center">
        <div class="flex-grow cols-sm-10">
            <div
            @mouseover="isHovering = true"
            @mouseleave="isHovering = false"
            :class="{'elevation-7': isHovering, 'elevation-6': !isHovering}"
            class="card flat shadow-md"
            >
            <div class="row">
                <div class="col flex-grow">
                <div class="card-title">{{ $t("loginToComposableRss") }}</div>
                <div class="card-text">
                    <div class="row text-center">
                    <div class="col flex-grow cols-sm-8">
                        <div class="flex flex-row flex-wrap justify-center gap-1">
                        <AuthTextField
                            class="m-4"
                            :label="$t('username')"
                            :placeholder="$t('username')"
                            :model-value="username"
                            @update:modelValue="username = $event"
                        />
                        <AuthTextField
                            type="password"
                            class="m-4"
                            :label="$t('password')"
                            :placeholder="$t('password')"
                            :model-value="password"
                            @update:modelValue="password = $event"
                        />
                        </div>
                        <div class="flex flex-row flex-wrap justify-center">
                        <AuthButton
                            class="m-4"
                            :label="$t('submit')"
                            :tooltip="$t('login')"
                            :is-loading="isLoading"
                            @clicked="$emit('login', { username, password })"
                        />
                        <GoogleAuthButton
                            class="m-4"
                            :tooltip="$t('login')"
                        />
                        </div>
                        <hr />
                        <AuthButton
                        class="m-4"
                        :label="$t('accountRecoveryHere')"
                        :tooltip="$t('accountRecoveryHere')"
                        :is-loading="isLoading"
                        @clicked="$emit('pw_reset')"
                        />
                        <AuthButton
                        class="m-4"
                        :label="$t('registerHere')"
                        :tooltip="$t('registerHere')"
                        :is-loading="isLoading"
                        @clicked="$emit('register')"
                        />
                        <AuthServerResponse :server-message="serverMessage" />
                        <button
                        class="pa-2 border-0"
                        :text="$t('privacyPolicy')"
                        @click="showPrivacyPolicy = !showPrivacyPolicy"
                        />
                        <div class="dialog" v-show="showPrivacyPolicy" fullscreen scrollable>
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
      serverMessage: String,
      isLoading: Boolean,
    },
    emits: ["login", "pw_reset", "register"],
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
.auth-panel {
    padding: 2rem;
}

.gap-1 {
    gap: 1rem;
}
</style>
