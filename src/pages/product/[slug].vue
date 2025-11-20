<script setup>
//imports
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Thumbs } from "swiper/modules";
import { useBasketStore } from "@/store/basket";

const basket = useBasketStore();

//variables
const route = useRoute();
const slug = route.params.slug;
const quantity = ref(1);

const activeTab = ref("description");
const thumbsSwiper = ref(null);
//API

const { data: product } = await useAsyncData(`product`, () =>
  $fetch(`/shop/variations/${slug}`, {
    ...fetchOptions(),
  })
);

console.log(product.value);
</script>

<template>
  <main class="main">
    <div class="container">
      <div class="product">
        <div class="product__wrapper">
          <div
            v-if="product?.data?.product?.images.length > 0"
            class="product__wrapper-right"
          >
            <Swiper
              :modules="[Navigation, Thumbs]"
              :slides-per-view="1"
              :space-between="20"
              :loop="true"
              :thumbs="{ swiper: thumbsSwiper }"
              class="product__swiper"
            >
              <SwiperSlide
                v-for="(slide, index) in product.data.product.images"
                :key="index"
                class="product__swiper__slide"
              >
                <img
                  :src="slide.url"
                  alt="Slide image"
                  class="product__swiper-image"
                />
              </SwiperSlide>
            </Swiper>
            <Swiper
              @swiper="thumbsSwiper = $event"
              :space-between="10"
              slides-per-view="auto"
              watchSlidesProgress
              class="product__thumbs-swiper"
            >
              <SwiperSlide
                v-for="(slide, index) in product.data.product.images"
                :key="index"
                class="product__thumbs-swiper-slide"
              >
                <img
                  :src="slide.url"
                  alt="Slide image"
                  class="product__thumbs-swiper-image"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div class="product__wrapper-left">
            <div class="product__name">
              {{ product.data.name }}
            </div>
            <div class="product__sku">
              <div class="product__sku-name">Артикул :</div>
              <div class="product__sku-value">{{ product.data.sku }}</div>
            </div>
            <div class="product__price">
              <div class="product__sku-name">Ціна :</div>
              <div class="product__price-wrapper">
                <span class="product-card__price"
                  >{{ product?.data?.prices?.now }} ₴</span
                >
                <span
                  v-if="product?.data?.prices?.old"
                  class="product-card__price-old"
                >
                  {{ product?.data?.prices?.old }} ₴
                </span>
              </div>
            </div>
            <div class="product__action">
              <InputCount
                v-model="quantity"
                :value="1"
                :max="product.data.stock_qty"
              />
              <button
                @click="basket.addToCart(product.data.id, quantity)"
                class="product__buy"
              >
                до кошика
              </button>
            </div>
            <div class="product__line"></div>
            <div class="product__manager">
              Є питання? задайте їх нашому менеджеру
              <NuxtLink to="tel:+380501234567" class="product__manager-link"
                >+380 50 123 45 67</NuxtLink
              >
            </div>
          </div>
        </div>
        <div class="product__info">
          <div class="product__info-btn__wrapper">
            <button
              :class="{ active: activeTab === 'description' }"
              @click="activeTab = 'description'"
              class="product__info-btn"
            >
              Опис
            </button>
            <button
              :class="{ active: activeTab === 'characteristics' }"
              @click="activeTab = 'characteristics'"
              class="product__info-btn"
            >
              Характеристика
            </button>
          </div>
          <div
            v-show="activeTab === 'description'"
            class="typography"
            v-html="product.data.product.body"
          ></div>
          <div
            v-show="activeTab === 'characteristics'"
            class="product__info-block"
          >
            <ul class="product__info-ul">
              <li
                v-for="(item, index) in product.data.specification"
                :key="`product-info-${index}`"
                class="product__info-li"
              >
                <div class="product__info-char">{{ item.attribute.name }}</div>
                <div class="product__info-value">{{ item.property.value }}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style lang="scss">
.product {
  display: flex;
  flex-direction: column;
  gap: 30rem;
  margin-top: 30rem;
  margin-bottom: 50rem;

  &__price {
    display: flex;
    flex-direction: row;
    .product__sku-name {
      margin-right: 40rem;
    }
    &-wrapper {
      display: flex;
      gap: 10rem;
      .product-card__price-old {
        font-size: 14rem;
        font-weight: 500;
        text-decoration: line-through;
      }
      .product-card__price {
        font-size: 18rem;
        font-weight: 500;
        color: $text-color-brown;
      }
    }
  }

  &__thumbs {
    &-swiper {
      &-slide {
        width: 100rem !important;
        height: 100rem !important;
      }
      &-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  &__swiper {
    margin-bottom: 20rem;
    &__slide {
      width: calc(50% - 5rem);
      height: auto;
      min-height: 350rem;
    }
    &-image {
      width: 100%;
      height: auto;
      min-height: 350rem;
      object-fit: cover;
    }
  }

  &__manager {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  &__name {
    font-size: 20rem;
    font-weight: 500;
  }
  &__info {
    display: flex;
    flex-direction: column;
    gap: 20rem;
    &-btn {
      padding: 10rem 20rem;
      &.active {
        border: 1px solid $text-color-black;
        border-bottom: 1px solid $text-color-white;
        position: relative;
        background-color: $text-color-white;
        z-index: 1;
      }

      &__wrapper {
        position: relative;
        &::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 1px;
          background-color: $text-color-black;
          bottom: 0rem;
          left: 0;
          z-index: 0;
        }
      }
    }
    &-ul {
      display: flex;
      flex-direction: column;
      gap: 10rem;
    }
    &-li {
      display: flex;
      flex-direction: row;
      gap: 10rem;
    }
    &-char {
      padding: 10rem;
      color: $bg-color-brown;
      min-width: 300rem;
      max-width: 300rem;
      font-size: 18rem;
    }
    &-value {
      padding: 10rem;
      min-width: 300rem;
      max-width: 300rem;
      font-size: 18rem;
    }
  }
  &__sku {
    display: flex;
    flex-direction: row;
    gap: 5rem;
    align-items: baseline;
    &-name {
      color: $bg-color-brown;
      font-size: 18rem;
      font-weight: 500;
    }
    &-value {
      font-size: 16rem;
      font-weight: 500;
    }
  }
  &__wrapper {
    display: flex;
    flex-direction: row;
    gap: 10rem;
    &-right {
      max-width: calc(60% - 5rem);
    }
    &-left {
      display: flex;
      flex-direction: column;
      gap: 15rem;
    }
  }
  &__action {
    display: flex;
    flex-direction: row;
    gap: 50rem;
  }
  &__buy {
    padding: 10rem 20rem;
    color: $bg-color-brown;
    border: 1px solid $bg-color-brown;
    font-size: 20rem;
    font-weight: 500;
  }
  &__line {
    width: 100%;
    height: 1px;
    background-color: $bg-color-low-black;
  }
}
@media (max-width: 991px) {
  .product {
    &__wrapper {
      flex-direction: column;
      &-right {
        max-width: 100%;
      }
    }
  }
}
</style>