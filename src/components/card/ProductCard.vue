<script setup>


import { useBasketStore } from "@/store/basket";

const basket = useBasketStore();

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

</script>

<template>
  <div class="product-card">
    <NuxtLink v-if="product?.images?.length > 0" :to="`/product/${product.slug}`" class="product-card__img-wrapper">

      <img :src="product.images[0].url" :alt="product.name" class="product-card__img" />
    </NuxtLink>
    <div class="product-content">
      <p class="product-card__article">{{ product.article }}</p>
      <NuxtLink :to="`/product/${product.slug}`" class="product-card__name">{{ product.name }}</NuxtLink>

      <div class="product-card__bottom">
        <div class="product-card__prices">
          <span v-if="product?.prices?.old" class="product-card__price-old">
            {{ product.prices.old }} ₴
          </span>
          <span class="product-card__price">{{ product.prices.now }} ₴</span>
        </div>

        <button
          type="button"
          class="product-card__add-to-cart"
          @click="basket.addToCart(product.id, 1)"
        >
          <svg class="icon product-card__icon" width="20" height="20">
            <use xlink:href="/images/sprite.svg#shopping-basket"></use>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.product-card {
  display: block;
  padding: 20rem;
  background: #fff;
  border-radius: 8rem;
  overflow: hidden;
  border: 1px solid $bg-color-grey;
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &__img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
    &-wrapper{
      display: flex;
      height: 300rem;
    }
  }

  &__article,
  &__name {
    margin-bottom: 10rem;
  }

  &__article {
    font-size: 14rem;
    font-weight: 500;
    color: $text-color-grey;
  }

  &__name {
    font-weight: 700;
    height: 60rem;
    overflow: hidden;
    display: -webkit-box;
    line-clamp: 3;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  &__bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__prices {
    display: flex;
    flex-direction: column;
  }

  &__price-old {
    text-decoration: line-through;
  }

  &__add-to-cart {
    width: 40rem;
    height: 40rem;
    border-radius: 5rem;
    background-color: $bg-color-light-grey;
  }

  &:hover {
    border: 1px solid $bg-color-brown;
    box-shadow: 0 4rem 20rem rgba(0, 0, 0, 0.15);
    transform: translateY(-3px);

    .product-card__add-to-cart {
      background-color: $bg-color-brown;
      transition: all 0.3s ease;

      &:hover {
        box-shadow: 0 0 10rem 0 #bebebe;
      }
    }

    .product-card__icon {
      fill: $bg-color-white;
    }
  }

  &__price-old {
    font-size: 14rem;
  }

  &__price {
    font-weight: 600;
    font-size: 16rem;
    color: $text-color-brown;
  }

  &__icon {
    fill: $bg-color-grey;
  }
}

.product-content {
  margin-top: 20rem;
}
</style>
