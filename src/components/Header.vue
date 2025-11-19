<script setup lang="ts">
const isMenuOpen = ref(false);
const openDropdowns = ref<Record<string, boolean>>({});

function toggleMenu(val: boolean) {
  isMenuOpen.value = val;
  scrollBody(val);
}

function toggleDropdown(id: string) {
  openDropdowns.value[id] = !openDropdowns.value[id];
}
</script>

<template>
  <header class="header">
    <div class="container">
      <NuxtLink to="/" class="logo">
        <img src="../public/favicon.ico" alt="logo" />
      </NuxtLink>

      <nav class="menu" :class="{ open: isMenuOpen }">
        <div class="head">
          <button class="close-menu-btn" @click="toggleMenu(false)"></button>
        </div>
        <ul>
          <li class="dropdown" :class="{ active: openDropdowns['0'] }">
            <NuxtLink to="/catalog" @click="toggleMenu(false)"> каталог </NuxtLink>
            <svg class="icon" @click.stop="toggleDropdown('0')">
              <use xlink:href="/images/sprite.svg#arrow-down" />
            </svg>

            <ul class="sub-menu" :class="{ 'is-open': openDropdowns['0'] }">
              <li>
                <NuxtLink to="/" @click="toggleMenu(false)"><span>Ворота</span></NuxtLink>
              </li>

              <li class="dropdown" :class="{ active: openDropdowns['01'] }">
                <NuxtLink @click="toggleMenu(false)" to="/"><span>Комплектуючі для воріт</span></NuxtLink>
                <svg class="icon" @click.stop="toggleDropdown('01')">
                  <use xlink:href="/images/sprite.svg#arrow-down" />
                </svg>

                <ul
                  class="sub-menu sub-menu-right"
                  :class="{ 'is-open': openDropdowns['01'] }"
                >
                  <li>
                    <NuxtLink to="/"><span>Комплектуючі 1</span></NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/"><span>Комплектуючі 2</span></NuxtLink>
                  </li>
                  <li
                    class="dropdown"
                    :class="{ active: openDropdowns['001'] }"
                  >
                    <NuxtLink to="/"><span>Комплектуючі 3</span></NuxtLink>
                    <svg class="icon" @click.stop="toggleDropdown('001')">
                      <use xlink:href="/images/sprite.svg#arrow-down" />
                    </svg>
                    <ul
                      class="sub-menu sub-menu-right"
                      :class="{ 'is-open': openDropdowns['001'] }"
                    >
                      <li>
                        <NuxtLink to="/"><span>Комплектуючі 11</span></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/"><span>Комплектуючі 12</span></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/"><span>Комплектуючі 13</span></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/"><span>Комплектуючі 14</span></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/"><span>Комплектуючі 15</span></NuxtLink>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <NuxtLink to="/"><span>Комплектуючі 4</span></NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/"><span>Комплектуючі 5</span></NuxtLink>
                  </li>
                </ul>
              </li>

              <li>
                <NuxtLink to="/"><span>Аксесуари</span></NuxtLink>
              </li>
              <li>
                <NuxtLink to="/"><span>Турнікети</span></NuxtLink>
              </li>
            </ul>
          </li>

          <li>
            <NuxtLink to="/about">про нас</NuxtLink>
          </li>

          <li class="dropdown" :class="{ active: openDropdowns['1'] }">
            <NuxtLink to="/">послуги</NuxtLink>
            <svg class="icon" @click.stop="toggleDropdown('1')">
              <use xlink:href="/images/sprite.svg#arrow-down" />
            </svg>
            <ul class="sub-menu" :class="{ 'is-open': openDropdowns['1'] }">
              <li>
                <NuxtLink to="/"><span>portfolio 1</span></NuxtLink>
              </li>
              <li>
                <NuxtLink to="/"><span>portfolio 2</span></NuxtLink>
              </li>
              <li>
                <NuxtLink to="/"><span>portfolio 3</span></NuxtLink>
              </li>
              <li class="dropdown" :class="{ active: openDropdowns['11'] }">
                <NuxtLink to="/"><span>portfolio 4</span></NuxtLink>
                <svg class="icon" @click.stop="toggleDropdown('11')">
                  <use xlink:href="/images/sprite.svg#arrow-down" />
                </svg>
                <ul
                  class="sub-menu sub-menu-left"
                  :class="{ 'is-open': openDropdowns['11'] }"
                >
                  <li>
                    <NuxtLink to="/"><span>portfolio 11</span></NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/"><span>portfolio 12</span></NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/"><span>portfolio 13</span></NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/"><span>portfolio 14</span></NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/"><span>portfolio 15</span></NuxtLink>
                  </li>
                </ul>
              </li>
              <li>
                <NuxtLink to="/"><span>portfolio 5</span></NuxtLink>
              </li>
            </ul>
          </li>
          <li><NuxtLink to="/">новини</NuxtLink></li>
          <li><NuxtLink to="/">контакти</NuxtLink></li>
        </ul>
      </nav>

      <div
        @click="toggleMenu(false)"
        :class="{ active: isMenuOpen }"
        class="mebu__bg"
      ></div>

      <div class="header-right">
        <NuxtLink to="/cart" class="cart-btn icon-btn">
          <svg class="icon icon__cart">
            <use xlink:href="/images/sprite.svg#cart" />
          </svg>
        </NuxtLink>

        <button type="button" class="open-menu-btn" @click="toggleMenu(true)">
          <span class="line line-1"></span>
          <span class="line line-2"></span>
          <span class="line line-3"></span>
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
a {
  transition: color 0.2s ease-in;

  &:hover {
    color: $text-color-brown;
  }
}

