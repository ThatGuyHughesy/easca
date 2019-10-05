<template>
  <aside class="easca-sidebar">
    <div class="brand">Easca</div>
    <b-nav vertical>
      <slot></slot>
    </b-nav>
  </aside>
</template>

<script>
import "./Sidebar.scss";

export default {
  name: "easca-sidebar"
};
</script>

<style></style>
