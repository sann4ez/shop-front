<script setup>
// Отримуємо slug категорії з маршруту
const route = useRoute();
const slug = route.params.slug;

// Тимчасові тестові категорії
const categories = [
  { slug: "vorota", name: "Ворота" },
  { slug: "rolety", name: "Ролети" },
  { slug: "parkanni-systemy", name: "Парканні системи" },
];

// Знаходимо поточну категорію
const category = computed(
  () =>
    categories.find((c) => c.slug === slug) ?? { name: "Невідома категорія" }
);

// Анімація на Фільтр
const isOpen = ref(false);

function openMenu() {
  isOpen.value = true;
  scrollBody(true);
}

function closeMenu() {
  isOpen.value = false;
  scrollBody(false);
}

const products = [
  {
    name: "Сучасний металевий стілець",
    price: 1200,
    priceOld: 1400,
    article: "ART-0001",
    image: "https://picsum.photos/300/300?1",
  },
  {
    name: "Великий обідній стіл з натурального дуба на 6 персон із захисним лакованим покриттям та масивними ніжками",
    price: 1500,
    priceOld: 1600,
    article: "ART-0002",
    image: "https://picsum.photos/300/300?2",
  },
  {
    name: "Настільна керамічна лампа з декоративною основою та текстильним абажуром кольору молочного льону для спальні та вітальні",
    price: 1000,
    priceOld: 1300,
    article: "ART-0003",
    image: "https://picsum.photos/300/300?3",
  },
  {
    name: "Комплект кухонних ножів",
    price: 1800,
    priceOld: 1950,
    article: "ART-0004",
    image: "https://picsum.photos/300/300?4",
  },
  {
    name: "Великий двосторонній плед із мікрофібри з утепленим шаром для спальні та вітальні, розмір 220x240 см, колір світло-бежевий",
    price: 2000,
    priceOld: 0,
    article: "ART-0005",
    image: "https://picsum.photos/300/300?5",
  },
];

const filters = ref([
  {
    name: "Колір",
    properties: [
      { name: "Червоний" },
      { name: "Синій" },
      { name: "Зелений" },
      { name: "Жовтий" },
    ],
  },
  {
    name: "Колір",
    properties: [
      { name: "Червоний" },
      { name: "Синій" },
      { name: "Зелений" },
      { name: "Жовтий" },
    ],
  },
  {
    name: "Колір",
    properties: [
      { name: "Червоний" },
      { name: "Синій" },
      { name: "Зелений" },
      { name: "Жовтий" },
    ],
  },
  {
    name: "Колір",
    properties: [
      { name: "Червоний" },
      { name: "Синій" },
      { name: "Зелений" },
      { name: "Жовтий" },
    ],
  },
  {
    name: "Колір",
    properties: [
      { name: "Червоний" },
      { name: "Синій" },
      { name: "Зелений" },
      { name: "Жовтий" },
    ],
  },
  {
    name: "Колір",
    properties: [
      { name: "Червоний" },
      { name: "Синій" },
      { name: "Зелений" },
      { name: "Жовтий" },
    ],
  },
]);

console.log(filters.value, "filter");
</script>

<template>
  <main class="main">
    <section class="category-top">
      <div class="container">
        <div class="category-top__header">
          <h1 class="category__title section__title">{{ category.name }}</h1>

          <div class="category__controls">
            <div class="category__filter">
              <button class="category__filter-btn" @click="openMenu">
                <span class="category__filter-span">Фільтри</span>
              </button>
            </div>
          </div>

          <transition name="slide-left">
            <div
              class="menu__filter-menu"
              :class="{ 'menu__filter-menu--open': isOpen }"
            >
              <div class="menu__filter-header">
                <span class="menu__filter-title">Фільтр</span>
                <button
                  class="menu__filter-close"
                  aria-label="Закрити фільтр"
                  @click="closeMenu"
                >
                  <svg class="icon menu__filter-close-icon">
                    <use xlink:href="/images/sprite.svg#close" />
                  </svg>
                </button>
              </div>
              <div class="menu__filter-body">
                <div class="menu__filter-wrapper">
                  <ul class="menu__filter-list">
                    <li
                      v-for="(item, index) in filters"
                      :key="`filter-collaps-${index}`"
                      class="menu__filter-item"
                    >
                      <Collaps :pre-open="true">
                        <template #label> {{ item.name }} </template>
                        <template #body>
                          <ul class="menu__filter-dropdown-list">
                            <li
                              v-for="(item, index) in item.properties"
                              :key="index"
                              class="menu__filter-dropdown-item"
                            >
                              <FieldsCheckbox :label="item.name" />
                            </li>
                          </ul>
                        </template>
                      </Collaps>
                      <hr class="menu__filter-line" />
                    </li>
                  </ul>

                  <Collaps :pre-open="true">
                    <template #label>Ціна </template>
                    <template #body>
                       <div class="menu__filter-dropdown">
                        <ul class="menu__filter-dropdown-list">
                          <li
                            class="menu__filter-dropdown-item menu__filter-price"
                          >
                            <div class="menu__filter-price-inputs">
                              <input
                                type="number"
                                v-model="priceFrom"
                                placeholder="від"
                                class="menu__filter-input"
                              />
                              <span class="menu__filter-price-separator"
                                >–</span
                              >
                              <input
                                type="number"
                                v-model="priceTo"
                                placeholder="до"
                                class="menu__filter-input"
                              />
                            </div>
                          </li>
                        </ul>
                      </div>
                    </template>
                  </Collaps>
                </div>
              </div>

              <div class="menu__filter-footer">
                <button type="button" class="filter-btn filter-btn--apply">
                  Застосувати
                </button>

                <hr class="menu__filter-line" />

                <button type="button" class="filter-btn filter-btn--reset">
                  Скинути
                </button>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </section>

    <section class="category__catalog">
      <div class="container">
        <div class="category__wrapper">
          <CardProductCard
            v-for="(item, index) in products"
            :key="`item-${index}`"
            :product="item"
          />
        </div>
      </div>
    </section>
    <div
      class="menu__filter-overlay"
      :class="{ active: isOpen }"
      @click="closeMenu"
    ></div>
  </main>
