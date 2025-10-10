<script setup lang="ts">
import { ref } from "vue";

const isMenuOpen = ref(false);
const openDropdowns = ref<Record<string, boolean>>({});

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function toggleDropdown(id: string) {
  openDropdowns.value[id] = !openDropdowns.value[id];
}
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <img src="../public/favicon.ico" alt="logo" />
      </div>

      <nav class="menu" :class="{ open: isMenuOpen }">
        <div class="head">
          <button class="close-menu-btn" @click="toggleMenu"></button>
        </div>

        <ul>
          <li class="dropdown" :class="{ active: openDropdowns['0'] }">
            <a href="#">каталог</a>
            <svg class="icon" @click.stop="toggleDropdown('0')">
              <use xlink:href="/images/sprite.svg#arrow-down" />
            </svg>

            <ul class="sub-menu" :class="{ 'is-open': openDropdowns['0'] }">
              <li>
                <a href="#"><span>Ворота</span></a>
              </li>

              <li class="dropdown" :class="{ active: openDropdowns['01'] }">
                <a href="#"><span>Комплектуючі для воріт</span></a>
                <svg class="icon" @click.stop="toggleDropdown('01')">
                  <use xlink:href="/images/sprite.svg#arrow-down" />
                </svg>

                <ul
                  class="sub-menu sub-menu-right"
                  :class="{ 'is-open': openDropdowns['01'] }"
                >
                  <li>
                    <a href="#"><span>Комплектуючі 1</span></a>
                  </li>
                  <li>
                    <a href="#"><span>Комплектуючі 2</span></a>
                  </li>
                  <li
                    class="dropdown"
                    :class="{ active: openDropdowns['001'] }"
                  >
                    <a href="#"><span>Комплектуючі 3</span></a>
                    <svg class="icon" @click.stop="toggleDropdown('001')">
                      <use xlink:href="/images/sprite.svg#arrow-down" />
                    </svg>
                    <ul
                      class="sub-menu sub-menu-right"
                      :class="{ 'is-open': openDropdowns['001'] }"
                    >
                      <li>
                        <a href="#"><span>Комплектуючі 11</span></a>
                      </li>
                      <li>
                        <a href="#"><span>Комплектуючі 12</span></a>
                      </li>
                      <li>
                        <a href="#"><span>Комплектуючі 13</span></a>
                      </li>
                      <li>
                        <a href="#"><span>Комплектуючі 14</span></a>
                      </li>
                      <li>
                        <a href="#"><span>Комплектуючі 15</span></a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#"><span>Комплектуючі 4</span></a>
                  </li>
                  <li>
                    <a href="#"><span>Комплектуючі 5</span></a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#"><span>Аксесуари</span></a>
              </li>
              <li>
                <a href="#"><span>Турнікети</span></a>
              </li>
            </ul>
          </li>

          <li>
            <NuxtLink to="/about">про нас</NuxtLink>
          </li>

          <li class="dropdown" :class="{ active: openDropdowns['1'] }">
            <a href="#">послуги</a>
            <svg class="icon" @click.stop="toggleDropdown('1')">
              <use xlink:href="/images/sprite.svg#arrow-down" />
            </svg>
            <ul class="sub-menu" :class="{ 'is-open': openDropdowns['1'] }">
              <li>
                <a href="#"><span>portfolio 1</span></a>
              </li>
              <li>
                <a href="#"><span>portfolio 2</span></a>
              </li>
              <li>
                <a href="#"><span>portfolio 3</span></a>
              </li>
              <li class="dropdown" :class="{ active: openDropdowns['11'] }">
                <a href="#"><span>portfolio 4</span></a>
                <svg class="icon" @click.stop="toggleDropdown('11')">
                  <use xlink:href="/images/sprite.svg#arrow-down" />
                </svg>
                <ul
                  class="sub-menu sub-menu-left"
                  :class="{ 'is-open': openDropdowns['11'] }"
                >
                  <li>
                    <a href="#"><span>portfolio 11</span></a>
                  </li>
                  <li>
                    <a href="#"><span>portfolio 12</span></a>
                  </li>
                  <li>
                    <a href="#"><span>portfolio 13</span></a>
                  </li>
                  <li>
                    <a href="#"><span>portfolio 14</span></a>
                  </li>
                  <li>
                    <a href="#"><span>portfolio 15</span></a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#"><span>portfolio 5</span></a>
              </li>
            </ul>
          </li>
          <li><a href="#">новини</a></li>
          <li><a href="#">контакти</a></li>
        </ul>
      </nav>

      <div class="header-right">
        <button type="button" class="search-btn icon-btn">S</button>

        <button type="button" class="cart-btn icon-btn">
          <svg class="icon">
            <use xlink:href="/images/sprite.svg#cart" />
          </svg>
        </button>

        <button type="button" class="open-menu-btn" @click="toggleMenu">
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

  @media (max-width: 991px) {
    padding: 12px 0;
  }
}

