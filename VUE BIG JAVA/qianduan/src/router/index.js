import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: ()=>import("@/views/login/login")
    },
    {
      path: '/xingxi',
      name: 'xingxi',
      component: ()=>import("@/views/xingxi/index")
    },
    {
      path: '/tianxiang',
      name: 'tianxiang',
      component: ()=>import("@/views/tianxiang/index")
    }
  ]
})
