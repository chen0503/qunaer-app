<template>
  <!-- 轮播图 -->
  <div class="wapper">
    <swiper :options="swiperOption" v-if="SwiperList.length">
      <swiper-slide v-for='item in SwiperList' :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
      <div class="swiper-scrollbar"   slot="scrollbar"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'Homeswiper',
  props: {
    SwiperList: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true,
        autoplay: true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.wapper >>> .swiper-pagination-bullets{
  bottom 5px
}
.wapper >>> .swiper-pagination-bullet{
  width 6px;
  height 6px;
  background-color #fff
}
.wapper{
  overflow hidden;
  width 100%;
}
.swiper-img{
  width 100%
}
</style>
