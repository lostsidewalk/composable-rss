<template>
    <ApiRequest>
        <template #code>
            <pre>curl --request POST \
  -H "Content-Type: application/json" \
  -H "X-ComposableRSS-API-Key: ${API_KEY}" \
  -H "X-ComposableRSS-API-Secret: ${API_SECRET}" \
  <span class="green">--data '{ "ident": "spiders" }' \</span>
  <span class="green">http://localhost:8080/v1/queues</span></pre>
        </template>
    </ApiRequest>
</template>