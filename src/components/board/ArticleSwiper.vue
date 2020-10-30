<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide v-for="item in items" :key="item.id">{{ item }}</swiper-slide>
    <!--<swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
    <swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide>
    <swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8</swiper-slide>
    <swiper-slide>Slide 9</swiper-slide>
    <swiper-slide>Slide 10</swiper-slide>-->
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>

export default {
  name: 'swiper-example-slides-per-column',
  title: 'Multi row slides layout',
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        slidesPerColumn: 2,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      items: ['slide1', 'slide2', 'slide3', 'slide4']
    }
  }
}
</script>

<style lang="scss" scoped>
@import './base.scss';
.swiper {
  height: 430px;
  margin-left: auto;
  margin-right: auto;

  .swiper-slide {
    height: 200px;
  }
}
</style>