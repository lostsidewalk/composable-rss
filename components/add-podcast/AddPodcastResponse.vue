<template>
    <ApiResponse :status="200">
        <template #code>
            <pre>{
  "deployResponses":
  {
    "ATOM_10":
    {
      "publisherIdent": "ATOM_10",
      "timestamp": "2023-11-08T15:23:29.887+00:00",
      "urls":
      [
        "http://localhost:8081/feed/atom/c9e99583-62b2-4acc-aff7-cefc6c911e9b",
        "http://localhost:8081/feed/atom/me/spiders"
      ]
    },
    "JSON":
    {
      "publisherIdent": "JSON",
      "timestamp": "2023-11-08T15:23:29.895+00:00",
      "urls":
      [
        "http://localhost:8081/feed/json/c9e99583-62b2-4acc-aff7-cefc6c911e9b",
        "http://localhost:8081/feed/json/me/spiders"
      ]
    },
    "RSS_20":
    {
      "publisherIdent": "RSS_20",
      "timestamp": "2023-11-08T15:23:29.887+00:00",
      "urls":
      [
        "http://localhost:8081/feed/rss/c9e99583-62b2-4acc-aff7-cefc6c911e9b",
        "http://localhost:8081/feed/rss/me/spiders"
      ]
    }
  },
  "deployed": true,
  "postDTO":
  {
    "id": 1048576,
    "postDesc":
    {
      "ident": "BkxERjsA",
      "value": "spiders article description"
    },
    "postITunes":
    {
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
    },
    "postTitle":
    {
      "ident": "Do6XvqqE",
      "value": "spiders article"
    },
    "published": true,
    "queueIdent": "spiders"
  }
}</pre>
        </template>
    </ApiResponse>
</template>
