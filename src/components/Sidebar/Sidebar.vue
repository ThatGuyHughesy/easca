<template>
  <aside class="easca-sidebar">
    <div class="brand">{{ this.title }}</div>
    <b-nav vertical>
      <slot></slot>
    </b-nav>
  </aside>
</template>

<script>
import "./Sidebar.scss";

export default {
  name: "easca-sidebar",
  props: {
    title: {
      type: String,
      default: "Easca"
    }
  }
};
</script>

<style></style>
