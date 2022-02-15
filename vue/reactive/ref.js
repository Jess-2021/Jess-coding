import { trigger, track } from "./effect"

function ref(val) {
  if (isRef(val)) return val

  return new RefImpl(val)
}

function isRef(val) {
  return !!(val && val.__isRef)
}

class RefImpl {
  constructor(val) {
    this.__isRef = true
    this._val = convert(val)
  }
  get value() {
    track(this, 'value')

    return this._val
  }

  set value() {
    if (val !== this._val) {
      this._val = convert(val)
      trigger(this, 'value')
    }
  }
}

// ref 也可以包裹复杂的数据结构，内部会直接调用 reactive 来实现
function convert(val) {
  return isObject(val) ? reactive(val) : val
}

export { ref, isRef}