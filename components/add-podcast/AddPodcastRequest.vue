<template>
    <ApiRequest>
        <template #code>
            <pre>curl --request PUT \
  -H "Content-Type: application/json" \
  -H "X-ComposableRSS-API-Key: ${API_KEY}" \
  -H "X-ComposableRSS-API-Secret: ${API_SECRET}" \
  <span class="green">--data '{ 
    "author": "me", 
    "duration": 3600000, 
    "episode": 1, 
    "episodeType": "FULL", 
    "imageUri": "http://localhost:666/img/spiders", 
    "isBlock": false, 
    "isCloseCaptioned": false, 
    "isExplicit": true, 
    "keywords": 
    [ 
        "spiders" 
    ], 
    "order": 1, 
    "season": 1, 
    "subTitle": "8-legged foes", 
    "summary": "Spiders rum amok", 
    "title": "Spiders on the loose" 
  }' \</span>
  <span class="green">http://localhost:8080/v1/posts/1048576/itunes</span></pre>
        </template>
    </ApiRequest>
</template>