<script setup lang="ts">
import { useRoute } from "#app";
import { ref, computed } from "vue";

// Отримуємо slug категорії з маршруту
const route = useRoute();
const slug = route.params.slug as string;

// Тимчасові тестові категорії
const categories = [
  { slug: "vorota", name: "Ворота" },
  { slug: "rolety", name: "Ролети" },
  { slug: "parkanni-systemy", name: "Парканні системи" },
];

// Знаходимо поточну категорію
const category = computed(
  () =>
    categories.find((c) => c.slug === slug) ?? { name: "Невідома категорія" },
);

// Сортування
const sortOptions = [
  "За замовчуванням",
  "Спочатку дешевші",
  "Спочатку дорожчі",
];
const selectedSort = ref(sortOptions[0]);

const filters = ["Усі товари", "Новинки", "Розпродаж"];
const selectedFilter = ref(filters[0]);

// Анімація на Фільтр
const isOpen = ref(false);

function openMenu() {
  isOpen.value = true;
}

function closeMenu() {
  isOpen.value = false;
}
</script>

<template>
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

        <!-- Оверлей -->
        <transition name="fade">
          <div
            v-if="isOpen"
            class="menu__filter-overlay"
            @click="closeMenu"
          ></div>
        </transition>

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
                  <li class="menu__filter-item">
                    <button class="menu__filter-btn">
                      <span class="menu__filter-dropdown-title">Колір</span>

                      <svg class="icon menu__filter-dropdown-icon">
                        <use xlink:href="/images/sprite.svg#chevron-up" />
                      </svg>
                    </button>

                    <div class="menu__filter-dropdown">
                      <ul class="menu__filter-dropdown-list">
                        <li class="menu__filter-dropdown-item">
                          <label>
                            <input
                              type="checkbox"
                              name="filter[]"
                              value="option1"
                            />
                            Варіант 1
                          </label>
                        </li>
                        <li class="menu__filter-dropdown-item">
                          <label>
                            <input
                              type="checkbox"
                              name="filter[]"
                              value="option2"
                            />
                            Варіант 2
                          </label>
                        </li>
                        <li class="menu__filter-dropdown-item">
                          <label>
                            <input
                              type="checkbox"
                              name="filter[]"
                              value="option3"
                            />
                            Варіант 3
                          </label>
                        </li>
                      </ul>
                    </div>

                    <hr class="menu__filter-line" />
                  </li>

                  <li class="menu__filter-item">
                    <button class="menu__filter-btn">
                      <span class="menu__filter-dropdown-title">Ромір</span>

                      <svg class="icon menu__filter-dropdown-icon">
                        <use xlink:href="/images/sprite.svg#chevron-up" />
                      </svg>
                    </button>

                    <div class="menu__filter-dropdown">
                      <ul class="menu__filter-dropdown-list">
                        <li class="menu__filter-dropdown-item">
                          <label>
                            <input
                              type="checkbox"
                              name="filter[]"
                              value="option1"
                            />
                            Варіант 1
                          </label>
                        </li>
                        <li class="menu__filter-dropdown-item">
                          <label>
                            <input
                              type="checkbox"
                              name="filter[]"
                              value="option2"
                            />
                            Варіант 2
                          </label>
                        </li>
                        <li class="menu__filter-dropdown-item">
                          <label>
                            <input
                              type="checkbox"
                              name="filter[]"
                              value="option3"
                            />
                            Варіант 3
                          </label>
                        </li>
                      </ul>
                    </div>

                    <hr class="menu__filter-line" />
                  </li>
                </ul>

                <ul class="menu__filter-list">
                  <li class="menu__filter-item">
                    <button class="menu__filter-btn">
                      <span class="menu__filter-dropdown-title">Ціна</span>

                      <svg class="icon menu__filter-dropdown-icon">
                        <use xlink:href="/images/sprite.svg#chevron-up" />
                      </svg>
                    </button>

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
                            <span class="menu__filter-price-separator">–</span>
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
                  </li>
                </ul>
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
      <p>Тут буде вивід товарів категорії "{{ category.name }}"</p>
    </div>
  </section>
</template>

<style scoped lang="scss">
.icon {
  fill: #fff;
}

.category-top {
  padding: 30px 0;

  .category-top__header {
    display: flex;
    flex-direction: column;
    row-gap: 50px;
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
    padding: 6px 12px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 0.95rem;
    background-color: #fff;
  }

  label {
    margin-right: 6px;
    color: #555;
    font-weight: 500;
  }
}

.category__catalog {
  padding: 40px 0;
}

.category__filter-btn {
  width: 150px;
  height: 30px;
  border: 2px solid #be9960;
}

.category__filter-span {
  font-weight: 500;
}

.menu__filter-menu {
  background: #fff;
  width: 0;
  height: 100vh;
  position: fixed;
  top: 0;
  left: -250px;
  overflow-y: auto;
  z-index: 10;
  transition: left 0.4s ease;
  padding: 0;
}

.menu__filter-menu--open {
  left: 0;
  width: 250px;
  padding: 2rem;
}

/* Оверлей */
.menu__filter-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  opacity: 0;
  visibility: hidden;
  transition: 0.3s;
  z-index: 10;
}

.menu__filter-overlay.active {
  opacity: 1;
  visibility: visible;
}

.menu__filter-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
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
  width: 16px;
  height: 16px;
}

.menu__filter-btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
}

.menu__filter-dropdown-item {
  margin-bottom: 5px;
}

.menu__filter-dropdown-title {
  color: $text-color-black;
}

.menu__filter-line {
  background-color: rgba(66, 37, 11, 0.3);
  height: 2px;
  margin-block: 4px 15px;
}

.menu__filter-price {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.menu__filter-price-label {
  font-weight: 600;
  color: $text-color-black;
}

.menu__filter-price-inputs {
  display: flex;
  align-items: center;
  gap: 8px;
}

.menu__filter-input {
  width: 100%;
  max-width: 100px;
  padding: 6px 8px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  font-size: 14px;
}

.menu__filter-price-separator {
  color: rgba(0, 0, 0, 0.5);
  font-size: 14px;
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
  gap: 10px;
  margin-top: 15px;
}

.filter-btn {
  flex: 1;
  padding: 10px 15px;
  font-size: 14px;
  border: none;
  border-radius: 8px;
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
</style>
