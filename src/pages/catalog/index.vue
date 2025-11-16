<script setup>
const categories = [
  {
    name: "Ворота",
    slug: "vorota",
    image: "https://picsum.photos/seed/gates/300/200",
  },
  {
    name: "Ролети",
    slug: "rolety",
    image: "https://picsum.photos/seed/roller/300/200",
  },
  {
    name: "Парканні системи",
    slug: "parkanni-systemy",
    image: "https://picsum.photos/seed/fence/300/200",
  },
  {
    name: "Ворота",
    slug: "vorota",
    image: "https://picsum.photos/seed/gates/300/200",
  },
  {
    name: "Ролети",
    slug: "rolety",
    image: "https://picsum.photos/seed/roller/300/200",
  },
  {
    name: "Парканні системи",
    slug: "parkanni-systemy",
    image: "https://picsum.photos/seed/fence/300/200",
  },
  {
    name: "Ворота",
    slug: "vorota",
    image: "https://picsum.photos/seed/gates/300/200",
  },
  {
    name: "Ролети",
    slug: "rolety",
    image: "https://picsum.photos/seed/roller/300/200",
  },
  {
    name: "Парканні системи",
    slug: "parkanni-systemy",
    image: "https://picsum.photos/seed/fence/300/200",
  },
  {
    name: "Ворота",
    slug: "vorota",
    image: "https://picsum.photos/seed/gates/300/200",
  },
  {
    name: "Ролети",
    slug: "rolety",
    image: "https://picsum.photos/seed/roller/300/200",
  },
  {
    name: "Парканні системи",
    slug: "parkanni-systemy",
    image: "https://picsum.photos/seed/fence/300/200",
  },
  {
    name: "Ворота",
    slug: "vorota",
    image: "https://picsum.photos/seed/gates/300/200",
  },
  {
    name: "Ролети",
    slug: "rolety",
    image: "https://picsum.photos/seed/roller/300/200",
  },
  {
    name: "Парканні системи",
    slug: "parkanni-systemy",
    image: "https://picsum.photos/seed/fence/300/200",
  },
];

//API
const { data: catalog } = await useAsyncData(
  `catalog`,
  () =>
    $fetch(`/shop/categories`, {
      ...fetchOptions(),
    }),
);

console.log(catalog.value)

</script>

<template>
  <main class="main">
    <section class="catalog">
      <div class="container">
        <div class="catalog__header section__header">
          <h1 class="catalog__title section__title">Каталог</h1>
        </div>

        <div class="catalog__content">
          <ul class="catalog__list">
            <li
              v-for="category in catalog.data"
              :key="category.id"
              class="catalog__item"
            >
              <NuxtLink :to="`/catalog/${category.slug}`" class="catalog__link">
                <img
                  :src="category.image.url"
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
  </main>
</template>

<style scoped lang="scss">
.catalog {
  padding: 60rem 0;

  &__header {
    margin-bottom: 40rem;
    text-align: center;
  }

  &__title {
    font-size: 40rem;
    font-weight: 600;
  }

  &__content {
    display: flex;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: 24rem;
    width: 100%;
    list-style: none;
    padding: 0;
    margin: 0;
    @media (max-width: 991rem) {
      gap: 15rem;
    }
  }

  &__item {
    background-color: #fff;
    border-radius: 10rem;
    overflow: hidden;
    width: calc((100% - 48rem) / 3);
    box-shadow: 0 2rem 8rem rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-4rem);
      box-shadow: 0 4rem 16rem rgba(0, 0, 0, 0.1);
    }
    @media (max-width: 991rem) {
      width: calc((100% - 15rem) / 2);
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
    height: 160rem;
    object-fit: cover;
  }

  &__name {
    display: block;
    padding: 16rem;
    font-weight: 500;
    font-size: 20rem;
    text-align: center;
  }
}
</style>
