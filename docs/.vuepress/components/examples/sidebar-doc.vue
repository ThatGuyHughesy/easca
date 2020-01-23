<template>
  <div>
    <easca-sidebar>
      <template v-slot:title>Easca</template>
      <template v-slot:navigation>
        <b-nav-item active>Dashboard</b-nav-item>
        <b-nav-item>Projects</b-nav-item>
        <b-button v-b-toggle="'account'">Account</b-button>
        <b-collapse id="account" class="dropdown">
          <b-nav-item>Profile</b-nav-item>
          <b-nav-item>Billing</b-nav-item>
          <b-nav-item>Security</b-nav-item>
        </b-collapse>
        <b-nav-item>Logout</b-nav-item>
      </template>
    </easca-sidebar>
  </div>
</template>
