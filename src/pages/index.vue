<script setup lang="ts">
import Header from "~/components/Header.vue";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation, EffectFade, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const onSwiper = (swiper: any) => {
  console.log(swiper);
};

const onSlideChange = () => {
  console.log("slide change");
};

const slides = [
  "https://picsum.photos/id/1015/1920/800",
  "https://picsum.photos/id/1016/1920/800",
  "https://picsum.photos/id/1018/1920/800",
  "https://picsum.photos/id/1020/1920/800",
];

const products = [
  {
    name: "Товар 1",
    price: 1200,
    priceOld: 1400,
    article: "ART-0001",
    image: "https://picsum.photos/300/300?1",
  },
  {
    name: "Товар 2",
    price: 1500,
    priceOld: 1600,
    article: "ART-0002",
    image: "https://picsum.photos/300/300?2",
  },
  {
    name: "Товар 3",
    price: 1000,
    priceOld: 1300,
    article: "ART-0003",
    image: "https://picsum.photos/300/300?3",
  },
  {
    name: "Товар 4",
    price: 1800,
    priceOld: 1950,
    article: "ART-0004",
    image: "https://picsum.photos/300/300?4",
  },
  {
    name: "Товар 5",
    price: 2000,
    priceOld: 0,
    article: "ART-0005",
    image: "https://picsum.photos/300/300?5",
  },
];
</script>

<template>
  <Header />

  <main class="main">
    <section class="hero">
      <div class="hero__slider">
        <Swiper
          :modules="[Pagination, EffectFade, Autoplay]"
          :effect="'fade'"
          :slides-per-view="1"
          :loop="true"
          :autoplay="{ delay: 3000 }"
          :pagination="{ clickable: true }"
        >
          <SwiperSlide
            v-for="(slide, index) in slides"
            :key="index"
            class="hero__slide"
          >
            <img :src="slide" alt="Slide image" class="hero__image" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>

    <section class="new-arrivals">
      <div class="container">
        <div class="new-arrivals__header">
          <span class="card__title new-arrivals__title">Новинки</span>

          <!-- Кнопки навігації -->
          <div class="new-arrivals__nav">
            <button class="swiper-button-prev custom-prev"></button>
            <button class="swiper-button-next custom-next"></button>
          </div>
        </div>

        <div class="new-arrivals__slider">
          <Swiper
            :modules="[Navigation, Autoplay]"
            :slides-per-view="4"
            :space-between="20"
            :loop="true"
            :navigation="{ nextEl: '.custom-next', prevEl: '.custom-prev' }"
            :autoplay="{ delay: 300000 }"
            class="new-arrivals__swiper"
          >
            <SwiperSlide
              v-for="(product, index) in products"
              :key="index"
              class="new-arrivals__slide"
            >
              <a :href="'/product/' + product.article" class="product-card">
                <img
                  :src="product.image"
                  :alt="product.name"
                  class="product-card__img"
                />
                <div class="product-content">
                  <p class="product-card__article">{{ product.article }}</p>
                  <h3 class="product-card__name">{{ product.name }}</h3>

                  <div class="product-card__bottom">
                    <div class="product-card__prices">
                      <span
                        v-if="product.priceOld"
                        class="product-card__price-old"
                      >
                        {{ product.priceOld }} ₴
                      </span>
                      <span class="product-card__price"
                        >{{ product.price }} ₴</span
                      >
                    </div>

                    <button
                      type="button"
                      class="product-card__add-to-cart"
                      @click.prevent="$emit('add-to-cart', product)"
                    >
                      Додати в кошик
                    </button>
                  </div>
                </div>
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>

    <slot />
  </main>

  <footer class="footer">
    <div class="container">
      <p>© 2024 Всі права захищені</p>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.main {
  padding-top: 72px;
}

.swiper-slide .hero__image {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

:deep(.swiper-pagination-bullet) {
  background: white !important;
  opacity: 0.7;
}

:deep(.swiper-pagination-bullet-active) {
  background: $bg-color-brown !important;
  opacity: 1;
}

:deep(.hero__slider .swiper) {
  height: 500px;
}

:deep(.swiper-navigation-icon) {
  color: $bg-color-brown;
}

.swiper-button-prev {
  rotate: 180deg;
}

// Новинки
.new-arrivals {
  padding: 70px 0 70px 0;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    padding: 0 20px;
  }

  &__nav {
    display: flex;
    gap: 10px;

    .swiper-button-prev,
    .swiper-button-next {
      position: static;
      width: 50px;
      height: 50px;
      border: 1px solid $bg-color-brown;
      border-radius: 5px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      transition: all 0.3s ease;

      &:hover {
        background: $bg-color-brown;

        :deep(.swiper-navigation-icon),
        :deep(.swiper-navigation-icon) {
          color: #fff;
        }
      }
    }
  }
}

.product-card__img {
  width: 100%;
}

.product-content {
  margin-top: 5px;
}

.product-card__article,
.product-card__name {
  margin-bottom: 10px;
}

.product-card__article {
  font-weight: 500;
  color: $text-color-grey;
}

.product-card__name {
  font-weight: 700;
}

.new-arrivals__slider {
  padding-top: 20px;
}

.new-arrivals__slide {
  padding: 0 20px;
  border: 1px solid $bg-color-brown;
  -webkit-box-shadow: 0px 0px 10px 1px #000000;
  box-shadow: 0 0 10px 1px #000000;
}

.product-card__bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
