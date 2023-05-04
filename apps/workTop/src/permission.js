import router from './router'
import {progressClose, progressStart } from './hooks/use-permission'
import { useUserStoreHook } from './store/modules/basic'
import { langTitle } from './hooks/use-common'

//路由进入前拦截
//to:将要进入的页面 vue-router4.0 不推荐使用next()
const whiteList = ['/login', '/404', '/401'] // no redirect whitelist
router.beforeEach(async (to) => {
  progressStart()
  document.title = langTitle(to.meta?.title) // i18 page title
  const basicStore = useUserStoreHook()
  //1.判断token
  if (basicStore.token) {
    if (to.path === '/login') {
      return '/'
    } else {
      basicStore.setFilterAsyncRoutes([])
      return true
    }
  } else {
    if (!whiteList.includes(to.path)) {
      return `/login?redirect=${to.path}`
    } else {
      return true
    }
  }
})
//路由进入后拦截
router.afterEach(() => {
  progressClose()
})
