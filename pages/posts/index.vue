
<template>
  <div>
  <h1>All Posts</h1>

  <div v-for="post in posts.slice(0, 20)" :key="post.id" class="card"> 

<NuxtLink :to="`/posts/${post.id}`"> <h5>{{ post.title }}</h5></NuxtLink>
  <p>{{ post.body.substring(0, 50) }}...</p>
  </div>
  </div>

</template>

<script lang="ts" setup>

const metaDefaults = useDefault('meta')

export interface Post {
  id: number,
  userId: number,
  title: string,
  body: string
}

const posts = ref<Post[]>([])

const { data } = await useFetch<Post[]>('https://jsonplaceholder.typicode.com/posts')
posts.value = data.value as Post []





useSeoMeta({
  ...metaDefaults,
  title: 'Posts | SEO DEMO',
  ogTitle: 'Posts | SEO DEMO',
  description:
    'Deserunt occaecat ex do ut. Dolore eiusmod dolor dolore eu consectetur sint sint ex. Fugiat commodo aliqua ipsum sint excepteur sint occaecat reprehenderit. Non sit in laboris aliquip in et cupidatat exercitation.',
  ogDescription:
    'Deserunt occaecat ex do ut. Dolore eiusmod dolor dolore eu consectetur sint sint ex. Fugiat commodo aliqua ipsum sint excepteur sint occaecat reprehenderit. Non sit in laboris aliquip in et cupidatat exercitation.',
    ogImage : "https://picsum.photos/id/598/600/400"
})


</script>

<style scoped>

</style>

