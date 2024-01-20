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
        <div class="header__btns">
          <div class="search">
            <img src="@/assets/imgs/search.svg" alt="">
          </div>
          <div class="search">
            <img src="@/assets/imgs/cart.svg" alt="">
          </div>
          <el-button type="success">
            <img src="@/assets/imgs/logout.svg" alt="">
            Login
          </el-button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>


</script>

<style lang="scss" scoped>
.header {
  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 20px;
    padding-bottom: 18px;
    border-bottom: 0.3px solid #46A35880;
  }

  &__nav {
    display: flex;
    align-items: center;
    gap: 50px;
  }
  &__btns {
    display: flex;
    align-items: center;
    gap: 30px;
  }
  &__link {
    text-decoration: none;
    color: #3D3D3D;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
}

.el-button {
  img {
    margin-right: 4px;
  }
}
</style>