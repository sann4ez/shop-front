<script setup lang="ts">
import { defineProps, ref } from "vue";

export interface MenuItem {
  label: string;
  to?: string;
  children?: MenuItem[];
}

const props = defineProps<{
  items: MenuItem[];
  isRoot?: boolean; // 👈 додали прапорець
}>();

const isOpen = ref(false);
</script>

<template>
  <div class="catalog" @mouseenter="isOpen = true" @mouseleave="isOpen = false">
    <!-- тільки для root рівня показуємо головний заголовок -->
    <template v-if="isRoot">
      <NuxtLink to="/catalog" class="catalog__title">Каталог</NuxtLink>
    </template>

    <!-- Випадаюче меню -->
    <div v-if="isOpen || !isRoot" class="catalog__dropdown">
      <ul>
        <li v-for="(item, index) in items" :key="index">
          <NuxtLink v-if="item.to" :to="item.to">{{ item.label }}</NuxtLink>
          <span v-else>{{ item.label }}</span>

          <!-- Рекурсія для підкатегорій -->
          <Catalog
            v-if="item.children"
            :items="item.children"
            :is-root="false"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.catalog {
  position: relative;
  display: inline-block;

  &__title {
    display: inline-block;
    padding: 10px 20px;
    background: #eee;
    border-radius: 6px;
    color: #333;
  }

  &__dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    background: white;
    border: 1px solid #ddd;
    border-radius: 6px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 10px;
    z-index: 1000;

    ul {
      li {
        padding: 5px 10px;

        a,
        span {
          color: #333;
        }

        a:hover,
        span:hover {
          color: #007bff;
        }
      }
    }
  }
}
</style>
