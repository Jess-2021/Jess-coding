import { createRouter, createWebHashHistory } from "./mini-rotuer";

const router = createRouter({
  history: createWebHashHistory(),
  routes // 静态路由列表
})

app.use(router)