import { track, trigger, effect } from "./effect"

/**
 * 
 * @param {*} getterOrOptions getterOrOptions可以是函数，也可以是一个对象，支持get和set
 */
function computed(getterOrOptions) {
  let getter, setter
  if (typeof getterOrOptions === 'function') {
    getter = getterOrOptions
    setter = () => {} // 计算属性不能修改
  } else {
    getter = getterOrOptions.get
    setter = getterOrOptions.set
  }

  return new ComputedRefImpl(getter, setter)
}

class ComputedRefImpl {
  constructor(getter, setter) {
    this._setter = setter
    this._val = undefined
    this._dirty = true

    // computed就是一个特殊的effect，设置lazy和执行时机，就是 computed 为何能做懒更新的原因
    this.effect = effect(getter, {
      lazy: true,
      scheduler: () => {
        if (!this._dirty) {
          this._dirty = true
          trigger(this, 'value')
        }
      }
    })
  }

  get value() {
    track(this, 'value')
    if (this._dirty) {
      this._dirty = false
      this._val = this.effect()
    }

    return this._val
  }

  set value(val) {
    this._setter(val)
  }
}

export { computed }
