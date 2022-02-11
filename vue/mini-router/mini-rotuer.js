import { ref, inject } from 'vue'
import RouterLink from './RouteLink.vue'
import RouterView from './RouterView.vue'

const ROUTER_KEY = '__router__'

// TODO 懒加载

// TODO 正则匹配

class Router {
  constructor(options) {
    this.history = options.history
    this.routers = options.routers
    this.current = ref(this.history.url)

    // 调用 createRouter 往 history 注入的事件
    this.history.bindEvents(() => {
      this.current.value = window.location.hash.slice(1)
    })
  }

  install(app) {
    app.provide(ROUTER_KEY, this)

    // 注入全局组件
    app.component('router-link', RouterLink)
    app.component('router-view', RouterView)
  }
}


function useRouter() {
  return inject(ROUTER_KEY)
}

function createRouter() {
  return new Router(options)
}

// 创建一个hash记录
function createWebHashHistory() {
  function bindEvents(fn) {
    window.addEventListener('hashchange', fn)
  }

  return {
    bindEvents,
    url: window.location.hash.slice(1) || '/'
  }
}

export { createRouter, createWebHashHistory, useRouter }