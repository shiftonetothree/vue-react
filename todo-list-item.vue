<style lang="scss" scoped>
button{
  color: red;
}
</style>
<script>
export default {
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
    <button @click="$emit('remove', todo.id)">
      X
    </button>
  </li>
</template>

