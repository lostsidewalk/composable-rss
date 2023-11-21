<template>
    <ApiRequest>
        <template #code>
            <pre>curl --request PUT \
  -H "Content-Type: application/json" \
  -H "X-ComposableRSS-API-Key: ${API_KEY}" \
  -H "X-ComposableRSS-API-Secret: ${API_SECRET}" \
  <span class="green">--data '{ "isRequired": "true" }' \</span>
  <span class="green">http://localhost:8080/v1/queues/spiders/auth</span></pre>
        </template>
    </ApiRequest>
</template>