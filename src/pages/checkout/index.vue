<script setup>
import { useBasketStore } from "@/store/basket";

const basket = useBasketStore();

const form = ref({
  user: {
    name: "",
    lastname: "",
    phone: "",
    email: "",
  },
  shipping: {
    method: "address",
    address: {
      city: "",
      street: "",
    },
  },
  payment: {
    gateway: "cash",
  },
});

const resetForm = () => {
  form.value = {
    user: {
      name: "",
      lastname: "",
      phone: "",
      email: "",
    },
    shipping: {
      method: "address",
      address: {
        city: "",
        street: "",
      },
    },
    payment: {
      gateway: "cash",
    },
  };
};

const onSubmit = async (val, action) => {
  try {
    const data = await $fetch("/cart/checkout", {
      ...fetchOptions(),
      method: "POST",
      body: form.value,
    });
    if (form.value.payment.gateway == "cash") {
      navigateTo({ path: "/checkout/progress" }, { redirectCode: 301 });
    } else {
      navigateTo(data.destination, {
        external: true,
        redirectCode: 301,
      });
    }
    resetForm();
  } catch (error) {
    console.error(error);
    action.setErrors(error.data.errors);
  }
};

onMounted(() => {
  basket.fetchCart();
});
</script>

<template>
  <main class="main">
    <div class="container">
      <div class="checkout">
        <h1 class="checkout__title">Оформлення замовлення</h1>
        <vee-form @submit="onSubmit" class="checkout__form">
          <div class="checkout__form-top">
            <div class="checkout__form-block">
              <div class="checkout__form-block__title">
                Контактна інформація
              </div>
              <FieldsInput
                v-model="form.user.name"
                placeholder="Імя"
                name="user.name"
              />
              <FieldsInput
                v-model="form.user.lastname"
                placeholder="Прізвище"
                name="user.lastname"
              />
              <FieldsInput
                v-model="form.user.phone"
                placeholder="+380"
                mask="+380 ## ### ## ##"
                name="user.phone"
              />
              <FieldsInput
                v-model="form.user.email"
                placeholder="Email"
                name="user.email"
              />
              <FieldsInput
                v-model="form.shipping.address.city"
                placeholder="Місто"
                name="shipping.address.city"
              />
              <FieldsInput
                v-model="form.shipping.address.street"
                placeholder="Вулиця"
                name="shipping.address.street"
              />
              <FieldsTextarea
                v-model="form.client_comment"
                name="client_comment"
                placeholder="Коментар"
              />
            </div>
            <div class="checkout__form-block">
              <div class="checkout__form-block__title">Варіанти доставки</div>
              <FieldsRadio
                v-model="form.shipping.method"
                name="shipping.method"
                value="address"
                label="Адресна доставка"
              />
              <div class="checkout__form-block__title">Спосіб оплати</div>
              <FieldsRadio
                v-model="form.payment.gateway"
                name="payment.gateway"
                value="cash"
                label="Після отримання"
              />
              <FieldsRadio
                v-model="form.payment.gateway"
                name="payment.gateway"
                value="monobank"
                label="Монобанк"
              />
              <FieldsRadio
                v-model="form.payment.gateway"
                name="payment.gateway"
                value="wayforpay"
                label="WayForPay"
              />
              <div class="checkout__form-block-info">
                Після оформення замовлення наш менеджер звяжиться з вами для
                підтвердження та уточнення замовлення
              </div>
            </div>
          </div>
          <div class="checkout__form-line"></div>
          <div class="checkout__form-total">
            загальна сума <span>{{ basket?.cart?.total?.total || 0 }} ₴</span>
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

@media (max-width: 991px) {
  .checkout {
    &__form {
      &-top {
        flex-direction: column;
      }
      &-block {
        width: 100%;
      }
    }
  }
}
</style>