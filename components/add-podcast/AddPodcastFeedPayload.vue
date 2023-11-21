<template>
    <FeedPayload>
        <template #rss20>
            <pre>
&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;rss xmlns:itunes=&quot;http://www.itunes.com/dtds/podcast-1.0.dtd&quot; version=&quot;2.0&quot;&gt;
  &lt;channel&gt;
    &lt;title&gt;spiders&lt;/title&gt;
    &lt;link&gt;http://localhost:8081/feed/rss/c9e99583-62b2-4acc-aff7-cefc6c911e9b&lt;/link&gt;
    &lt;description&gt;spiders&lt;/description&gt;
    &lt;language&gt;en-US&lt;/language&gt;
    &lt;pubDate&gt;Wed, 08 Nov 2023 15:23:29 GMT&lt;/pubDate&gt;
    &lt;generator&gt;NewsGears RSS&lt;/generator&gt;
    &lt;ttl&gt;10&lt;/ttl&gt;
    &lt;item&gt;
      &lt;title&gt;spiders article&lt;/title&gt;
      &lt;description&gt;spiders article description&lt;/description&gt;
      &lt;enclosure url=&quot;http://localhost:666/assets/spiders.mp4&quot; length=&quot;1048567&quot; type=&quot;MPEG-4&quot; /&gt;
      &lt;guid isPermaLink=&quot;false&quot; /&gt;
      &lt;itunes:duration&gt;01:00:00&lt;/itunes:duration&gt;
      &lt;itunes:order&gt;1&lt;/itunes:order&gt;
      &lt;itunes:episodeType&gt;FULL&lt;/itunes:episodeType&gt;
      &lt;itunes:season&gt;1&lt;/itunes:season&gt;
      &lt;itunes:episode&gt;1&lt;/itunes:episode&gt;
      &lt;itunes:title&gt;Spiders on the loose&lt;/itunes:title&gt;
      &lt;itunes:author&gt;me&lt;/itunes:author&gt;
      &lt;itunes:explicit&gt;yes&lt;/itunes:explicit&gt;
      &lt;itunes:image href=&quot;http://localhost:666/img/spiders&quot; /&gt;
      &lt;itunes:keywords&gt;spiders&lt;/itunes:keywords&gt;
      &lt;itunes:subtitle&gt;8-legged foes&lt;/itunes:subtitle&gt;
      &lt;itunes:summary&gt;Spiders rum amok&lt;/itunes:summary&gt;
    &lt;/item&gt;
  &lt;/channel&gt;
&lt;/rss&gt;
</pre>
        </template>
        <template #atom10>
            <pre>
&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;feed xmlns=&quot;http://www.w3.org/2005/Atom&quot; xmlns:itunes=&quot;http://www.itunes.com/dtds/podcast-1.0.dtd&quot;&gt;
  &lt;title&gt;spiders&lt;/title&gt;
  &lt;link rel=&quot;self&quot; href=&quot;http://localhost:8081/feed/atom/c9e99583-62b2-4acc-aff7-cefc6c911e9b&quot; /&gt;
  &lt;subtitle type=&quot;text&quot;&gt;spiders&lt;/subtitle&gt;
  &lt;id&gt;http://localhost:8081/feed/atom/c9e99583-62b2-4acc-aff7-cefc6c911e9b&lt;/id&gt;
  &lt;generator uri=&quot;https://www.feedgears.com&quot; version=&quot;0.5.9&quot;&gt;NewsGears RSS&lt;/generator&gt;
  &lt;entry&gt;
    &lt;title&gt;spiders article&lt;/title&gt;
    &lt;link rel=&quot;enclosure&quot; type=&quot;MPEG-4&quot; href=&quot;http://localhost:666/assets/spiders.mp4&quot; length=&quot;1048567&quot; /&gt;
    &lt;published&gt;2023-11-08T15:23:29Z&lt;/published&gt;
    &lt;summary&gt;spiders article description&lt;/summary&gt;
    &lt;source&gt;
      &lt;title&gt;spiders&lt;/title&gt;
      &lt;link rel=&quot;self&quot; href=&quot;http://localhost:8081/feed/atom/c9e99583-62b2-4acc-aff7-cefc6c911e9b&quot; /&gt;
      &lt;subtitle type=&quot;text&quot;&gt;spiders&lt;/subtitle&gt;
      &lt;id&gt;http://localhost:8081/feed/atom/c9e99583-62b2-4acc-aff7-cefc6c911e9b&lt;/id&gt;
      &lt;generator uri=&quot;https://www.feedgears.com&quot; version=&quot;0.5.9&quot;&gt;NewsGears RSS&lt;/generator&gt;
    &lt;/source&gt;
    &lt;itunes:duration&gt;01:00:00&lt;/itunes:duration&gt;
    &lt;itunes:order&gt;1&lt;/itunes:order&gt;
    &lt;itunes:episodeType&gt;FULL&lt;/itunes:episodeType&gt;
    &lt;itunes:season&gt;1&lt;/itunes:season&gt;
    &lt;itunes:episode&gt;1&lt;/itunes:episode&gt;
    &lt;itunes:title&gt;Spiders on the loose&lt;/itunes:title&gt;
    &lt;itunes:author&gt;me&lt;/itunes:author&gt;
    &lt;itunes:explicit&gt;yes&lt;/itunes:explicit&gt;
    &lt;itunes:image href=&quot;http://localhost:666/img/spiders&quot; /&gt;
    &lt;itunes:keywords&gt;spiders&lt;/itunes:keywords&gt;
    &lt;itunes:subtitle&gt;8-legged foes&lt;/itunes:subtitle&gt;
    &lt;itunes:summary&gt;Spiders rum amok&lt;/itunes:summary&gt;
  &lt;/entry&gt;
&lt;/feed&gt;
</pre>
        </template>
        <template #json>
            <pre>{
  "feed":
  {
    "ident": "spiders",
    "language": "en-US",
    "pubDate": "Nov 8, 2023, 3:23:29 PM",
    "url": "http://localhost:8081/feed/json/c9e99583-62b2-4acc-aff7-cefc6c911e9b"
  },
  "posts":
  [
    {
      "enclosures":
      [
        {
          "ident": "GSZ0pW6W",
          "length": 1048567.0,
          "type": "MPEG-4",
          "url": "http://localhost:666/assets/spiders.mp4"
        }
      ],
      "postDesc": "spiders article description",
      "postITunes":
      {
        "author": "me",
        "duration": 3600000.0,
        "episode": 1.0,
        "episodeType": "FULL",
        "imageUri": "http://localhost:666/img/spiders",
        "isBlock": false,
        "isCloseCaptioned": false,
        "isExplicit": true,
        "keywords":
        [
          "spiders"
        ],
        "order": 1.0,
        "season": 1.0,
        "subTitle": "8-legged foes",
        "summary": "Spiders rum amok",
        "title": "Spiders on the loose"
      },
      "postTitle": "spiders article",
      "postUrl": null,
      "publishTimestamp": null
    }
  ]
}</pre>
        </template>
    </FeedPayload>
</template>
