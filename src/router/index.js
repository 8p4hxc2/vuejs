import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Hello2 from '@/components/Hello2'

Vue.use(Router)

const router = new Router({
  routes: [{
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/haha',
      name: 'Hello2',
      component: Hello2
    }
  ]
})

router.beforeEach(function(to, from, next) {
  if (to.path === '/forbidden') {
    next('/haha')
  } else {
    next()
  }
})

export default router;
