<template>
    <ApiResponse :status="201">
        <template #code>
            <pre>{
  "deployResponses":
  {
    "ATOM_10":
    {
      "publisherIdent": "ATOM_10",
      "timestamp": "2023-11-08T15:23:29.132+00:00",
      "urls":
      [
        "http://localhost:8081/feed/atom/c9e99583-62b2-4acc-aff7-cefc6c911e9b",
        "http://localhost:8081/feed/atom/me/spiders"
      ]
    },
    "JSON":
    {
      "publisherIdent": "JSON",
      "timestamp": "2023-11-08T15:23:29.146+00:00",
      "urls":
      [
        "http://localhost:8081/feed/json/c9e99583-62b2-4acc-aff7-cefc6c911e9b",
        "http://localhost:8081/feed/json/me/spiders"
      ]
    },
    "RSS_20":
    {
      "publisherIdent": "RSS_20",
      "timestamp": "2023-11-08T15:23:29.132+00:00",
      "urls":
      [
        "http://localhost:8081/feed/rss/c9e99583-62b2-4acc-aff7-cefc6c911e9b",
        "http://localhost:8081/feed/rss/me/spiders"
      ]
    }
  },
  "queueDTO":
  {
    "ident": "spiders",
    "isAuthenticated": false,
    "language": "en-US",
    "transportIdent": "c9e99583-62b2-4acc-aff7-cefc6c911e9b"
  }
}</pre>
        </template>
    </ApiResponse>
</template>
