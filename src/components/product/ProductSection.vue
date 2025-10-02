<script setup lang="ts">
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
</script>

<template>
  <section class="product-section">
    <div class="container">
      <div class="product-section__header">
        <span class="card__title product-section__title">{{ title }}</span>

        <!-- Кнопки навігації -->
        <div class="product-section__nav">
          <button class="swiper-button-prev custom-prev"></button>
          <button class="swiper-button-next custom-next"></button>
        </div>
      </div>

      <div class="product-section__slider">
        <Swiper
          :modules="[Navigation, Autoplay]"
          :slides-per-view="4"
          :space-between="20"
          :loop="true"
          :navigation="{ nextEl: '.custom-next', prevEl: '.custom-prev' }"
          :autoplay="{ delay: 5000 }"
          class="product-section__swiper"
        >
          <SwiperSlide
            v-for="(product, index) in products"
            :key="index"
            class="product-section__slide"
          >
            <ProductCard
              :product="product"
              @add-to-cart="$emit('add-to-cart', product)"
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
  padding: 50px 0 50px 0;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    padding: 0 15px;
  }

  &__swiper {
    padding: 15px;
  }

  &__slide {
    height: auto;
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

        :deep(.swiper-navigation-icon) {
          color: #fff;
        }
      }
    }
  }

  &__title {
    position: relative;
    display: inline-block;

    &::after {
      content: "";
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 0;
      height: 3px;
      background-color: $bg-color-brown;
      transition: width 0.3s ease;
    }
  }

  &:hover {
    .product-section__title::after {
      width: 130px;
    }
  }
}
</style>