.header {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.2);
  z-index: 10;
  .icon__cart {
    width: 30rem;
    height: 30rem;
  }
  .mebu {
    &__bg {
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
  }

  @media (max-width: 991rem) {
    padding: 12rem 0;
  }
}

.header .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header .logo img {
  vertical-align: middle;
  width: 50rem;
  height: 50rem;
}

.header .menu .head {
  display: none;

  @media (max-width: 991rem) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 25rem;
  }
}

.header .menu > ul > li {
  display: inline-block;

  @media (max-width: 991rem) {
    display: block;
  }
}

.header .menu > ul > li:not(:last-child) {
  margin-right: 40rem;

  @media (max-width: 991rem) {
    margin-right: 0;
  }
}

.header .menu .dropdown {
  position: relative;
}

.header .menu a {
  text-transform: uppercase;
  line-height: 1.5;
  display: block;
}

.header .menu > ul > li > a {
  padding: 24rem 0;
}

.header .menu > ul > .dropdown > a {
  padding-right: 15rem;
}

.header .menu svg {
  position: absolute;
  top: calc(50% - 10rem);
}

.header .menu > ul > li > svg {
  right: -5rem;

  @media (max-width: 991rem) {
    right: 0;
  }
}

.header .menu .sub-menu {
  position: absolute;
  top: 100%;
  left: 0;
  width: 300rem;
  padding: 15rem 0;
  background-color: $bg-color-light-grey;
  border-radius: 3rem;
  box-shadow: 0 0 5rem hsla(0, 0%, 0%, 0.5);
  z-index: 1;
  transform-origin: top;
  transform: scaleY(0);
  visibility: hidden;
  opacity: 0;

  @media (max-width: 991rem) {
    position: static;
    opacity: 1;
    transform: none;
    visibility: visible;
    padding: 0;
    transition: none;
    box-shadow: none;
    width: 100%;
    display: none;
  }
}

.header .menu .sub-menu {
  display: block;
}

.header .menu .sub-menu-right {
  left: 100%;
  top: 0;
}

.header .menu .sub-menu-left {
  top: 0;
  left: auto;
  right: 100%;
}

.header .menu li:hover > .sub-menu {
  opacity: 1;
  transform: none;
  visibility: visible;
  transition: all 0.5s ease;
}

