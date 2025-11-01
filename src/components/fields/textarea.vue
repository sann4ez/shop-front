<script setup>
const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  name: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div
    class="textarea"
  >
  <div class="textarea__label">
    {{ label }}
  </div>
    <textarea
      :name="name"
      :placeholder="placeholder"
    ></textarea>

  </div>
</template>
<style lang="scss">
  .textarea {
  position: relative;
  width: 100%;
  &__wrapper {
    position: relative;
  }
  textarea {
    font-size: 20rem;
    transition: 0.3s;
    color: $text-color-low_black;
    width: 100%;
    padding: 10rem;
    background-color: transparent;
    border: 2px solid $bg-color-brown;
    height: 150rem;
    transition: 0.3s;
    resize: none;
    &:disabled {
      &::placeholder {
        color:$text-color-low_black;
      }
    }
  }
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  textarea:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s,
      color 5000s ease-in-out 0s;
  }
}
textarea::-webkit-outer-spin-button,
textarea::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

</style>
