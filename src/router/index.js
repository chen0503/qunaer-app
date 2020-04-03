import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Browseheader from '@/pages/browse/components/Browseheader'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/city',
    name: 'City',
    component: City
  },
  {
    path: '/Browseheader',
    name: 'Browseheader',
    component: Browseheader
  }],
  // 下为页面点击到头部
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
