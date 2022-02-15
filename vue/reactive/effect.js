const targetMap = new WeakMap() // 没用的依赖会直接被GC从而用weakMap

function track(target, type, key) {
  let depsMap = targetMap.get(target)
  if (!depsMap) {
    // 如果是第一次的话，那么就需要初始化
    targetMap.set(target, (depsMap = new Map()))
  }

  let deps = depsMap.get(key)
  if (!deps) {
    deps = new Set()
  }

  // 防止重复注册
  if (!deps.has(activeEffect) && activeEffect) {
    deps.add(activeEffect)
  }

  depsMap.set(key, deps)
}

// 根据 target 和 key 找到对应的依赖函数集合 deps，然后遍历 deps 执行依赖函数。
function trigger(target, type, key) {
  const depsMap = targetMap.get(target)
  // 没找到依赖
  if (!depsMap) return
  const deps = depsMap.get(key)
  if (!deps) return

  deps.forEach(effectFn => {
    // 对依赖的执行时机进行控制
    if (effectFn.scheduler) {
      effectFn.scheduler()
    } else {
      effectFn()
    }
  });
}

// dependsMap 中存储的也不是直接存储 effect 中传递的函数，而是包装了一层对象对这个函数的执行实际进行管理，内部可以通过 active 管理执行状态，还可以通过全局变量 shouldTrack 控制监听状态，并且执行的方式也是判断 scheduler 和 run 方法，实现了对性能的提升。

// 返回包装过后的fn
function effect(fn, options = {}) {
  // effect 嵌套， 通过队列管理
  const effectFn = () => {
    try {
      // fn 执行的时候，内部读取响应式数据，就能在 get 里读取到 activeEffect
      // 并将 activeEffect 收集到依赖
      activeEffect = effectFn
      return fn()
    } finally {
      activeEffect = null
    }
  }

  // 没有 lazy 直接执行
  if (!options.lazy) {
    effectFn()
  }

  // 调度时机，watchEffect 会调用
  effectFn.scheduler = options.scheduler

  return effectFn
}

export { track, trigger }