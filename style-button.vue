<style lang="scss" scoped>
.button{
  color: red;
}
</style>
<script>
export default {
  data () {
    return {
			fontSize: 12,
    }
  },
  method:{
    abc(){
      $attrs.class
    }
  }
}
</script>
<template>
  <button
    v-bind="$attrs"
    v-bind:class="button"
    v-bind:style="{ fontSize: `${fontSize}px` }"
    v-on="$listeners"
  >
    
    <slot></slot>
  </button>
</template>

