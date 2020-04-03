<template>
  <div>
    <div class="Letter-sort-Collection" v-for="(item,key) in cities" :key="key">
        <h2 >{{key}}</h2>
        <ul class="Letter-sort-A">
          <li v-for="inneritem in item" :key="inneritem.id">
            <a href="javascript:;">{{inneritem.name}}</a>
          </li>
        </ul>
      </div>
  </div>
</template>
<script>
export default {
  name: 'City-Address',
  props: {
    cities: Object
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
@import '~@/assets/styles/mixins.styl'
// 字母排序-A-顺序
h2{
  CityH2()
}
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
</style>
