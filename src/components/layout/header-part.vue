<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
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
    </div>
  </header>
</template>

<script setup>

</script>

<style lang="scss">
.header {
  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 20px;
    padding-bottom: 18px;
    border-bottom: 0.3px solid #46A35880;
  }
  &__logo {}
  &__nav {
    display: flex;
    align-items: center;
    gap: 50px;
  }
  &__link {
    text-decoration: none;
    color: #3D3D3D;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
}</style>