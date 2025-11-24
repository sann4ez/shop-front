<script setup>

const route = useRoute();
const slug = route.params.slug;


const { data: page } = await useAsyncData(
  `dynamic-page`,
  () =>
    $fetch(`/pages/${slug}`, {
      ...fetchOptions(),
    }),
);

console.log(page.value)
</script>


<template>
<main class="main">

  <div class="container" v-if="page?.data?.body">
    <div class="typography" v-html="page.data.body">
    </div>
  </div>
</main>
  
</template>