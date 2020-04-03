<template>
  <div>
    <div class="guessLove">
      <h6><i class="iconxihuan"></i>猜你喜欢</h6>
      <ul>
        <li v-for ='item in Popular_object' :key="item.id">
          <div class="chuancan" @click="chuancan(item)">
            <div class="guessLove-li-left">
              <img :src="item.imgUrl">
            <div class="guessLove-li-left-img">
              可订明日
            </div>
            </div>
            <div class="guessLove-li-right">
              <div class="guessLove-li-name">{{item.desc}}</div>
              <div class="guessLove-li-evaluate"><i class="iconstart"></i> <span>1000评价</span></div>
              <div class="guessLove-li-Price"><b>{{item.Price}}</b><span>东城区</span></div>
              <div class="guessLove-li-Recommend">世界五大宫之首，穿越与您近在咫尺</div>
            </div>
          </div>
        </li>
      </ul>
      <a href="javascript:;" class="More-product">
        查看所有产品
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Recommend',
  props: {
    Popular_object: Array
  },
  methods: {
    chuancan (i) {
      console.log(i)
      this.$router.push({
        name: 'Browseheader',
        params: {
          imgUrl: i.imgUrl,
          desc: i.desc
        }
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
@import '~@/assets/styles/mixins.styl'
//猜你喜欢

.guessLove h6 {
  height 21px;
  padding 12px 0px 13px;
}
.guessLove h6 i {
  color #ff6251;
  margin 0px 5px 0px 8px
}
.guessLove {
  margin-top 10px;
  background-color $ColorFFF
}
.guessLove ul{
  margin-left 10px
}
.guessLove li{
  height 137px;
  padding 10px 0px
}
.chuancan {
  display flex;
  color $textColor
}
.guessLove-li-left{
  flex 30%;
  position relative
}
.guessLove-li-left img{
  width 100px;
  height 100px
}
.guessLove-li-left-img{
  position absolute;
  left 0px;
  top 0px;
  width 51px;
  background-image url(https://img1.qunarzz.com/piao/fusion/1802/52/b9080e45b69b4f02.png);
  background-size 51px 19px;
  color $ColorFFF;
  font-size 11px;
  text-align center;
  line-height 19px
}
.guessLove-li-right{
  overflow hidden;
  flex 70%;
  padding-left 10px
}
.guessLove-li-name{
  width 100%;
  margin 13px 0px 0px 5px;
  height 22px
  ellipsis()
}
.guessLove-li-evaluate{
  height 17px;
  margin-top 7px
}
.guessLove-li-evaluate i {
  color #ffb436;
  float left
  font-size 20px
}
.guessLove-li-evaluate span {
  font-size 14px;
}
.guessLove-li-Price{
  height 22px;
  margin-top 17px;
}
.guessLove-li-Price b{
  float left;
  color #ff8300;
  font-size 18px
}
.guessLove-li-Price b::after{
  content '起';
  color $textColor;
  font-size 13px
}
.guessLove-li-Price span {
  float right;
  font-size 14px;
  margin-right 8px
}
.guessLove-li-Recommend{
  width 202px;
  height 22px;
  margin 24px 12px 0px 0px;
  font-size 12px;
  color #f55
}
.More-product{
  display block;
  height 20px;
  padding 10px 0px;
  border-top 1px solid #eee;
  text-align center;
  color $bgColor;
  font-size 14px;
  font-weight 300
}
</style>
