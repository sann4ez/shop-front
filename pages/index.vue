<script setup lang="ts">
import { ref } from "vue";

const isOpen = ref(false);

// Відкриття/закриття при ховері або кліку
const openMenu = () => (isOpen.value = true);
const closeMenu = () => (isOpen.value = false);
</script>

<template>
  <header class="header">
    <!--Верхній header-->
    <div class="header-top">
      <div class="container">
        <ul class="header-top__menu">
          <!-- Лого -->
          <li class="header-top__item header-top__item--logo">
            <NuxtImg src="/images/logo.png" alt="Логотип" />
          </li>

          <!-- Адреса -->
          <li class="header-top__item">
            <ul class="header-top__info">
              <li class="header-top__info-item">
                <address class="header-top__address">
                  <a
                    class="header-top__link"
                    href="https://www.google.com/maps/search/?api=1&query=м.+Луцьк,+вул.+Волі,+34"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span class="header-top__text header-top__address text"
                      >м. Луцьк, вул. Волі, 34, офіс 54</span
                    >
                  </a>
                </address>
              </li>
              <li class="header-top__info-item">
                <span class="header-top__text header-top__schedule text"
                  >Пн-Пт: 10:00 - 18:00 Сб-Нд: 10:00 - 16:00</span
                >
              </li>
            </ul>
          </li>

          <!-- Номери телефону -->
          <li class="header-top__item">
            <ul class="header-top__contacts">
              <li class="header-top__contacts-item">
                <address class="header-top__address">
                  <a href="tel:+380671234567" class="header-top__link">
                    <span class="text">+380 67 123 45 67</span>
                  </a>
                </address>
              </li>
              <li class="header-top__contacts-item">
                <address class="header-top__address">
                  <a href="tel:+380671234566" class="header-top__link">
                    <span class="text">+380 67 123 45 66</span>
                  </a>
                </address>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>

    <!-- Нижній header -->
    <div class="header-bottom">
      <div class="container">
        <!-- Контейнер для навігації -->
        <nav class="nav">
          <ul class="nav__list">
            <!-- Каталог -->
            <li
              class="nav__item nav__item--catalog"
              @mouseenter="openMenu"
              @mouseleave="closeMenu"
            >
              <NuxtLink to="/catalog" class="nav__link">Каталог</NuxtLink>

              <!-- Випадаюче меню -->
              <div v-if="isOpen" class="nav__dropdown">
                <NuxtLink to="/catalog/electronics" class="nav__dropdown-item"
                  >Електроніка</NuxtLink
                >
                <NuxtLink to="/catalog/clothing" class="nav__dropdown-item"
                  >Одяг</NuxtLink
                >
                <NuxtLink to="/catalog/books" class="nav__dropdown-item"
                  >Книги</NuxtLink
                >
                <NuxtLink to="/catalog/toys" class="nav__dropdown-item"
                  >Іграшки</NuxtLink
                >
              </div>
            </li>

            <!-- Головне меню -->
            <li class="nav__item">
              <NuxtLink to="/" class="nav__link">Головна</NuxtLink>
            </li>
            <li class="nav__item">
              <NuxtLink to="/about" class="nav__link">Про нас</NuxtLink>
            </li>
            <li class="nav__item">
              <NuxtLink to="/contacts" class="nav__link">Контакти</NuxtLink>
            </li>
          </ul>
        </nav>

        <!-- Корзина окремо -->
        <div class="cart">
          <NuxtLink to="/cart" class="cart__link">
            <svg class="cart__icon">
              <use xlink:href="#"></use>
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>

  <main class="main">
    <slot />
  </main>

  <footer class="footer">
    <div class="container">
      <p>© 2024 Всі права захищені</p>
    </div>
  </footer>
</template>

<style scoped lang="scss">
/* Footer */
.footer {
  background: #222;
  color: white;
  text-align: center;
  padding: 20px 0;
  font-size: 14px;
}

.catalog-dropdown {
  position: relative;
  display: inline-block;

  &__button {
    display: block;
    padding: 10px 20px;
    background: #ff5722;
    color: white;
    text-decoration: none;
    font-weight: bold;
    border-radius: 5px;
    transition: background 0.3s;

    &:hover {
      background: #e64a19;
    }
  }

  &__menu {
    position: absolute;
    top: 100%;
    left: 0;
    background: white;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    min-width: 180px;
    display: flex;
    flex-direction: column;
    z-index: 1000;
    padding: 10px;

    /* Анімація появи */
    opacity: 0;
    transform: translateY(-10px);
    visibility: hidden;
    transition:
      opacity 0.3s ease,
      transform 0.3s ease,
      visibility 0.3s ease;
  }

  &__item {
    padding: 10px;
    color: #333;
    text-decoration: none;
    transition: background 0.3s;

    &:hover {
      background: #f5f5f5;
    }
  }

  /* Відображення меню при isOpen */
  .catalog-dropdown:hover &__menu {
    opacity: 1;
    transform: translateY(0);
    visibility: visible;
  }
}
</style>
