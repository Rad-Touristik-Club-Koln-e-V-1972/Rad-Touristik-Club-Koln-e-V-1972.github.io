import { defineRouter } from '#q-app/wrappers'
import { createMemoryHistory, createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import useCalendarStore from 'stores/events/Calendar'

import routes from './routes'

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default defineRouter(function (/* { store, ssrContext } */) {
  const webHistory = process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory
  const history = process.env.SERVER ? createMemoryHistory : webHistory
  const isNextRTFSoon = useCalendarStore().isNextRtfInDays(30)

  const router = createRouter({
    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: history(),
    routes,
    scrollBehavior: () => ({ left: 0, top: 0 }),
  })

  router.beforeEach((to, from) => {
    return !from.name && to.name === 'home' && isNextRTFSoon ? { name: 'events-tours-rtfs' } : true
  })

  return router
})
