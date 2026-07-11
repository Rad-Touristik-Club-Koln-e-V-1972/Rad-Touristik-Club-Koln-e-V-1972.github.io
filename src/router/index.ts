import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory
} from "vue-router";
import { routes, handleHotUpdate } from "vue-router/auto-routes";
import { defineRouter } from "#q-app";
import useCalendarStore from "@/stores/events/Calendar";

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default defineRouter((/* { store, ssrContext } */) => {
  const createWebHistoryHelper = () =>
    import.meta.env.QUASAR_VUE_ROUTER_MODE === "history"
      ? createWebHistory
      : createWebHashHistory;
  const createHistory = import.meta.env.QUASAR_SERVER
    ? createMemoryHistory
    : createWebHistoryHelper();

  const isNextRTFSoon = useCalendarStore().isNextRtfInDays(30);

  const router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(import.meta.env.QUASAR_VUE_ROUTER_BASE)
  });

  router.onError(error => {
    console.error("Router Error caught:", error);
    return { path: "/error500" };
  });

  router.beforeEach(async (to, from) => {
    if (!from.name && to.name === "home" && isNextRTFSoon) {
      return { path: "/events/tours/rtfs" };
    }
  });

  // enable HMR for it
  if (import.meta.hot) {
    handleHotUpdate(router);
  }

  return router;
});
