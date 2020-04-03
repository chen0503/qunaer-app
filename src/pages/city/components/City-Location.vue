<template>
  <div>
    <div class="city-Choice-list">
      <h2>字母排序</h2>
      <ul class="Letter-sort">
        <li value="111" v-for="(item,key) in cities" :key="item.id" @click= "Letter_sort_position">
          {{key}}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'City-Location',
  props: {
    cities: Object
  },
  methods: {
    Letter_sort_position (i) {
      // console.log(i.toElement.innerText)
      this.$emit('chenge', i.toElement.innerText)
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
@import '~@/assets/styles/mixins.styl'

h2 {
  CityH2()
}
// 字母排序
.Letter-sort{
  display flex;
  width 100%;
  padding 15px 0px;
  flex-wrap wrap;
  background-color $ColorFFF;
}
.Letter-sort li{
  line-height 45px;
  text-align center;
  width 16%;
  float left;
  font-size 14px;
  color $textColor;
}

</style>
