<template>
<section>
  <hometop></hometop>
  <homeswiper :SwiperList = SwiperList></homeswiper>
  <homeicons :category_object = category_object></homeicons>
  <homepopular :Popular_object = Popular_object></homepopular>
  <homeRecommend :Popular_object = Popular_object></homeRecommend>
  <homefooter :Weekend_object = Weekend_object></homefooter>
  <div class="Return-top" @click="backtop">
    <i class="iconup-copy-copy"></i>
    顶
  </div>
</section>

</template>

<script>
import hometop from './components/Homeheader'
import homeswiper from './components/homeswiper'
import homeicons from './components/Icons'
import homepopular from './components/Popular'
import homeRecommend from './components/Recommend'
import homefooter from './components/homefooter'
import axios from 'axios'
export default {
  name: 'home',
  components: {
    hometop,
    homeswiper,
    homeicons,
    homepopular,
    homeRecommend,
    homefooter
  },
  data () {
    return {
      SwiperList: [],
      category_object: [],
      Popular_object: [],
      Weekend_object: [],
      chenge: false
    }
  },
  mounted () {
    this.getHomeInfo()
    window.addEventListener('scroll', this.showbtn, true)
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json').then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.data) {
        this.SwiperList = res.data.swiperList
        this.category_object = res.data.category_object
        this.Popular_object = res.data.Popular_object
        this.Weekend_object = res.data.Weekend_object
      }
    },
    showbtn () {
      let that = this
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      that.scrollTop = scrollTop
    },
    backtop () {
      var timer = setInterval(function () {
        let osTop = document.documentElement.scrollTop || document.body.scrollTop
        let ispeed = Math.floor(-osTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed
        this.isTop = true
        if (osTop === 0) {
          clearInterval(timer)
        }
      }, 18)
    }
  }
}

</script>
<style lang="stylus" scoped>
.Return-top {
  width 40px
  background-color rgba( 0, 188, 212,.8)
  position fixed
  bottom 0px
  right 0px
  border-radius 50%
  text-align center
  line-height 40px
  font-size 12px
  color #fff
}
</style>
