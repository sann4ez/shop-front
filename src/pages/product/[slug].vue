<script setup>
const productInfo = [
  { name: "Тип товару", value: "Настільна лампа" },
  { name: "Матеріал основи", value: "Кераміка" },
  { name: "Матеріал абажура", value: "Текстиль" },
  { name: "Колір абажура", value: "Молочний льон" },
  { name: "Стиль", value: "Класичний / Сучасний" },
  { name: "Призначення", value: "Для спальні та вітальні" },
  { name: "Тип цоколя", value: "E27" },
  { name: "Кількість лампочок", value: "1" },
  { name: "Максимальна потужність лампи", value: "60 Вт" },
  { name: "Напруга", value: "220 В" },
  { name: "Розміри", value: "Висота 40 см, діаметр абажура 25 см" },
  { name: "Живлення", value: "Від електромережі" },
  { name: "Додаткові особливості", value: "Зручний вимикач на шнурі" },
  { name: "Країна виробник", value: "Україна" },
];

const activeTab = ref("description");
</script>

<template>
  <main class="main">
    <div class="container">
      <div class="product">
        <div class="product__name">
          Настільна керамічна лампа з декоративною основою та текстильним
          абажуром кольору молочного льону для спальні та вітальні
        </div>
        <div class="product__wrapper">
          <div class="product__wrapper-right">

            

          </div>
          <div class="product__wrapper-left">
            <div class="product__sku">
              <div class="product__sku-name">Артикул :</div>
              <div class="product__sku-value">2312311</div>
            </div>
            <div class="product__action">
              <InputCount :value="1" :max="10" />
              <button class="product__buy">до кошика</button>
            </div>
            <div class="product__line"></div>
            <div class="product__manager">
              Є питання? задайте їх нашому менеджеру <NuxtLink to="tel:+380501234567" class="product__manager-link">+380 50 123 45 67</NuxtLink>
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
          <div v-show="activeTab === 'description'" class="typography">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
              vitae facilis sapiente necessitatibus quod ut alias adipisci,
              totam cumque earum delectus odio magnam sit? Commodi excepturi
              asperiores voluptatibus velit! Quibusdam!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
              aspernatur, consequuntur architecto, quo necessitatibus numquam,
              laborum labore nobis culpa animi repudiandae earum commodi tempora
              quia illo incidunt doloribus unde fugit.
            </p>
          </div>
          <div
            v-show="activeTab === 'characteristics'"
            class="product__info-block"
          >
            <ul class="product__info-ul">
              <li
                v-for="(item, index) in productInfo"
                :key="`product-info-${index}`"
                class="product__info-li"
              >
                <div class="product__info-char">{{ item.name }}</div>
                <div class="product__info-value">{{ item.value }}</div>
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
  &__wrapper{
    &-left{
      display: flex;
      flex-direction: column;
      gap: 15rem;
    }
  }
  &__action{
    display: flex;
    flex-direction: row;
    gap: 50rem;
  }
  &__buy{
    padding:10rem 20rem;
    color: $bg-color-brown;
    border: 1px solid $bg-color-brown;
    font-size: 20rem;
    font-weight: 500;
  }
  &__line{
    width: 100%;
    height: 1px;
    background-color: $bg-color-low-black;
  }
}
@media (max-width: 991rem) {
  .product {
  }
}
</style>