.header .menu .sub-menu a {
  padding: 6rem 24rem;
  font-size: 14rem;

  @media (max-width: 991rem) {
    padding: 12rem 0 12rem 15rem;
  }
}

.header .menu .sub-menu .dropdown > a {
  padding-right: 34rem;
}

.header .menu .sub-menu span {
  background-image: linear-gradient(hsl(0, 0%, 0%), hsl(0, 0%, 0%));
  background-size: 0 1px;
  background-repeat: no-repeat;
  background-position: 0 100%;
  transition: background-size 0.5s ease;

  @media (max-width: 991rem) {
    background-image: none;
  }
}

.header .menu .sub-menu > li:hover > a > span {
  background-size: 100% 1px;
}

.header .menu .sub-menu svg {
  transform: rotate(-90deg);
  right: 24rem;

  @media (max-width: 991rem) {
    transform: none;
    right: 0;
  }
}

.header-right {
  display: flex;
}

.header-right > * {
  margin-left: 25rem;
}

.header-right .icon-btn {
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: hsl(0, 0%, 100%);
  font-size: 16rem;
}

.header-right .open-menu-btn {
  display: none;

  @media (max-width: 991rem) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40rem;
    width: 44rem;
    cursor: pointer;
    position: relative;
    background-color: transparent;
    border: none;
  }
}

@media (max-width: 991rem) {
  .container {
    padding: 0 25rem;
  }

  .header .menu {
    position: fixed;
    right: 0;
    top: 0;
    width: 320rem;
    height: 100%;
    background-color: $bg-color-light-grey;
    padding: 15rem 30rem 30rem;
    overflow-y: auto;
    z-index: 1;

    transform: translateX(100%);
    transition: transform 0.5s ease;

    &.open {
      transform: translateX(0);
    }

    .sub-menu {
      display: none !important;
    }

    .sub-menu.is-open {
      display: block !important;
    }

    .dropdown.active > .sub-menu {
      display: block;
    }

    .dropdown:hover > .sub-menu {
      display: block;
    }
  }

  .header .menu .close-menu-btn {
    height: 35rem;
    width: 35rem;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    cursor: pointer;
    border: none;
  }

  .header .menu .close-menu-btn::before,
  .header .menu .close-menu-btn::after {
    content: "";
    position: absolute;
    width: 80%;
    height: 2px;
    background-color: $bg-color-brown;
  }

  .header .menu .close-menu-btn::before {
    transform: rotate(45deg);
  }

  .header .menu .close-menu-btn::after {
    transform: rotate(-45deg);
  }

  .header .menu li {
    border-bottom: 1px solid hsla(0, 0%, 100%, 0.25);
  }

  .header .menu li:first-child {
    border-top: 1px solid hsla(0, 0%, 100%, 0.25);
  }

  .header .menu > ul > li > a {
    padding: 12rem 0;
  }

  .header .menu > ul > .dropdown > a {
    padding-right: 34rem;
  }

  .header .menu svg {
    height: 34rem;
    width: 34rem;
    border: 1px solid hsla(0, 0%, 100%, 0.25);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    pointer-events: auto;
    cursor: pointer;
    top: 7rem;
  }

  .header .menu .dropdown.active > svg {
    background-color: hsla(0, 0%, 100%, 0.25);
    transform: rotate(180deg);
  }

  .header .menu .dropdown.active > .sub-menu {
    display: block;
  }

  .header .menu .sub-menu li:last-child {
    border: none;
  }

  .header .menu .sub-menu a {
    padding-left: 10rem;
  }

  .header .menu .sub-menu .sub-menu a {
    padding-left: 20rem;
  }

  .header .menu .sub-menu .sub-menu .sub-menu a {
    padding-left: 30rem;
  }

  .header-right .open-menu-btn .line {
    height: 2px;
    width: 30rem;
    background-color: $bg-color-brown;
    position: absolute;
  }

  .header-right .open-menu-btn .line-1 {
    transform: translateY(-8rem);
  }

  .header-right .open-menu-btn .line-3 {
    transform: translateY(8rem);
  }
}
</style>
