<template>
  <header class="header">
    <div class="container">
      <router-link to="/" class="header__logo">
        <img src="@/assets/imgs/header-logo.svg" alt="GREENSHOP">
      </router-link>
      <nav class="header__nav">
        <router-link class="header__link" to="/">Home</router-link>
        <router-link class="header__link" to="/shop">Shop</router-link>
        <router-link class="header__link" to="/plant">Plant Care</router-link>
        <router-link class="header__link" to="/blog">Blog</router-link>
      </nav>
      <div class="header__auth"></div>
    </div>
  </header>
</template>

<script setup>

</script>

<style lang="scss">
  .header {
    .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 25px 0;
    }
    &__logo {}
    &__nav {}
    &__link {
      text-decoration: none;
      color: #3D3D3D;
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
</style>