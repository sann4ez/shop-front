<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper/modules";

import ProductCard from "../card/ProductCard.vue";

defineProps({
  title: {
    type: String,
    required: true,
  },
  products: {
    type: Array,
    required: true,
  },
});

const uuid = Math.random().toString(36).substring(2, 9);

const nextEl = ref(null);
const prevEl = ref(null);
</script>

<template>
  <section class="product-section">
    <div class="container">
      <div class="product-section__header">
        <span class="card__title product-section__title">{{ title }}</span>

        <!-- Кнопки навігації -->
        <div class="product-section__nav">
          <button ref="prevEl" class="swiper-button-prev custom-prev"></button>
          <button ref="nextEl" class="swiper-button-next custom-next"></button>
        </div>
      </div>

      <div class="product-section__slider">
        <Swiper
          :modules="[Navigation, Autoplay]"
          :slides-per-view="2"
          :space-between="20"
          :loop="true"
          :navigation="{ nextEl: nextEl, prevEl: prevEl }"
          :autoplay="{ delay: 5000 }"
          :breakpoints="{
            640: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }"
          class="product-section__swiper"
        >
          <SwiperSlide
            v-for="(product, index) in products"
            :key="index"
            class="product-section__slide"
          >
            <ProductCard
              :product="product"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.product-section:nth-of-type(even) {
  background-color: $bg-color-white;
}

.product-section:nth-of-type(odd) {
  background-color: $bg-color-light-grey;
}

.product-section {
  padding: 50rem 0 50rem 0;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10rem;
    padding: 0 15rem;
  }

  &__swiper {
    padding: 15rem;
  }

  &__slide {
    height: auto;
  }

  &__nav {
    display: flex;
    gap: 10rem;

    .swiper-button-prev,
    .swiper-button-next {
      position: static;
      width: 50rem;
      height: 50rem;
      border: 1px solid $bg-color-brown;
      border-radius: 5rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18rem;
      transition: all 0.3s ease;

      &:hover {
        background: $bg-color-brown;

        :deep(.swiper-navigation-icon) {
          color: #fff;
        }
      }
    }

    .swiper-button-prev {
      rotate: 180deg;
    }
  }

  &__title {
    position: relative;
    display: inline-block;

    &::after {
      content: "";
      position: absolute;
      bottom: -10rem;
      left: 0;
      width: 0;
      height: 3px;
      background-color: $bg-color-brown;
      transition: width 0.3s ease;
    }
  }

  &:hover {
    .product-section__title::after {
      width: 130rem;
    }
  }
}

  @media (max-width: 991rem) {
    .product-section{
      padding-block: 25rem;
    }
  }
</style>
