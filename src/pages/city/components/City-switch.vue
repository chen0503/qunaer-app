<template>
  <div>
    <div class="header">
      <div class="Choice-city">
        <router-link to="/">
        <a href="javascript:;" class="Choice-city-Return "><i class="iconarrow-left"></i></a>
        </router-link>
        <h1>城市选择</h1>
      </div>
      <div class="partition-Choice">
        <div class="partition-Choice-content">
          <div :class="{Color_Switch:shows==0}" @click="shows = 0">境内</div>
          <div :class="{Color_Switch:shows==1}" @click="shows = 1">境外·港澳台</div>
        </div>
        <!-- <div v-show="shows==0">1111</div>
        <div v-show="false">2222222</div> -->
      </div>
    </div>
    <!-- 热门城市1 -->
    <div class="Popular-city-con" v-show="shows==0">
      <h2>热门城市1</h2>
      <ul class="Popular-city">
        <li v-for="item in city_Choice_list" :key="item.id">
          <a href="javascript:;">{{item.name}}</a>
        </li>
      </ul>
    </div>
    <!-- 热门城市2 -->
    <div class="Popular-city-con" v-show="shows==1">
      <h2>热门城市2</h2>
      <ul class="Popular-city">
        <li v-for="item in city_Choice_list" :key="item.id_num">
          <a href="javascript:;">{{item.name_abroad}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CityHeader',
  data () {
    return {
      shows: 0,
      ishidden: true
    }
  },
  props: {
    city_Choice_list: Array,
    cities: Object
  },
  methods: {
    Letter_sort_position (e) {
      console.log(e.innerText)
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
@import '~@/assets/styles/mixins.styl'

//头部
.header {
  height 74px;
  background-color $bgColor
}
.Popular-city-con {
  height 200px
}
.Choice-city {
  position relative;
  line-height 34px;
  text-align center;
  color $ColorFFF;
  font-size 16px
}
.Choice-city-Return {
  position absolute;
  left 8px;
  top 0px;
  color $ColorFFF;
  text-align center;
  line-height 34px;
  font-size 18px;
}
.partition-Choice{
  padding 10px 0px;
}
.partition-Choice-content{
  width 70%;
  height 20px;
  margin 0px auto;
  display flex;
  border 1px solid $ColorFFF;
  // box-sizing border-box
  border-radius 2px
}
.partition-Choice-content div{
  flex 35%;
  float left;
  font-size 14px
  line-height 20px;
  color $ColorFFF;
  text-align center;

}
.p-C-content-within,
.p-C-content-External{
  // background-color $ColorFFF
}
.city-Choice-list h2 {
  margin 12px 15px;
  font-size 12px;
}
//切换类
.partition-Choice-content .Color_Switch{
  background-color $ColorFFF!important;
  color $bgColor!important

}// 字母排序-A-顺序
// h2{
//   CityH2()
// }
.Letter-sort-A{
  display flex;
  flex-wrap wrap;
  width 100%;
}
.Letter-sort-A li {
  width 24.70%;
  line-height 45px;
  float left;
  text-align center;
  background-color $ColorFFF;
  border-right 1px solid #ddd;
  border-bottom 1px solid #ddd;
}
.Letter-sort-A li a{
  display block;
  color $textColor;
  ellipsis();
  font-size 14px;
}
//热门城市
h2 {
  CityH2()
}
.Popular-city {
  display flex;
  flex-wrap wrap;
  width 100%;
}

.Popular-city li{
  line-height 45px;
  width 33%;
  float left;
  text-align center;
  border-left 1px solid #ddd;
  border-bottom 1px solid #ddd;
  background-color $ColorFFF;
}
.Popular-city a {
  display block;
  color $textColor;
  ellipsis()
}
</style>
