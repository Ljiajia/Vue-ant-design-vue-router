import Vue from 'vue'
import Router from 'vue-router'  
import one from '../views/one'
import two from '../views/two'
import three from '../views/three'
import four from "../views/four"
import Five from "../views/five"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // redirect: '/one',
      name:'人才储备',
      type:"user",
      component:one,  
    },
    {
      path:'/two', 
      name:'垃圾分类',
      type:"user",
      component:two, 
      children:[
        {
          path:'/two/zhengshuang',
          name:'郑爽',
          type:'home',
          component:four, 
        },
        {
          path:'/two/leijia',
          name:'佳佳',
          type:'home',
          component:Five, 
        }
      ]
    },
    {
      path:'/three',
      name:'美食', 
      type:"upload",
      component:three, 
    }
  ]
})
