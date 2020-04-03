<template>
  <div>
    <div class="Recommend">
      <h2><i class="icondiancai1-copy"></i>去哪儿推荐</h2>
      <div class="Reserve" v-for='item in Reserve' :key="item.id">
        <div class="Reserve-l">
          <a href="javascript:;">
            <div class="Reserve-l-name">{{item.name}}</div>
            <p><i class="iconshijian"></i>{{item.Customized}}</p>
            <ul class="Reserve-l-list">
              <li><i class="iconquna"></i>{{item.condition_1}}</li>
              <li>{{item.condition_2}}</li>
              <li>{{item.condition_3}}</li>
            </ul>
          </a>
        </div>
        <div class="Reserve-r">
          <a href="javascript:;">
            <span>{{item.Price}}</span>
            <input class="Reserve-r-btn" type="button" value="预定">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Recommend',
  data () {
    return {
      Reserve: [
        {id: 1, name: '北京故宫大门票+珍宝馆+资深导游讲解（配无线耳麦）*成人票', Customized: '可定明日', condition_1: '自营', condition_2: '无需换票', condition_3: '条件退', Price: '79'},
        {id: 2, name: '【上午场】故宫成人票+深度讲解+无线耳麦', Customized: '可定明日', condition_1: '无需换票', condition_2: '条件退', Price: '118'},
        {id: 3, name: '【赠：珍宝馆】北京故宫+毛主席纪念堂+国家博物馆纯玩一日游', Customized: '可定明日', condition_1: '条件退', condition_2: '无购物', condition_3: '已售684', Price: '88'}
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
//去哪儿推荐
.Recommend{
  padding-left 10px
  background-color $ColorFFF
}
.Recommend h2{
  line-height 44px
  background-color $ColorFFF
}
.Recommend h2 i {
  display inline-block
  line-height 20px
  width 20px
  font-size 12px
  margin 0px 8px
  background-color #ff6e6e
  border-radius 50px
  text-align center
  color $ColorFFF
}
.Reserve {
  display flex
  padding 10px 10px 12px 0px
  height 109px
  box-sizing border-box
  border-top 1px solid #eee
}
.Reserve-l {
  flex 7.5
}
.Reserve-l a,
.Reserve-r a, {
  color $textColor
}
.Reserve-r {
  flex 2.5
}
//推荐名称
.Reserve-l-name{
  font-size 15px
  line-height 24px
}
.Reserve-l p {
  line-height 18px
  font-size 12px
}
.Reserve-l p i {
  font-size 12px
  color $bgColor
}
.Reserve-l-list li{
  float left
  margin 0px 3px
  padding 0px 2px
  line-height 16px
  font-size 10px
  border 1px solid #eee
  color $bgColor
}
//预定点击
.Reserve-r a{
  margin-top 20px
  // transform translateY(-50%)
  height 50px
  width 100%
  display block
}
.Reserve-r span {
  display block
  line-height 20px
  width 100%
  text-align center
  font-size 20px
  color #ff9800
}
.Reserve-r span::before {
  content '￥'
}
.Reserve-r-btn {
  outline none
  margin-left 50%
  transform translateX(-50%)
  width 80px
  height 30px
  border-radius 5px
  border none
  background-image linear-gradient(130deg,#ffab1e 37%,#ff8c12 100%)
  font-size 16px
  color $ColorFFF
}
</style>
