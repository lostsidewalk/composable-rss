<template>
  <div class="registration-request-panel">
    <div class="flex row text-center justify-center">
      <div class="flex-grow cols-sm-10">
        <div @mouseover="isHovering = true" @mouseleave="isHovering = false"
          :class="{ 'elevation-7': isHovering, 'elevation-6': !isHovering }" class="card flat shadow-md">
          <div class="row">
            <div class="col flex-grow">
              <div class="card-title">{{ $t("accountRegistration") }}</div>
              <div class="card-text">
                <div class="row text-center">
                  <div class="col flex-grow cols-sm-8">
                    <div class="flex flex-row flex-wrap justify-center gap-1">
                      <AuthTextField class="m-4" :label="$t('emailAddress')" :placeholder="$t('emailAddress')"
                        v-model="email" />
                      <AuthTextField class="m-4" :label="$t('username')" :placeholder="$t('username')"
                        v-model="username" />
                      <AuthTextField type="password" class="m-4" :label="$t('password')" :placeholder="$t('password')"
                        v-model="password" />
                    </div>
                    <div class="flex flex-row flex-wrap justify-center">
                      <AuthButton class="m-4" :label="$t('submit')" :is-loading="isLoading" @clicked="emitSubmit" />
                    </div>
                    <hr />
                    <AuthButton class="m-4" :label="$t('accountRecoveryHere')" :tooltip="$t('accountRecoveryHere')"
                      :is-loading="isLoading" @clicked="emitPwReset" />
                    <AuthButton class="m-4" :label="$t('alreadyHaveAnAccount')" :tooltip="$t('alreadyHaveAnAccount')"
                      :is-loading="isLoading" @clicked="emitAuth" />
                    <AuthServerResponse :server-message="serverMessage" />
                    <button class="pa-2 border-0" :text="$t('privacyPolicy')"
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
  name: "RegistrationRequestPanel",
  props: {
    serverMessage: { type: String, default: null },
    isLoading: { type: Boolean, default: false },
  },
  emits: ["submit", "auth", "pw_reset"],
  data() {
    return {
      username: "",
      email: "",
      password: "",
      showPrivacyPolicy: false,
      isHovering: false,
    };
  },
  methods: {
    emitSubmit() {
      this.$emit("submit", {
        username: this.username,
        email: this.email,
        password: this.password,
        userType: this.userType,
      });
    },
    emitPwReset() {
      this.$emit("pw_reset");
    },
    emitAuth() {
      this.$emit("auth");
    },
  },
};
</script>

<style scoped>
.registration-request-panel {
  padding: 2rem;
}

.gap-1 {
  gap: 1rem;
}
</style>
