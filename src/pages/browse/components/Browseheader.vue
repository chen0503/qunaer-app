<template>
  <div class="header">
    <div class="header-in">
      <div class="introduce-img">
        <a href="javascript:;" class="introduce-img-cont">
          <img :src="this.$route.params.imgUrl" alt="">
          <router-link to="/">
            <a href="javascript:;" class="introduce-Return">
              <i class="iconarrow-left"></i>
            </a>
          </router-link>
          <a class="img-More" href="javascript:;">
            <div class="img-More-con">
              <i class="icontupian"></i>
              12
            </div>
          </a>
          <h1 class="introduce-name">{{this.$route.params.desc}}</h1>
        </a>
        <div class="introduce-Projection"></div>
      </div>
      <div class="introduce-content">
        <div class="introduce-content-con">
          <a href="javascript:;" class="introduce-content-l">
            <div class="introduce-content-l-t">
              <span class="in-co-t-1">5.0</span>
              <span class="in-co-t-2">分</span>
              <span class="in-co-t-3">超赞</span>
            </div>
            <div class="introduce-content-l-b">
              <span class="in-co-b-1">575962条评论</span>
              <span class="in-co-b-2">98攻略</span>
              <span class="in-co-b-3"><i class="iconiconfontyoujiantou-copy-copy-copy-copy-copy"></i></span>
            </div>
          </a>
          <a href="javascript:;" class="introduce-content-r">
            <div class="introduce-content-r-t">景点简介</div>
            <div class="introduce-content-r-b">开放时间、贴士</div>
            <span class="introduce-content-r-r"><i class="iconiconfontyoujiantou-copy-copy-copy-copy-copy"></i></span>
          </a>
        </div>
      </div>
      <div class="purchase clearfix">
        <a href="javascript:;" class="purchase-content">
          <i class="icon-didian"></i>
          北京市东城区景山前街4号
          <i class="purchase-r iconiconfontyoujiantou-copy-copy-copy-copy-copy"></i>
        </a>
      </div>
    </div>

    <Recommend></Recommend>
    <Ticket></Ticket>
    <Comment></Comment>
  </div>
</template>
<script>
import Browseheader from './Browseheader'
import Recommend from './Recommend'
import Ticket from './Ticket'
import Comment from './Comment'
export default {
  name: 'Browseheader',
  data () {
    return {

    }
  },
  components: {
    Browseheader,
    Recommend,
    Ticket,
    Comment
  },
  methods: {

  },
  created () {
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.header {
  // height 301px
  position relative
}
.header-in{
  height 301px
}
//图片
.introduce-img {
  display flex
  height 206px
  width 100%
  position relative
}
.introduce-img-cont {
  position relative
  height 206px
  width 100%
}
.introduce-img-cont img {
  width 100%;
  height 206px
}
.introduce-Return {
  line-height 36px
  width 36px
  border-radius 50%
  position absolute
  left 5px
  top 5px
  text-align center
  color $ColorFFF
  font-weight 600
  font-size 18px
  background rgba(0,0,0,.5)
}
.img-More {
  position absolute
  left 15px
  bottom 50px
  width 60px
  line-height 20px
  background rgba(0,0,0,.5)
  border-radius 10px
  font-size 12px
  color $ColorFFF
}
.img-More i{
  margin 0px 3px 0px 10px
}
.introduce-name {
  position absolute
  left 15px
  bottom 20px
  line-height 20px
  color $ColorFFF
  font-size 18px
}
.introduce-Projection {
  position absolute
  bottom 0px
  left 0px
  width 100%
  height 30px
  background-image: linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,.8))
}
//评分地址
.introduce-content {
  overflow hidden
  display flex
  box-sizing border-box
  position absolute
  top 201px
  left 0px
  width 100%
  height 56px
  padding  5px 10px 0px
  border-radius 10px 10px 0px 0px
  background-color $ColorFFF
}
.introduce-content-con {
  box-sizing border-box
  padding 5px 0px 10px
  height 56px
  width 100%
  display flex
}
.introduce-content-l,
.introduce-content-r{
  height 42px
  width 100%
  flex 1
  color $textColor
}
.introduce-content-l-t{
  line-height 26px
  color #ff8c12
}
.introduce-content-l-b{
  line-height 16px
  font-size 12px
  position relative
  color #9e9e9e
}
.in-co-t-1 {
  font-size 22px
}
.in-co-t-2{
  font-size 13px
  margin-right 5px
}
.in-co-b-1{
  margin-right 5px
}
.in-co-b-3{
  position absolute
  right 5px
  top -15px
  font-size 12px
}
.introduce-content-l{
  border-right 1px solid #eee
}
.introduce-content-r {
  margin-left 13px
  position relative
  color #9e9e9e
}
.introduce-content-r-t{
  font-size 14px
  line-height 24px
  color $textColor
}
.introduce-content-r-b {
  font-size 12px
}
.introduce-content-r-r{
  position absolute
  right 5px
  top 13px
  font-size 12px
}
//地址
.purchase{
  border-top 1px solid #f0f0ef
  width 100%
  line-height 17px
  padding 10px 0px
  display flex
  position absolute
  top 257px
  left 0px
  font-size 14px
  background-color #fff
}

.purchase-content {
  position relative
  width 100%
  color $textColor
}
.purchase-content i {
  margin 0px 10px
  font-size 16px
  color #9e9e9e
}
.purchase-r{
  position absolute
  right 0px
  top 0px
  font-size 14px!important
}
</style>
