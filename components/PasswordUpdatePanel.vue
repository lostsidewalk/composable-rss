<template>
  <div class="password-update-panel">
    <div class="flex row text-center justify-center">
      <div class="flex-grow cols-sm-10">
        <div @mouseover="isHovering = true" @mouseleave="isHovering = false"
          :class="{ 'elevation-7': isHovering, 'elevation-6': !isHovering }" class="card flat shadow-md">
          <div class="row">
            <div class="col flex-grow">
              <div class="card-title">{{ $t("passwordReset") }}</div>
              <div class="card-text">
                <div class="row text-center">
                  <div class="col flex-grow cols-sm-8">
                    <div class="flex flex-row flex-wrap justify-center gap-1">
                      <AuthTextField class="mt-4 mb-4" type="password" :label="$t('newPassword')"
                        :placeholder="$t('newPassword')" v-model="newPassword" />
                      <AuthTextField class="mt-4 mb-4" type="password" :label="$t('confirmNewPassword')"
                        :placeholder="$t('confirmNewPassword')" v-model="newPasswordConfirmed" />
                      <div class="flex flex-row flex-wrap">
                        <AuthButton class="ma-4" :label="$t('submit')" :is-loading="isLoading"
                          @clicked="$emit('submit', { newPassword, newPasswordConfirmed })" />
                      </div>
                      <AuthServerResponse :server-message="serverMessage" />
                      <button class="pa-2 border-0" :text="$t('privacyPolicy')"
                        @click="showPrivacyPolicy = !showPrivacyPolicy" />
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
  </div>
</template>

<script>
export default {
  props: {
    serverMessage: String,
    isLoading: Boolean,
  },
  emits: ["submit"],
  data() {
    return {
      newPassword: "",
      newPasswordConfirmed: "",
      showPrivacyPolicy: false,
      isHovering: false,
    };
  },
};
</script>

<style scoped>
.password-update-panel {
  padding: 2rem;
}

.gap-1 {
  gap: 1rem;
}
</style>
