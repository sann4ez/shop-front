<script setup>
const emit = defineEmits(["update:modelValue"]);
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: "",
  },
  id: {
    type: String,
    default: "id",
  },
  checked: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
function changeValue(e) {
  emit("update:modelValue", e.target.checked);
}
</script>

<template>
  <label class="checkbox">
    <input
      type="checkbox"
      :id="id"
      :checked="checked"
      :disabled="disabled"
      @input="changeValue($event)"
    />
    <span class="checkbox__check">
    </span>
    {{ label }}
  </label>
</template>
<style lang="scss">
.checkbox {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10rem;

  input {
    display: none;
    cursor: pointer;
  }

  &__check {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24rem;
    height: 24rem;
    border: 1px solid $bg-color-low-black;
    border-radius: 6rem;
    background-color: transparent;
    transition: border-color 0.1s ease-in-out;

    // галочка псевдоэлементом
    &::after {
      content: "";
      position: absolute;
      width: 8rem;
      height: 16rem;
      border-right: 2px solid transparent;
      border-bottom: 2px solid transparent;
      transform: rotate(45deg) translateY(-2rem);
      opacity: 0;
      transition: border-color 0.15s ease-in-out, opacity 0.15s ease-in-out;
    }
  }

  input:checked + .checkbox__check {

    &::after {
      border-color: $bg-color-low-black;
      opacity: 1;
    }
  }

  &__label {
    padding-bottom: 2rem;
    font-weight: 500;
  }
}
</style>
