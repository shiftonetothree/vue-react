<style lang="scss" scoped>
.remove-button{
  color: orangered;
}
</style>
<script>
import StyleButton from './style-button.vue'
export default {
  components: { StyleButton },
  props: {
    todo: {
      type: Object,
      required: true
    }
  }
}
</script>
<template>
  <li>
    {{ todo.text }}
    <style-button
      class="remove-button"
      @click="$emit('remove', todo.id)"
    >
      X
    </style-button>
  </li>
</template>

