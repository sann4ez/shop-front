<script setup>
// emits
const emit = defineEmits(["toggle", "open"]);

//props
const props = defineProps({
  preOpen: {
    type: Boolean,
    default: false,
  },
  customClass: {
    type: String,
    default: "",
  },
});

//variables
const isOpen = props.preOpen ? ref(true) : ref(false);

function toggleCollapse() {
  isOpen.value = !isOpen.value;
  if (isOpen.value) {
    emit("open");
  }
  emit("toggle");
}

defineExpose({ isOpen, toggleCollapse });
</script>

<template>
  <div class="collaps" :class="[customClass, { open: isOpen }]">
    <div class="collaps__label" @click="toggleCollapse()">
      <slot name="label" />
    </div>
    <div class="collaps__content" :class="{ active: isOpen }">
      <div class="collaps__content-wrapper">
        <slot name="body" />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.collaps {
  &__label {
    cursor: pointer;
    padding: 10rem;
  }

  &__content {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 500ms;
    &.active {
      grid-template-rows: 1fr;
    }
    &-wrapper {
      overflow: hidden;
    }
  }
}
</style>