.header .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header .logo img {
  vertical-align: middle;
}

.header .menu .head {
  display: none;

  @media (max-width: 991px) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 25px;
  }
}

.header .menu > ul > li {
  display: inline-block;

  @media (max-width: 991px) {
    display: block;
  }
}

.header .menu > ul > li:not(:last-child) {
  margin-right: 40px;

  @media (max-width: 991px) {
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
  padding: 24px 0;
}

.header .menu > ul > .dropdown > a {
  padding-right: 15px;
}

.header .menu svg {
  position: absolute;
  top: calc(50% - 10px);
}

.header .menu > ul > li > svg {
  right: -5px;

  @media (max-width: 991px) {
    right: 0;
  }
}

.header .menu .sub-menu {
  position: absolute;
  top: 100%;
  left: 0;
  width: 300px;
  padding: 15px 0;
  background-color: $bg-color-light-grey;
  border-radius: 3px;
  box-shadow: 0 0 5px hsla(0, 0%, 0%, 0.5);
  z-index: 1;
  transform-origin: top;
  transform: scaleY(0);
  visibility: hidden;
  opacity: 0;

  @media (max-width: 991px) {
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
  padding: 6px 24px;
  font-size: 14px;

  @media (max-width: 991px) {
    padding: 12px 0 12px 15px;
  }
}

.header .menu .sub-menu .dropdown > a {
  padding-right: 34px;
}

.header .menu .sub-menu span {
  background-image: linear-gradient(hsl(0, 0%, 0%), hsl(0, 0%, 0%));
  background-size: 0 1px;
  background-repeat: no-repeat;
  background-position: 0 100%;
  transition: background-size 0.5s ease;

  @media (max-width: 991px) {
    background-image: none;
  }
}

.header .menu .sub-menu > li:hover > a > span {
  background-size: 100% 1px;
}

.header .menu .sub-menu svg {
  transform: rotate(-90deg);
  right: 24px;

  @media (max-width: 991px) {
    transform: none;
    right: 0;
  }
}

.header-right {
  display: flex;
}

.header-right > * {
  margin-left: 25px;
}

.header-right .icon-btn {
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: hsl(0, 0%, 100%);
  font-size: 16px;
}

.header-right .open-menu-btn {
  display: none;

  @media (max-width: 991px) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 44px;
    cursor: pointer;
    position: relative;
    background-color: transparent;
    border: none;
  }
}

@media (max-width: 991px) {
  .container {
    padding: 0 25px;
  }

  .header .menu {
    position: fixed;
    right: 0;
    top: 0;
    width: 320px;
    height: 100%;
    background-color: $bg-color-light-grey;
    padding: 15px 30px 30px;
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
    height: 35px;
    width: 35px;
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
    padding: 12px 0;
  }

  .header .menu > ul > .dropdown > a {
    padding-right: 34px;
  }

  .header .menu svg {
    height: 34px;
    width: 34px;
    border: 1px solid hsla(0, 0%, 100%, 0.25);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    pointer-events: auto;
    cursor: pointer;
    top: 7px;
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
    padding-left: 10px;
  }

  .header .menu .sub-menu .sub-menu a {
    padding-left: 20px;
  }

  .header .menu .sub-menu .sub-menu .sub-menu a {
    padding-left: 30px;
  }

  .header-right .open-menu-btn .line {
    height: 2px;
    width: 30px;
    background-color: $bg-color-brown;
    position: absolute;
  }

  .header-right .open-menu-btn .line-1 {
    transform: translateY(-8px);
  }

  .header-right .open-menu-btn .line-3 {
    transform: translateY(8px);
  }
}
</style>
