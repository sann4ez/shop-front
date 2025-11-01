<script setup>
const form = ref({
  firstName: "",
  phone: "",
  email: "",
  city: "",
  street: "",
  comment: "",
  delivery: "Нова пошта",
  payment: "Монобанк",
});
</script>

<template>
  <main class="main">
    <div class="container">
      <div class="checkout">
        <h1 class="checkout__title">Оформлення замовлення</h1>
        <vee-form class="checkout__form">
          <div class="checkout__form-top">
            <div class="checkout__form-block">
              <div class="checkout__form-block__title">
                Контактна інформація
              </div>
              <FieldsInput v-model="form.firstName" placeholder="імя" />
              <FieldsInput
                v-model="form.phone"
                placeholder="+380"
                mask="+380 ## ### ## ##"
              />
              <FieldsInput v-model="form.email" placeholder="email" />
              <FieldsInput v-model="form.city" placeholder="місто" />
              <FieldsInput v-model="form.street" placeholder="вулиця" />
              <FieldsTextarea v-model="form.comment" placeholder="коментар" />
            </div>
            <div class="checkout__form-block">
              <div class="checkout__form-block__title">Варіанти доставки</div>
              <FieldsRadio
                v-model="form.delivery"
                name="delivery"
                value="Нова пошта"
                label="Нова пошта"
              />
              <FieldsRadio
                v-model="form.delivery"
                name="delivery"
                value="Самовиніс"
                label="Самовиніс"
              />
              <FieldsRadio
                v-model="form.delivery"
                name="delivery"
                value="УКР пошта"
                label="УКР пошта"
              />
              <div class="checkout__form-block-info">
                Вартість залежить від способу доставки та може змінюватись
              </div>
              <div class="checkout__form-block__title">Спосіб оплати</div>
              <FieldsRadio
                v-model="form.payment"
                name="payment"
                value="Монобанк"
                label="Монобанк"
              />
              <FieldsRadio
                v-model="form.payment"
                name="payment"
                value="Приват"
                label="Приват"
              />
              <FieldsRadio
                v-model="form.payment"
                name="payment"
                value="Після отримання"
                label="Після отримання"
              />
              <div class="checkout__form-block-info">
                Після оформення замовлення наш менеджер звяжиться з вами для
                підтвердження та уточнення замовлення
              </div>
            </div>
          </div>
          <div class="checkout__form-line"></div>
          <div class="checkout__form-total">
            загальна сума <span>10 000 ₴</span>
          </div>
          <button class="checkout__form-btn">Оформити замовлення</button>
        </vee-form>
      </div>
    </div>
  </main>
</template>
<style lang="scss">
.checkout {
  display: flex;
  flex-direction: column;
  margin-top: 30rem;
  margin-bottom: 50rem;

  &__title {
    font-weight: 500;
    font-size: 36rem;
    line-height: 1.16;
    letter-spacing: 0.03em;
    color: $text-color-black;
    margin-bottom: 50rem;
  }
  &__form {
    display: flex;
    flex-direction: column;
    gap: 30rem;
    &-total {
      font-size: 18rem;
      font-weight: 500;
      color: $bg-color-brown;
      span {
        font-weight: 700;
      }
    }
    &-line {
      width: 100%;
      height: 1px;
      background-color: $bg-color-low-black;
      color: $bg-color-brown;
    }
    &-btn {
      width: fit-content;
      color: $bg-color-brown;
      border: 1px solid $bg-color-brown;
      padding: 10rem 20rem;
      margin-inline: auto;
    }
    &-top {
      display: flex;
      gap: 20rem;
    }
    &-block {
      display: flex;
      flex-direction: column;
      gap: 10rem;
      width: calc(50% - 10rem);
      &__title {
        font-size: 24rem;
        font-weight: 500;
        color: $bg-color-brown;
        margin-bottom: 10rem;
      }
      &-info {
        font-size: 18rem;
        font-weight: 400;
      }
    }
  }
}

@media (max-width: 991rem) {
  .checkout{
    &__form{
      &-top{
        flex-direction: column;
      }
      &-block{
        width: 100%;
      }
    }
  }
}
</style>