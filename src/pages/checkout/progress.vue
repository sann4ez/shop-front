<script setup>


</script>

<template>
  <main class="main">
    <div class="container">
      <div class="checkout-progress">
        <h1 class="checkout-progress__title">Замовлення успішно оформлено</h1>
        <NuxtLink to="/" class="checkout-progress__link">На головну</NuxtLink>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
.checkout-progress {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 30rem;
  margin-bottom: 50rem;
  gap: 30rem;
  &__title{
    font-size: 20rem;
    font-weight: 500;
  }
  &__link{
        border: 1px solid $bg-color-brown;
    padding: 10rem 20rem;
    color: $bg-color-brown;
    width: fit-content;
  }

}

@media (max-width: 991px) {
  .checkout {

  }
}
</style>