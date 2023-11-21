<template>
    <FeedPayload>
        <template #rss20>
            <pre>curl -X GET http://localhost:8081/feed/rss/me/spiders<br>
&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;rss version=&quot;2.0&quot;&gt;
  &lt;channel&gt;
    &lt;title&gt;spiders&lt;/title&gt;
    &lt;link&gt;http://localhost:8081/feed/rss/c9e99583-62b2-4acc-aff7-cefc6c911e9b&lt;/link&gt;
    &lt;description&gt;spiders&lt;/description&gt;
    &lt;language&gt;en-US&lt;/language&gt;
    &lt;pubDate&gt;Wed, 08 Nov 2023 15:23:29 GMT&lt;/pubDate&gt;
    &lt;generator&gt;NewsGears RSS&lt;/generator&gt;
    &lt;ttl&gt;10&lt;/ttl&gt;
  &lt;/channel&gt;
&lt;/rss&gt;
</pre>
        </template>
        <template #atom10>
            <pre>curl -X GET http://localhost:8081/feed/atom/me/spiders<br>
&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;feed xmlns=&quot;http://www.w3.org/2005/Atom&quot;&gt;
  &lt;title&gt;spiders&lt;/title&gt;
  &lt;link rel=&quot;self&quot; href=&quot;http://localhost:8081/feed/atom/c9e99583-62b2-4acc-aff7-cefc6c911e9b&quot; /&gt;
  &lt;subtitle type=&quot;text&quot;&gt;spiders&lt;/subtitle&gt;
  &lt;id&gt;http://localhost:8081/feed/atom/c9e99583-62b2-4acc-aff7-cefc6c911e9b&lt;/id&gt;
  &lt;generator uri=&quot;https://www.feedgears.com&quot; version=&quot;0.5.9&quot;&gt;NewsGears RSS&lt;/generator&gt;
&lt;/feed&gt;
</pre>
        </template>
        <template #json>
            <pre>curl -X GET http://localhost:8081/feed/json/me/spiders<br>
{
  "feed":
  {
    "ident": "spiders",
    "language": "en-US",
    "pubDate": "Nov 8, 2023, 3:23:29 PM",
    "url": "http://localhost:8081/feed/json/c9e99583-62b2-4acc-aff7-cefc6c911e9b"
  },
  "posts":
  []
}</pre>
        </template>
    </FeedPayload>
</template>