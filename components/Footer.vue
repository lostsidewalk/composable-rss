<template>
    <div class="footer m-4">
        <hr class="m-8" />
        <div class="flex justify-center gap-10 flex-wrap">
            <button @click.prevent="devBlog" size="small" class="border-0">
                {{ $t('devBlog') }}
            </button>
            <button @click="showPrivacyPolicy = !showPrivacyPolicy" size="small" class="border-0">
                {{ $t('privacyPolicy') }}
            </button>
            <button @click.prevent="sendSupportMail" size="small" class="border-0">
                {{ $t('email') }}
            </button>
            <button @click.prevent="twitter" size="small" class="border-0">
                {{ $t('twitter') }}
            </button>
            <button @click.prevent="github" size="small" class="border-0">
                {{ $t('github') }}
            </button>
            <button @click.prevent="twitch" size="small" class="border-0">
                {{ $t('twitch') }}
            </button>
            <button @click.prevent="discord" size="small" class="border-0">
                {{ $t('discord') }}
            </button>
        </div>
        <div class="row">
            <div class="text-center mt-4">
                <div class="copyright">
                    {{ $t('copyright') }} 2023 <a href="https://www.lostsidewalk.com" target="_blank">LOST SIDEWALK
                        SOFTWARE LLC</a>
                </div>
                <div class="copyright">
                    2501 Chatham Rd STE R | Springfield, IL 62704 | Sangamon County
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "FooterPanel",
    methods: {
        devBlog() {
            window.open('https://www.lostsidewalk.com/feedgears/devblog', '_blank');
        },
        sendSupportMail() {
            window.open('mailto:support@feedgears.com', '_blank');
        },
        twitter() {
            window.open('https://twitter.com/lostsidewalkllc', '_blank');
        },
        github() {
            window.open('https://github.com/lostsidewalk', '_blank');
        },
        twitch() {
            window.open('https://twitch.tv/elderscrollsjesus', '_blank');
        },
        discord() {
            window.open('https://discord.gg/7nyY89UrNw', '_blank');
        }
    }
}
</script>
  
<style>
.copyright {
    font-size: small;
}

.footer {
    font-family: 'Russo One';
}
</style>
