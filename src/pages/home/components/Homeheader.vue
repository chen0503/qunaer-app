<template>
  <!-- header部分-->
  <section class="container">
    <div class="header">
      <a class="Header-left" href="javascript:;">
        <i class="iconarrow-left"></i>
      </a>
      <i class="iconfangda"></i>
      <input type="text" placeholder="输入城市/景点/游玩主题" class="search-btn" @click="handelclick()" />
      <router-link to="/city">
        <a class="Header-right" href="javascript:;">
          北京
          <i class="icongenduo"></i>
        </a>
      </router-link>
    </div>
    <transition name="slider">
      <div class="conent" v-show="show">
        <div class="search">
          <!-- <router-link to="/"> -->
          <i class="iconarrow-left Return_sc" @click="handleback()"></i>
          <!-- <router-link> -->
          <div class="search-in">
            <input class="search-in-tp" type="text" placeholder="输入城市或景点" />
          </div>
          <button class="submit">搜索</button>
        </div>
        <!-- 搜索城市景点 -->
        <div class="search-box">
          <i class="search-box-l">热门城市</i>
          <span @click='changeone()' class="search-box-r" ref="changeelement"><i class="iconshuaxin"></i>换一批</span>
        </div>
        <div class="search-footer">
          <div class="search-footer-l">
            <ul>
              <li class="search-footer-list" v-for='item in jingdain_list' :key="item.id">{{item.name}}</li>
            </ul>
          </div>
          <!-- <div class="search-footer-r"></div> -->
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'hometop',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      },
      show: false,
      jingdain_list: [{
        name: '古北水镇',
        id: '001'
      },
      {
        name: '恭王府',
        id: '002'
      },
      {
        name: '北京动物园',
        id: '003'
      },
      {
        name: '八达岭长城',
        id: '004'
      },
      {
        name: '北京欢乐谷',
        id: '005'
      },
      {
        name: '颐和园',
        id: '006'
      }],
      changerotatenum: 0,
      qList: [],
      // 处理后的list
      newList: [],
      // 截取第几组的开始参数
      timeStart: 0,
      // 截取第几组的结束参数
      timeEnd: 1,
      // 默认为0组
      group: 0,
      // 一页展示list数量
      num: 3,
      // 点击的次数
      clickNum: 0
    }
  },
  methods: {
    handelclick () {
      this.show = true
      document.getElementsByTagName('body')[0].style.overflow = 'hidden'
    },
    handleback () {
      this.show = false
    },
    changeone () {
      this.changerotatenum += 360
      this.$refs.changeelement.getElementsByTagName('i')[0].style.transform = `rotate(${this.changerotatenum}deg)`
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';
.conent {
  height 100%
  background-color #f5f5f5
  position fixed
  left 0px
  top 0px
  right 0px
  bottom 0px
  z-index 10
}
.search {
  height 44px
  width 100%
  background-color $ColorFFF
  display flex
}
.Return_sc {
  float left
  width 20px
  padding 0px 10px
  text-align center
  line-height 44px
}

.search-in {
  height 30px
  width 100%
  margin 7px 0px
  border-radius 20px
  overflow hidden
}
.search-in-tp {
  height 31px
  line-height 30px
  width 100%
  border:0
  background-color #f2f2f2
  text-align center
  font-size 14px
}
.submit {
  display block
  width 60px
  line-height 44px
  border 0
  background-color #fff
  font-size 13px
}
.slider-enter-active, .slider-leave-active {
  transition: transform .4s;
}
.slider-enter, .slider-leave-to  {
  transform: translate3d(100%,0,0)
}
.search-btn {
  flex: 1;
  height: 26px;
  text-indent: 28px;
  border-radius 5px;
  border 0px
  color #ccc
}

.iconfangda {
  position: relative;
  left: 24px;
  color #ccc
}

.header {
  background-color: $bgColor;
  display: flex;
  height: 44px;
  align-items: center;
}

.Header-left {
  display: block;
  height: 44px;
  width: 45px;
  color: $ColorFFF;
  text-align: center;
  line-height: 44px;
  font-size: 14px;
}

.Header-left i {
  color: $ColorFFF;
  font-size: 18px;
}

.Header-center {
  display: block;
  flex: 1;
  height: 30px;
  width: 100%;
  border: none;
  margin-top: 8px;
  border-radius: 5px;
  background-color: $ColorFFF;
  text-indent: 5px;
  color: #ccc;
  line-height: 30px;
  font-size: 14px;
}

.Header-center i {
  color: #ccc;
  font-size: 14px;
}

.Header-right {
  display: block;
  width: 45px;
  height: 44px;
  color: $ColorFFF;
  text-indent: 5px;
  line-height: 44px;
  font-size: 14px;
  position: relative;
}

.Header-right i {
  display: block;
  position: absolute;
  right: 0px;
  top: 0px;
  color: $ColorFFF;
  font-size: 15px;
}

// 动画效果
.fade-enter-active, .fade-leave-active {
  transition: transform 0.4s;
}

.fade-enter, .fade-leave-to {
  transform: translate3d(-100%, 0, 0);
}
.search-box {
  display flex
  height 32px
  line-height 32px
  justify-content space-between
  padding 0 12px
  font-size 14px
  color $bgColor
  background-color #f0f5f6
}
.search-box-l {

}
.search-box-r i {
  padding-right 5px
  transform: rotate(0deg)
  display: inline-block
  transition: .3s
}
.search-footer-l ul {
  display flex
  justify-content space-between
  flex-wrap wrap

}
.search-footer-list {
  padding 0 10px
  width 33.33%
  line-height 28px
}
</style>
