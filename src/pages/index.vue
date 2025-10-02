<script setup lang="ts">
import Header from "~/components/Header.vue";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation, EffectFade, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

// Дані з API
const slides = [
  "https://picsum.photos/id/1015/1920/800",
  "https://picsum.photos/id/1016/1920/800",
  "https://picsum.photos/id/1018/1920/800",
  "https://picsum.photos/id/1020/1920/800",
];

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

    <ProductSection
      title="Новинки"
      :products="products"
      @add-to-cart="handleAddToCart"
    />

    <ProductSection
      title="Розпродаж"
      :products="products"
      @add-to-cart="handleAddToCart"
    />

    <ProductSection
      title="Популярні"
      :products="products"
      @add-to-cart="handleAddToCart"
    />
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
</style>
