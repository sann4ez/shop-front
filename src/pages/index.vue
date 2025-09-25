<script setup lang="ts">
import Header from "~/components/Header.vue";
</script>

<template>
  <Header />

  <main class="main">
    <slot />
  </main>

  <footer class="footer">
    <div class="container">
      <p>© 2024 Всі права захищені</p>
    </div>
  </footer>
</template>

<style scoped lang="scss"></style>
