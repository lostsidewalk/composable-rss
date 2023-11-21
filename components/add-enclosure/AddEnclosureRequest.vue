<template>
    <ApiRequest>
        <template #code>
            <pre>curl --request POST \
  -H "Content-Type: application/json" \
  -H "X-ComposableRSS-API-Key: ${API_KEY}" \
  -H "X-ComposableRSS-API-Secret: ${API_SECRET}" \
  <span class="green">--data '{ 
    "url": "http://localhost:666/assets/spiders.mp4",
    "type": "MPEG-4",
    "length": "1048567"
  }' \</span>
  <span class="green">http://localhost:8080/v1/posts/1048576/enclosures</span></pre>
        </template>
    </ApiRequest>
</template>
