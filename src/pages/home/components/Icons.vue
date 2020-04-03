<template>
    <!-- 列表游玩项目 -->
    <section>
      <div class="category">
        <swiper>
          <swiper-slide v-for="(page,index) in pages" :key="index">
            <div class="category">
              <div v-for ='item in page' :key="item.id" class="categorg-content">
                <a href="javascript:;"><img :src="item.imgUrl" :alt="item.desc"><span>{{item.desc}}</span></a>
              </div>
            </div>
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
      </div>
    <!-- 定位-必玩榜 -->
      <div class="Location-list">
        <a href="javascript:;" class="Location">
          <div class="Location-list-content">
            <i class="icon-didian"></i>
            定位失败
          </div>
        </a>
        <a href="javascript:;" class="list_swim">
          <div class="Location-list-content">
            <i class="icondiqiu"></i>
            必游榜单
          </div>
        </a>
      </div>
</section>

</template>
<script>
export default {
  name: 'icons',
  props: {
    category_object: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  computed: {

    pages () {
      const pages = []
      this.category_object.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import'~@/assets/styles/mixins.styl'
@import'~@/assets/styles/varibles.styl'
.category{
  display flex;
  height 185px;
  background-color $ColorFFF
}
.category{
  height 185px;
  width 100%;
  display flex;
  flex-wrap wrap;
  padding-top 5px;
}

.categorg-content{
  width 25%;
  height 80px;

}
.categorg-content a{
  text-align center;
  display flex;
  flex-direction column
  color $textColor;
}
.categorg-content a span {
  width 100%;
  ellipsis()
}
.categorg-content a img{
  width 55px;
  height 55px
  margin 0px auto;
}
// .category .swiper-pagination-bullets{
//   bottom 0px
// }
// .category .swiper-pagination-bullet{
//   width 5px!important;
//   height 5px!important;
// }

// 列表游玩项目
.Location-list{
  display flex;
  line-height 49px;
  border-top 1px solid #eee;
  background-color $ColorFFF
}
.Location-list a {
  color $textColor
}
.Location{
  width 50%;
  height 49px;
  border-right 1px solid #eee;
}
.list_swim{
  width 50%;
  height 49px;
}
.Location-list-content{
  text-align center;
  font-size 14px;
}
.Location-list-content i {
  color $textColor;
}
</style>
