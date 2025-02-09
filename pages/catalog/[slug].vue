<script setup lang="ts">
import { useRoute } from "#app";

const route = useRoute();
const category = route.params.slug;
</script>

<template>
  <div>
    <h1>Категорія: {{ category }}</h1>
    <p>Список товарів у категорії "{{ category }}".</p>
  </div>
</template>
