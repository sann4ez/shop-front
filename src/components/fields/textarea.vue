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
    color: $text-color-low_black;
    width: 100%;
    padding: 10rem;
    background-color: transparent;
    border: 2px solid $bg-color-brown;
    height: 150rem;
    resize: none;
  }

}


</style>
