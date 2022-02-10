import { inject, reactive } from 'vue'

const STORE_KEY = '__store__'

function useStore() { return inject(STORE_KEY) }

function createStore(options) { return new Store(options) }

class Store {
  constructor(options) {
    this.$options = options
    this._state = reactive({
      data: options.state() // 只后访问 state 直接访问 this._state.data 即可
    })
    this._mutations = options._mutations
    this._actions = options.actions
    this.getters = {}

    Object.keys(options.getters).forEach(name => {
      const fn = options.getters[name]
      this.getters[name] = computed(() => fn(this.state))
    })
  }

  get state() { return this._state.data }

  /**
   * 触发 mutation
   * @param {*} type this.mutation[key]
   * @param {*} payload 传递给 mutation 的data组合体
   */
  commit(type, payload) {
    const mutation = this._mutations[type]
    mutation && mutation(this.state, payload)
  }

  dispatch(type, payload) {
    const action = this._actions[type]
    return action && action(this, payload) // 第一个参数是 一整个实例
  }

  // 给 app.use 调用
  install(app) {
    app.provide(STORE_KEY, this)
  }
}

export { useStore, createStore }