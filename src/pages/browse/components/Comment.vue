<template>
  <div>
    <div class="User-reviews">
      <h3><i class="iconiconshugang-copy"></i>用户评论</h3>
      <div class="User-reviews-con">
        <img class="User-reviews-con-img" src="//s.qunarzz.com/piao/image/touch/sight/highQualityComment1.png" alt="">
        <div class="User-reviews-t-con">
          <i class="iconstart"></i>
          <span>随*啊&nbsp;&nbsp;2017-12-30</span>
        </div>
        <p :class="length ? 'User-reviews-b-con-one' : 'User-reviews-b-con-two' ">参观故宫是来京必须要安排的行程，紫禁城的宏伟和惊艳超乎你想象，假装自己穿越时空，你走在乾隆皇帝走过的石板砖上，体验当年盛世的文化底蕴和奢华的生活～ 攻略1 提前网上购买门票，凭身份证直接进 攻略2 租讲解器，每个讲解器都是感应的，每个只讲解一遍，只有一个耳机，别想着两人共用的好事儿，哈哈哈 攻略3 周一闭馆，周末人居多，尽量安排工作日，若所有宫殿都想参观，就提早进去，不过我个人觉得没必要，参观代表性的中轴和个别妃子和慈禧的宫殿即可，建议预留至少大半天时间在里头 再来北京，还愿意去故宫~~</p>
        <div @click='changeSize' class="User-reviews-More-con">
          <i :class="toggle ? 'iconarrow-left1' : 'iconup-copy-copy'" ></i>
        </div>
      </div>
      <!-- <div class="User-reviews-con">
        <img class="User-reviews-con-img" src="//s.qunarzz.com/piao/image/touch/sight/highQualityComment1.png" alt="">
        <div class="User-reviews-t-con">
          <i class="iconstart"></i>
          <span>随*啊&nbsp;&nbsp;2017-12-30</span>
        </div>
          <p class="User-reviews-b-con">参观故宫是来京必须要安排的行程，紫禁城的宏伟和惊艳超乎你想象，假装自己穿越时空，你走在乾隆皇帝走过的石板砖上，体验当年盛世的文化底蕴和奢华的生活～ 攻略1 提前网上购买门票，凭身份证直接进 攻略2 租讲解器，每个讲解器都是感应的，每个只讲解一遍，只有一个耳机，别想着两人共用的好事儿，哈哈哈 攻略3 周一闭馆，周末人居多，尽量安排工作日，若所有宫殿都想参观，就提早进去，不过我个人觉得没必要，参观代表性的中轴和个别妃子和慈禧的宫殿即可，建议预留至少大半天时间在里头 再来北京，还愿意去故宫~~</p>
        <div class="User-reviews-More-con">
          <i class="iconarrow-left1"></i>
        </div>
        <div class="User-reviews-b-con-img">
          <div class="U-r-b-con-img-con">
            <img src="http://img1.qunarzz.com/piao/fusion/1912/38/99874cdef315c502.jpg_228x168_db3c2e34.jpg" alt="">
          </div>
          <div class="U-r-b-con-img-con">
            <img src="http://img1.qunarzz.com/piao/fusion/1912/38/99874cdef315c502.jpg_228x168_db3c2e34.jpg" alt="">
          </div>
          <div class="U-r-b-con-img-con">
            <img src="http://img1.qunarzz.com/piao/fusion/1912/38/99874cdef315c502.jpg_228x168_db3c2e34.jpg" alt="">
          </div>
          <div class="U-r-b-con-img-con">
            <img src="http://img1.qunarzz.com/piao/fusion/1912/38/99874cdef315c502.jpg_228x168_db3c2e34.jpg" alt="">
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  name: 'Comment',
  data () {
    return {
      toggle: true,
      length: true
    }
  },
  methods: {
    changeSize () {
      this.toggle = !this.toggle
      this.length = !this.length
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
@import '~@/assets/styles/mixins.styl'
.User-reviews {
  background-color $ColorFFF
}
.User-reviews h3 {
  line-height 44px
  Underline()
}
.User-reviews h3 i {
  color $bgColor
  margin 0px 5px
}
.User-reviews-con {
  box-sizing border-box
  padding 5px 10px 15px
  position relative
  Underline()
  overflow hidden
}
.User-reviews-t-con {
  height 30px
  line-height 30px
}
.User-reviews-t-con i {
  float left
  color $yellowTypeface
  font-size 20px
}
.User-reviews-t-con span {
  float right
  font-size 12px
}
.User-reviews-b-con-one {
  overflow hidden
  font-size 13px
  line-height 20px
  height 104px
}
.User-reviews-b-con-two {
  overflow auto
  font-size 13px
  line-height 20px
  height auto
}
.User-reviews-More-con {
  height 25px
  width 100%
  line-height 25px
  text-align center
  font-size 20px
  background-color $ColorFFF
}
.User-reviews-More-con i {
  font-size 15px
}
.User-reviews-con-img {
  width 71px
  height 48px
  position absolute
  right 5px
  top 5px
}
.User-reviews-con-img img {
  width 100%
  height 100%
}
.User-reviews-b-con-img {
  display flex
  height 174px
}
.U-r-b-con-img-con {
  flex 3.3
  // width 111px
  padding 0px 2.5px
  height 82px
  margin-bottom 5px
  flex-wrap wrap
}
.U-r-b-con-img-con img {
  width 100%
  height 100%
}
</style>
