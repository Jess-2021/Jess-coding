import { trigger, track } from "./effect"

const mutableHandlers = {
  get: (target, key, receiver) => {
    const res = Reflect.get(target, key, receiver) // 同 target[key]
    // 收集依赖函数
    track(target, "get", key)
    if (isObject(res)) {
      // 当值是对象的化，需要嵌套调用reactive

      return shallow ? res : reactive(res)
    }

    return res
  },
  set: (target, key, value, receiver) => {
    const result = Reflect.set(target, key, value, receiver)
    // 触发依赖
    trigger(target, 'set', key)

    return result
  }
}

function reactive(target) {
  if (typeof target !== 'object') {
    console.warm(`reactive 监听的 ${target} 必须是一个对象`)
    return target
  }

  return new Proxy(target, mutableHandlers)
}



export { reactive }