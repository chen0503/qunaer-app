<template>
  <div>
    <!-- 热门 -->
    <div class="Popular">
      <div class="Popular-top">
        <h4><i class="iconhuo"></i>本周热门榜单</h4>
        <a href="javascript:;">全部榜单<i class="iconiconfontyoujiantou-copy-copy-copy-copy-copy"></i></a>
      </div>
      <div class="Popular-bottom">
        <ul>
          <li v-for='item in Popular_object' :key="item.id">
            <a href="javascript:;">
              <img :src="item.imgUrl">
              <div class="Popular-spot">
                {{ item.desc }}
              </div>
              <div class="Popular-spot-Price">
                {{ item.Price }}
              </div>
            </a>
            <img class="Popular-ranking" :src="item.ranking">
          </li>
        </ul>
      </div>
  </div>
  </div>
</template>
<script>
export default {
  name: 'popular',
  props: {
    Popular_object: Array
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
@import '~@/assets/styles/mixins.styl'
// 热门
.Popular{
  height 200px;
  width 100%;
  margin-top 10px;
  background-color #fff
}
// 本周热门
.Popular-top{
  padding 12px 0px 13px;
  height 22px
}
.Popular-top h4{
  display inline-block;
  float left;
  color $textColor;
  font-weight 500;
}
.Popular-top h4 i{
  color #ff8045;
  margin 0px 2px;
}
.Popular-top a{
  display inline-block;
  float right;
  color $textColor
  font-size 14px
}
.Popular-top a i{
  margin-right 8px;
  font-size 12px;
}
// 排名
.Popular-bottom{
  height 153px;
  width 100%;
  padding 0px 12px;
  overflow-x scroll
}
.Popular-bottom ul{
  width 1100px;
  height 153px
}
.Popular-bottom li{
  width 100px;
  height 153px;
  position relative;
  float left;
  margin-right 5px;

}
.Popular-bottom li a{
  display block;
  color $textColor
}
.Popular-bottom li a img{
  width 100px;
  height 100px;
}
.Popular-spot{
  width 100%;
  margin-top 5px;
  text-align center;
  font-size 13px;
  ellipsis()
}
.Popular-spot-Price{
  text-align center;
  font-size 13px;
  color #ff8300;
}
.Popular-spot-Price::after{
  content '起';
  color $textColor
}
.Popular-ranking{
  position absolute;
  left -1px;
  top -2px;
  height 20px;
}
</style>
