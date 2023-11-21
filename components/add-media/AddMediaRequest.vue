<template>
    <ApiRequest>
        <template #code>
<pre>curl --request PUT \
  -H "Content-Type: application/json" \
  -H "X-ComposableRSS-API-Key: ${API_KEY}" \
  -H "X-ComposableRSS-API-Secret: ${API_SECRET}" \
  <span class="green">--data '{
    "postMediaGroups": [
        {
            "postMediaContents":
            [
                {
                    "height": "1024",
                    "reference":
                    {
                        "uri": "https://localhost:666/video.mpg"
                    },
                    "type": "MPEG-4",
                    "width": "1024"
                }
            ],
            "postMediaMetadata":
            {
                "community":
                {
                   "starRating":
                    {
                        "average": "5",
                        "count": "1024",
                        "max": "5",
                        "min": "5"
                    },
                    "statistics":
                    {
                        "favorites": "1024",
                        "views": "1024"
                    }
                },
                "desc": "A video all about spiders",
                "thumbnails":
                [],
                "title": "All About Spiders"
            }
        }
    ]
  }' \
  http://localhost:8080/v1/posts/1048576/media</span></pre>

        </template>
    </ApiRequest>
</template>