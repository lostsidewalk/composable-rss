<template>
  <div class="password-update-panel">
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
                  {{ $t("passwordReset") }}
                </div>
                <!-- row -->
                <div class="row text-center">
                  <!-- col -->
                  <div class="col cols-12 cols-sm-8">
                    <div class="d-flex flex-row flex-wrap justify-center gap-1">
                      <!-- new password -->
                      <AuthTextField class="mt-4 mb-4" type="password" :label="$t('newPassword')"
                        :placeholder="$t('newPassword')" :model-value="newPassword"
                        @update:modelValue="newPassword = $event" />
                      <!-- new password (confirm) -->
                      <AuthTextField class="mt-4 mb-4" type="password" :label="$t('confirmNewPassword')"
                        :placeholder="$t('confirmNewPassword')" :model-value="newPasswordConfirmed"
                        @update:modelValue="newPasswordConfirmed = $event" />
                      <div class="d-flex flex-row flex-wrap">
                        <!-- submit button -->
                        <AuthButton class="ma-4" :label="$t('submit')" :is-loading="isLoading"
                          @clicked="$emit('submit', { newPassword: newPassword, newPasswordConfirmed: newPasswordConfirmed })" />
                      </div>
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
  </div>
</template>

<script>
export default {
  props: {
    serverMessage: { type: String, default: null },
    isLoading: { type: Boolean, default: false },
  },
  emits: ["submit"],
  data() {
    return {
      newPassword: '',
      newPasswordConfirmed: '',
      showPrivacyPolicy: false,
      isHovering: false,
    }
  },
}
</script>

<style scoped>
.logotext {
  font-family: 'Russo One' !important;
}

.password-update-panel {
  padding: 2rem;
}

.gap-1 {
  gap: 1rem;
}
</style>
