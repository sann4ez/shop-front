<script setup lang="ts">
interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
  children?: Category[];
}

const categories: Category[] = [
  {
    id: 1,
    name: "Ворота",
    slug: "vorota",
    image: "https://picsum.photos/seed/gates/300/200",
    children: [
      { id: 11, name: "Секційні ворота", slug: "sektsiyni-vorota" },
      { id: 12, name: "Розпашні ворота", slug: "rozpashni-vorota" },
    ],
  },
  {
    id: 2,
    name: "Ролети",
    slug: "rolety",
    image: "https://picsum.photos/seed/roller/300/200",
  },
  {
    id: 3,
    name: "Парканні системи",
    slug: "parkanni-systemy",
    image: "https://picsum.photos/seed/fence/300/200",
  },
];
</script>

<template>
  <section class="catalog">
    <div class="container">
      <div class="catalog__header section__header">
        <h1 class="catalog__title section__title">Каталог</h1>
      </div>

      <div class="catalog__content">
        <ul class="catalog__list">
          <li
            v-for="category in categories"
            :key="category.id"
            class="catalog__item"
          >
            <NuxtLink :to="`/catalog/${category.slug}`" class="catalog__link">
              <img
                :src="category.image"
                :alt="category.name"
                class="catalog__image"
              />
              <span class="catalog__name">{{ category.name }}</span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.catalog {
  padding: 60px 0;

  &__header {
    margin-bottom: 40px;
    text-align: center;
  }

  &__title {
    font-size: 2rem;
    font-weight: 600;
  }

  &__content {
    display: flex;
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 24px;
    width: 100%;
    max-width: 900px;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  &__item {
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    }
  }

  &__link {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: inherit;
  }

  &__image {
    width: 100%;
    height: 160px;
    object-fit: cover;
  }

  &__name {
    display: block;
    padding: 16px;
    font-weight: 500;
    font-size: 1.1rem;
    text-align: center;
  }
}
</style>
