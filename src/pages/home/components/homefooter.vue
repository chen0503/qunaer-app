<template>
  <div>
    <div class="Weekend-where">
      <h2>周末去哪儿</h2>
      <div class="Weekend-where-content" v-for='item in Weekend_object' :key="item.id">
        <a href="javascript:;">
          <div class="Weekend-where-content">
            <div class="Weekend-where-content-t">
              <img v-lazy="item.imgUrl">
            </div>
          <div class="Weekend-where-content-b">
            <p class="Weekend-p-1">{{item.title}}</p>
            <p class="Weekend-p-2">{{item.desc}}</p>
          </div>
        </div>
        </a>
      </div>
    </div>
    <div class="Be-careful">
    <i class="iconiconcopy"></i><span>票面假</span>是指通过景区指定窗口售卖的纸质门票上标注的价格
    </div>
    <div class="where-footer">
      <div class="where-footer-nav">
        <a href="javascript:;"> <i class="iconfeiji"></i> 机票</a>
        <a href="javascript:;"> <i class="iconjiudian"></i> 酒店</a>
        <a href="javascript:;"><i class="iconfangzi"></i>公寓</a>
        <a href="javascript:;" class="where-nav-last-a"><span> <i class="icongengduoxiala"></i>更多</span></a>
      </div>
      <ul>
        <li><a href="javascript:;"></a>登录</li>
        <li><a href="javascript:;"></a>我的订单</li>
        <li><a href="javascript:;"></a>最近浏览</li>
        <li><a href="javascript:;"></a>关于我们</li>
      </ul>
      <div class="where-footer-switch">
        <a href="javascript:;">触屏版</a>
        <a href="javascript:;" class="where-switch-last-a">电脑版</a>
      </div>
      <div class="where-footer-footer">
        <p>Qunar 京ICP备05021087<a href="javascript:;">意见反馈</a></p>
      </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'homefooter',
  props: {
    Weekend_object: Array
  }
}
</script>
<style lang="stylus" scoped>
//周末去哪儿
@import '~@/assets/styles/varibles.styl'
.Weekend-where a{
  display block;
  color $textColor;
  background-color $ColorFFF
}
.Weekend-where h2{
  margin-left 10px;
  line-height 40px
}
.Weekend-where-content-t{
  height 140px;
  display flex
}
.Weekend-where-content-t>img{
  flex 100%
  height 137px
}
.Weekend-where-content-b {
  padding 7px 10px 10px;
}
.Weekend-p-1{
  font-size 16px;
  line-height 24px
}
.Weekend-p-2{
  font-size 12px;
  line-height 20px;
}
//假面票
.Be-careful{
  height 16px;
  padding 7px 5px;
  margin-top 5px;
  background-color $ColorFFF;
  font-size 12px;
  color $textColor
}
.Be-careful span {
  font-weight 800;
  margin 0px 3px 0px 0px;
}
//footer 底部
.where-footer a{
  color $textColor
}
.where-footer-nav {
  line-height 35px;
  text-align center
}
.where-footer-nav a{
  display inline-block
  width 75px;
  line-height 31px;
  font-size 14px;
  color #9e9e9e;
}
.where-footer-nav a i {
  font-size 16px
}
.where-nav-last-a{
  text-align left
}
.where-nav-last-a span {
  padding-left 5px;
  border-left 1px solid #ccc;
}
.where-footer ul {
  height 39px;
}
.where-footer ul li {
  float left;
  padding-left 20px;
  color #25a4bb;
  font-size 14px
}
.where-footer-switch {
  height 15px;
  text-align center;
  padding-top 10px;
  border-top 2px solid #eee
}
.where-footer-switch a{
  display inline-block;
  font-size 14px;
  margin 0px 10px
}
.where-switch-last-a {
  color #25a4bb!important;
}
.where-footer-footer{
  text-align center;
  font-size 14px;
  padding 10px;
  color #9e9e9e;
}
.where-footer-footer a{
  color #9e9e9e
}
</style>
