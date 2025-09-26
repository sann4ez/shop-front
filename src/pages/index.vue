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
  { name: "Товар 1", price: 1200, image: "https://picsum.photos/300/300?1" },
  { name: "Товар 2", price: 1500, image: "https://picsum.photos/300/300?2" },
  { name: "Товар 3", price: 1000, image: "https://picsum.photos/300/300?3" },
  { name: "Товар 4", price: 1800, image: "https://picsum.photos/300/300?4" },
  { name: "Товар 5", price: 2000, image: "https://picsum.photos/300/300?5" },
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
      <span class="new-arrivals__title">Новинки</span>
      <div class="new-arrivals__slider">
        <Swiper
          :modules="[Pagination, Navigation, Autoplay]"
          :slides-per-view="4"
          :space-between="20"
          :loop="true"
          :navigation="true"
          :pagination="{ clickable: true }"
          :autoplay="{ delay: 3000 }"
          class="new-arrivals__swiper"
        >
          <SwiperSlide
            v-for="(product, index) in products"
            :key="index"
            class="new-arrivals__slide"
          >
            <div class="product-card">
              <img
                :src="product.image"
                :alt="product.name"
                class="product-card__img"
              />
              <h3 class="product-card__name">{{ product.name }}</h3>
              <p class="product-card__price">{{ product.price }} ₴</p>
            </div>
          </SwiperSlide>
        </Swiper>
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

// Swiper
.swiper {
  height: 500px;
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

//
</style>
