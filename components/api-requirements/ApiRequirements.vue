<template>
    <BorderBox :title="$t('apiRequiresTWoHeaderValues')" :collapsible="true">
        <template #content>
            <div>
                <pre>X-ComposableRSS-API-Key <i>{{ isAuthenticated ? roAccount.apiKey : $t('apiKey') }}</i></pre>
            </div>
            <div>
                <pre>X-ComposableRSS-API-Secret <i>{{ $t('apiSecret') }}</i></pre>
            </div>
            <div>
                {{ $t('apiSecretHasBeeenMailed') }}
            </div>
            <div><i>{{ $t('yourImageMayAlreadyHaveCredentials') }}</i></div>
            <div>
                {{ $t('basicQueryInstructions') }}
            </div>
            <div>
                <pre>curl -H "X-ComposableRSS-API-Key ${API_KEY}" -H "X-ComposableRSS-API-Secret ${API_SECRET}" \
http://localhost:8080/[endpoint]</pre>
            </div>
        </template>
    </BorderBox>
</template>

<script setup>
import { useAuthService } from '@/services/useAuthService';

const {
    auth, isAuthenticated
} = useAuthService();
</script>