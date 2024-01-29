<template>
  <swiper-container
    :slides-per-view="1"
    :effect="'fade'"
    :pagination="{
      clickable: true
    }"
    :autoplay="{
      delay: 4000,
    }"
    :speed="1000"
    @swiperprogress="onProgress"
    @click="onSlideChange"
  >
    <swiper-slide>
      <div class="slide">
        <div class="slide__inner">
          <p class="slide__caption">Welcome to GreenShop</p>
          <h1 class="slide__title">Greenery is the lungs of the <el-text type="primary">earth</el-text></h1>
          <p class="slide__desc">
            We are an online plant shop offering a wide 
            range of cheap and trendy plants. Use our 
            plants to create an unique Urban Jungle. 
            Order your favorite plants!
          </p>
          <el-button class="slide__btn" type="primary">Shop now</el-button>
        </div>
        <img class="slide__pic" src="@/assets/imgs/banner-big-flower-3.jpg" alt="">
      </div>
    </swiper-slide>
    
    <swiper-slide>
      <div class="slide">
        <div class="slide__inner">
          <p class="slide__caption">Welcome to GreenShop</p>
          <h1 class="slide__title">Let's Make a Better <el-text type="warning">Planet</el-text></h1>
          <p class="slide__desc">
            We are an online plant shop offering a wide 
            range of cheap and trendy plants. Use our 
            plants to create an unique Urban Jungle. 
            Order your favorite plants!
          </p>
          <el-button class="slide__btn" type="warning">Shop now</el-button>
        </div>
        <img class="slide__pic" src="@/assets/imgs/banner-big-flower.png" alt="">
      </div>
    </swiper-slide>

    <swiper-slide>
      <div class="slide">
        <div class="slide__inner">
          <p class="slide__caption">Welcome to GreenShop</p>
          <h1 class="slide__title">The future of the planet depends <el-text type="success">on us</el-text></h1>
          <p class="slide__desc">
            We are an online plant shop offering a wide 
            range of cheap and trendy plants. Use our 
            plants to create an unique Urban Jungle. 
            Order your favorite plants!
          </p>
          <el-button class="slide__btn" type="success">Shop now</el-button>
        </div>
        <img class="slide__pic" src="@/assets/imgs/banner-big-flower-2.jpg" alt="">
      </div>
    </swiper-slide>
  </swiper-container>
</template>

<script setup>
  import { register } from 'swiper/element/bundle';
  register();

  const onProgress = (e) => {
    // const [progress] = e.detail;
    // console.log(progress)
  };

  const onSlideChange = () => {
    // console.log('slide changed')
  }
</script>

<style lang="scss" scoped>
  swiper-container {
    height: 450px;
    width: 100%;
  }
  swiper-container::part(bullet-active) {
    background: #46A358;
  }
  swiper-slide {
    background: #FBFBFB;
    display: flex;
    align-content: center;
  }
  
  .slide {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 20px 40px 10px 40px;
    &__inner {
      max-width: 600px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    &__caption {
      color: #3D3D3D;
      font-size: 1.4rem;
      letter-spacing: 1.4px;
      text-transform: uppercase;
      margin-bottom: 7px;
    }
    &__title {
      color: #3D3D3D;
      font-size: 6rem;
      font-weight: 900;
      line-height: 7rem;
      text-transform: uppercase;
      margin-top: 5px;
      .el-text {
        font-size: 6rem;
      }
    }
    &__desc {
      color: #727272;
      font-size: 1.4rem;
      line-height: 2.4rem;
    }
    &__btn {
      margin-top: 45px;
      padding: 18px 25px;
      font-size: 1.4rem;
      font-weight: 700;
      text-transform: uppercase;
    }
  }
</style>