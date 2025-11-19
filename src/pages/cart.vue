<script setup>
import { useBasketStore } from "@/store/basket";

const basket = useBasketStore();

const quantity = ref(1);

await basket.fetchCart();


const changeQuantity = (item, newValue) => {
  const oldValue = item.quantity;

  if (newValue > oldValue) {
    // Кількість збільшили
    basket.addToCart(item.variation.id, newValue - oldValue);
  } else if (newValue < oldValue) {
    // Кількість зменшили
    basket.removeToCart(item.id, oldValue - newValue);
  }
};

</script>

<template>
  <main class="main">
    <div class="container">
      <div class="cart">
        <h1 class="cart__title">Кошик</h1>
        <div
          v-if="basket.cart?.data?.purchases?.length > 0"
          class="cart__wrapper"
        >
          <div
            v-for="item in basket.cart.data.purchases"
            :key="`cart-product-${item.id}`"
            class="cart__item"
          >
            <div class="cart__item-wrapper">
              <img
                :src="item.variation.images[0].url"
                :alt="item.variation.name"
                class="cart__item-img"
              />

              <div class="cart__item-name">{{ item.variation.name }}</div>

              <div class="product-card__prices cart__item-prices">
                <span class="product-card__price">{{ item.total }} ₴</span>
              </div>
              <InputCount
                :value="item.quantity"
                :max="item.variation.stock_qty"
                @update:modelValue="changeQuantity(item, $event)"
              />
            </div>
            <button @click="basket.removeToCart(item.id, 0);" class="cart__item-btn"></button>
          </div>
        </div>
        <div v-else class="cart__wrapper cart__wrapper-emp">
          <span>Ваш кошик порожній.</span>
          <span>Зробити покупку</span>

          <NuxtLink to="/catalog" class="cart__btn">Каталог</NuxtLink>
        </div>
        <NuxtLink
          v-if="cart?.data?.purchases?.length > 0"
          to="/checkout"
          class="cart__btn"
          >Оформити замовлення</NuxtLink
        >
      </div>
    </div>
  </main>
</template>
<style lang="scss">
.cart {
  display: flex;
  flex-direction: column;
  gap: 20rem;
  margin-bottom: 50rem;
  &__title {
    font-weight: 500;
    font-size: 36rem;
    line-height: 1.16;
    letter-spacing: 0.03em;
    text-align: center;
    color: #000000;
  }
  &__btn {
    border: 1px solid $bg-color-brown;
    padding: 10rem 20rem;
    color: $bg-color-brown;
    width: fit-content;
  }
  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 15rem;
    &-emp {
      align-items: center;
      span {
        font-size: 26rem;
        font-weight: 600;
      }
    }
  }
  &__item {
    display: flex;
    flex-direction: row;
    width: 100%;
    border: 1px solid $bg-color-brown;
    padding: 20rem;
    &-wrapper {
      display: flex;
      flex-direction: row;
      gap: 20rem;
      align-items: center;
      width: 100%;
    }
    &-btn {
      position: relative;
      width: 30rem;
      height: 30rem;
      background: transparent;
      border: none;
      cursor: pointer;
      color: $bg-color-brown;

      &::before,
      &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 60%;
        height: 2px;
        background-color: currentColor;
        transform-origin: center;
        transition: transform 0.3s ease;
      }

      &::before {
        transform: translate(-50%, -50%) rotate(45deg);
      }

      &::after {
        transform: translate(-50%, -50%) rotate(-45deg);
      }

      &:hover::before {
        transform: translate(-50%, -50%) rotate(135deg);
      }

      &:hover::after {
        transform: translate(-50%, -50%) rotate(-135deg);
      }
    }
    &-img {
      width: 200rem;
      height: 200rem;
    }
    &-name {
      font-size: 20rem;
      width: 100%;
      overflow: hidden;
      display: -webkit-box;
      line-clamp: 2;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    &-prices {
      min-width: fit-content;
      display: flex;
      flex-direction: column;
      .product-card__price-old {
        font-size: 14rem;
        text-decoration: line-through;
      }
      .product-card__price {
        font-weight: 600;
        font-size: 16rem;
        color: $text-color-brown;
      }
    }
  }
}
</style>