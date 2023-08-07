<template>
  <div class="password-reset-request-panel">
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
                  {{ $t("pwResetRequestMessage") }}
                </div>
                <!-- row -->
                <div class="row text-center">
                  <!-- col -->
                  <div class="col cols-12 cols-sm-8">
                    <div class="d-flex flex-row flex-wrap justify-center gap-1">
                      <!-- username -->
                      <AuthTextField class="m-4" :label="$t('username')" :placeholder="$t('username')"
                        :model-value="username" @update:modelValue="username = $event" />
                      <!-- email address -->
                      <AuthTextField class="m-4" :label="$t('emailAddress')" :placeholder="$t('emailAddress')"
                        :model-value="email" @update:modelValue="email = $event" />
                    </div>
                    <div class="d-flex flex-row flex-wrap justify-center">
                      <!-- submit button -->
                      <AuthButton class="m-4" :label="$t('submit')" :is-loading="isLoading"
                        @clicked="$emit('submit', { email: email, username: username })" />
                    </div>
                    <AuthPanelLink @go="$emit('register')" :message="$t('registerHere')" />
                    <AuthPanelLink @go="$emit('auth')" :message="$t('alreadyHaveAnAccount')" />
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
  name: "PasswordResetRequestPanel",
  props: {
    serverMessage: { type: String, default: null },
    isLoading: { type: Boolean, default: false },
  },
  emits: ["submit", "auth", "register"],
  data() {
    return {
      username: '',
      email: '',
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

.password-reset-request-panel {
  padding: 2rem;
}

.gap-1 {
  gap: 1rem;
}
</style>
