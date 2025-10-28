<script setup lang="ts">
defineProps({
  product: {
    type: Object,
    required: true,
  },
});
defineEmits(["add-to-cart"]);
</script>

<template>
  <a :href="'/product/' + product.article" class="product-card">
    <img :src="product.image" :alt="product.name" class="product-card__img" />
    <div class="product-content">
      <p class="product-card__article">{{ product.article }}</p>
      <h3 class="product-card__name">{{ product.name }}</h3>

      <div class="product-card__bottom">
        <div class="product-card__prices">
          <span v-if="product.priceOld" class="product-card__price-old">
            {{ product.priceOld }} ₴
          </span>
          <span class="product-card__price">{{ product.price }} ₴</span>
        </div>

        <button
          type="button"
          class="product-card__add-to-cart"
          @click.prevent="$emit('add-to-cart', product)"
        >
          <svg class="icon product-card__icon" width="20" height="20">
            <use xlink:href="/images/sprite.svg#shopping-basket"></use>
          </svg>
        </button>
      </div>
    </div>
  </a>
</template>

<style scoped lang="scss">
.product-card {
  display: block;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid $bg-color-grey;
  transition:
    box-shadow 0.3s ease,
    transform 0.3s ease;

  &__img {
    display: block;
    width: 100%;
    height: auto;
  }

  &__article,
  &__name {
    margin-bottom: 10px;
  }

  &__article {
    font-size: 14px;
    font-weight: 500;
    color: $text-color-grey;
  }

  &__name {
    font-weight: 700;
    height: 60px;
    overflow: hidden;
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
    width: 40px;
    height: 40px;
    border-radius: 5px;
    background-color: $bg-color-light-grey;
  }

  &:hover {
    border: 1px solid $bg-color-brown;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    transform: translateY(-3px);

    .product-card__add-to-cart {
      background-color: $bg-color-brown;
      transition: all 0.3s ease;

      &:hover {
        box-shadow: 0 0 10px 0 #bebebe;
      }
    }

    .product-card__icon {
      fill: $bg-color-white;
    }
  }

  &__price-old {
    font-size: 14px;
  }

  &__price {
    font-weight: 600;
    font-size: 16px;
    color: $text-color-brown;
  }

  &__icon {
    fill: $bg-color-grey;
  }
}

.product-content {
  margin-top: 20px;
}
</style>
