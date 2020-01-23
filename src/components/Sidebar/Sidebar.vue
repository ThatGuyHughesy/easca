<template>
  <aside class="easca-sidebar">
    <div class="brand">
      <!-- @slot Use this slot title -->
      <slot name="title"></slot>
    </div>
    <b-nav vertical>
      <!-- @slot Use this slot navigation -->
      <slot name="navigation"></slot>
    </b-nav>
  </aside>
</template>

<script>
import "./Sidebar.scss";

export default {
  name: "easca-sidebar",
  mounted: () => {
    var dropdowns = document.getElementsByClassName("dropdown");
    for (const dropdown of dropdowns) {
      for (const nav_item of dropdown.children) {
        if (nav_item.getElementsByClassName("nav-link")[0].classList.contains("active")) {
          dropdown.style.removeProperty("display");
          dropdown.classList.add("show");
        }
      }
    }
  }
};
</script>

<style></style>
