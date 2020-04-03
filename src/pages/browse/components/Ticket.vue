<template>
  <div>
    <div class="Ticket">
      <div class="Ticket-list-con">
        <ul class="Ticket-list">
          <li>门票</li>
          <li>景区服务</li>
          <li>一日游</li>
          <li>热销组合</li>
        </ul>
      </div>
      <div class="Ticket-Choice">
        <h2><i class="iconmenpiao"></i>故宫当日门票</h2>
        <div class="Ticket-Choice-con">
          <div class="Ticket-Choice-con-l">【当日票】故宫成人票</div>
          <div class="Ticket-Choice-con-r">
            <span>40</span>
            <i class="iconarrow-left1"></i>
          </div>
        </div>
        <div class="Ticket-Choice-con">
          <div class="Ticket-Choice-con-l">【当日票】故宫学生票</div>
          <div class="Ticket-Choice-con-r">
            <span>20</span>
            <i class="iconarrow-left1"></i>
          </div>
        </div>
        <div class="Ticket-More">
          <a href="javascript:;">
            查看剩余产品<i class="iconarrow-left1"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Ticket'
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';
.Ticket {
  margin-top 8px
}
.Ticket-list-con {
  overflow-x scroll
}
.Ticket-list {
  height 49px
  width 400px
  background-color $ColorFFF
}
.Ticket-list li{
  float left
  line-height 46px
  width 100px
  text-align center
}
.Ticket h2 {
  padding 0px 10px
  line-height 44px
  border-bottom 1px solid #eee
}
.Ticket h2 i{
  width 15px
  line-height 15px
  display inline-block
  background-color $bgColor
  border-radius 50%
  text-align center
  color $ColorFFF
  font-size 10px
  margin 0px 3px
}
.Ticket-Choice {
  background-color $ColorFFF
}
.Ticket-Choice-con{
  box-sizing border-box
  height 48px
  padding 12px 10px
  display flex
  border-bottom 1px solid #eee
}
.Ticket-Choice-con-l {
  flex 7.5
  font-size 16px
}
.Ticket-Choice-con-r {
  flex 2.5
  text-align center
  font-size 20px
  color $yellowTypeface
}
.Ticket-Choice-con-r span:before {
  content '￥'
  font-size 13px
}
.Ticket-Choice-con-r span:after {
  content '起'
  font-size 12px
  color $gray-Typefac
}
.Ticket-Choice-con-r i{
  color $gray-Typefac
  margin 0px -5px
  font-size 16px
}
//剩余产品
.Ticket-More {
  line-height 40px
}
.Ticket-More a {
  display block
  color $textColor
  text-align center
  font-size 14px
}
.Ticket-More a i {
  margin 0px 3px
}
</style>
