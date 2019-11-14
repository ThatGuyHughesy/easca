<template>
  <div class="component-demo">
    <component :is="componentName" />
  </div>
</template>

<script>
export default {
  props: {
    componentName: { type: String, required: true }
  }
};
</script>
