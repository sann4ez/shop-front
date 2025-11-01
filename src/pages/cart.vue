<script setup>
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
  <main class="main">
    <div class="container">
      <div class="cart">
        <h1 class="cart__title">Кошик</h1>
        <div class="cart__wrapper">
          <div
            v-for="(item, index) in products"
            :key="`cart-product-${index}`"
            class="cart__item"
          >
            <div class="cart__item-wrapper">
              <img :src="item.image" :alt="item.name" class="cart__item-img" />

              <div class="cart__item-name">{{ item.name }}</div>

              <div class="product-card__prices cart__item-prices">
                <span v-if="item.priceOld" class="product-card__price-old">
                  {{ item.priceOld }} ₴
                </span>
                <span class="product-card__price">{{ item.price }} ₴</span>
              </div>
              <InputCount :value="1" :max="10" />
            </div>
            <button class="cart__item-btn"></button>
          </div>
        </div>
        <div class="cart__btn">Оформити замовлення</div>
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