</template>

<style scoped lang="scss">
.icon {
  fill: #fff;
}
.category__wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 30rem;
  .product-card {
    width: calc((100% - 60rem) / 3);
  }
}

.category-top {
  padding: 30rem 0;

  .category-top__header {
    display: flex;
    flex-direction: column;
    row-gap: 50rem;
  }

  .category__title {
    text-align: start;
  }

  .category__controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .category__select {
    padding: 6rem 12rem;
    border: 1px solid #ccc;
    border-radius: 6rem;
    font-size: 0.95rem;
    background-color: #fff;
  }

  label {
    margin-right: 6rem;
    color: #555;
    font-weight: 500;
  }
}

.category__catalog {
  padding: 40rem 0;
}

.category__filter-btn {
  width: 150rem;
  height: 30rem;
  border: 2px solid #be9960;
}

.category__filter-span {
  font-weight: 500;
}

.menu__filter-menu {
  background: #fff;
  width: 250rem;
  height: 100vh;
  position: fixed;
  top: 0;
  left: -250rem;
  z-index: 10;
  transition: all 0.4s ease;
  padding: 20rem;
  &--open {
    left: 0;
  }
}

/* Оверлей */
.menu__filter-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: $text-color-black;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
  &.active {
    opacity: 0.5;
    pointer-events: all;
  }
}

.menu__filter {
  &-body {
    display: flex;
    flex-direction: column;
    overflow: auto;
    max-height: calc(100dvh - 40rem);
    height: 100%;
    padding-right: 10rem;
    &::-webkit-scrollbar {
      width: 3px;
    }

    &::-webkit-scrollbar-corner {
      background-color: transparent;
    }

    &::-webkit-scrollbar-track {
      background: $bg-color-light-grey;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background: $bg-color-brown;
      border-radius: 10px;
    }

    scrollbar-color: $bg-color-brown $bg-color-light-grey;
  }
  &-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20rem;
  }
  &-menu {
    display: flex;
    flex-direction: column;
  }
}

.menu__filter-title {
  color: $text-color-black;
}

.menu__filter-close {
  fill: #000;
}

.menu__filter-close-icon,
.menu__filter-dropdown-icon {
  fill: #000;
}

.menu__filter-dropdown-icon {
  width: 16rem;
  height: 16rem;
}

.menu__filter-btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10rem;
}

.menu__filter-dropdown-item {
  margin-bottom: 5rem;
}

.menu__filter-dropdown-title {
  color: $text-color-black;
}

.menu__filter-line {
  background-color: rgba(66, 37, 11, 0.3);
  height: 2px;
  margin-block: 4rem 15rem;
}

.menu__filter-price {
  display: flex;
  flex-direction: column;
  gap: 8rem;
}

.menu__filter-price-label {
  font-weight: 600;
  color: $text-color-black;
}

.menu__filter-price-inputs {
  display: flex;
  align-items: center;
  gap: 8rem;
}

.menu__filter-input {
  width: 100%;
  max-width: 100rem;
  padding: 6rem 8rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4rem;
  font-size: 14rem;
}

.menu__filter-price-separator {
  color: rgba(0, 0, 0, 0.5);
  font-size: 14rem;
}

/* Для Chrome, Safari, Edge, Opera */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Для Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

.menu__filter-footer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10rem;
  padding-top: 15rem;
}

.filter-btn {
  flex: 1;
  padding: 10rem 15rem;
  font-size: 14rem;
  border: none;
  border-radius: 8rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.filter-btn--reset {
  background-color: #f3f4f6;
  color: #333;
}

.filter-btn--reset:hover {
  background-color: #e5e7eb;
}

.filter-btn--apply {
  background-color: #2563eb;
  color: #fff;
}

.filter-btn--apply:hover {
  background-color: #1d4ed8;
}

  @media (max-width: 991px) {
    .menu__filter-menu{
      width: 100%;
      left: -100%;
      &--open {
        left: 0;
      }
    }
    .menu__filter-input{
      max-width: 50%;
    }
    .category__filter-btn{
      padding: 10rem 20rem;
      height: 50rem;
      font-size: 18rem;
    }
    .category__wrapper{
      gap: 15rem;
      .product-card{
            width: calc((100% - 15rem) / 2);
      }
    }
  }
</style>
