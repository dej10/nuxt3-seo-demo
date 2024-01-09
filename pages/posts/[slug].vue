<template>
  <div>

  <h1>{{ post.title }}</h1>

<p>  {{ post.body }}</p>
    
  </div>
</template>

<script lang="ts" setup>

export interface Post {
  id: number,
  userId: number,
  title: string,
  body: string
}

const metaDefaults = useDefault('meta')

const post = ref<Post>({
  id: 0,
  userId : 0,
  title : '',
  body : '',
})

const { data } = await useFetch<Post>(`https://jsonplaceholder.typicode.com/posts/${useRoute().params.slug}`)

post.value = data.value as Post


useSeoMeta({
  ...metaDefaults,
  ogType : 'article',
    title: post.value.title,
  ogTitle: post.value.title,
  description:
    post.value.body,
  ogDescription:
    post.value.body,
})

</script>

<style scoped>

</style>

