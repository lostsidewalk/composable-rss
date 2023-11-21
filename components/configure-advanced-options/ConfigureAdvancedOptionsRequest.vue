<template>
  <ApiRequest>
    <template #code>
      <pre>curl --request PUT \
  -H "Content-Type: application/json" \
  -H "X-ComposableRSS-API-Key: ${API_KEY}" \
  -H "X-ComposableRSS-API-Secret: ${API_SECRET}" \
  <span class="green">--data '{
    "atomConfig":
    {
        "authorEmail": "meh@lostsidewalk.com",
        "authorName": "meh",
        "authorUri": "https://www.lostsidewalk.com",
        "categoryLabel": "Spiders",
        "categoryTerm": "spiders"
    },
    "rssConfig":
    {
        "categoryValue": "spiders",
        "docs": "https://www.rssboard.org/rss-specification",
        "managingEditor": "meh@lostsidewalk.com (meh)",
        "rating": "GA",
        "skipDays": "Monday,Tuesday",
        "skipHours": "0,1,2",
        "ttl": 60,
        "webMaster": "meh@lostsidewalk.com (meh)"
    }
  }' http://localhost:8080/v1/queues/spiders/options</span></pre>
    </template>
  </ApiRequest>
</template>
