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

  <div class="container">
    <div class="typography">
    </div>
  </div>
</main>
  
</template>