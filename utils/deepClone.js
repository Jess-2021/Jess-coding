// 浅拷贝：属性是基本类型，拷贝就是基本类型的值，如是引用类型就是拷贝内存地址
// 深拷贝：从堆内存开辟一个新区域存放。


function isObject(target) {
  const type = typeof target
  return target !== null && (type === 'object' || type === 'function')
}

function getInit(target) {
  const C = target.constructor
  return C
}

function cloneOtherType(targe, type) {
  const Ctor = targe.constructor;
  switch (type) {
      case boolTag:
      case numberTag:
      case stringTag:
      case errorTag:
      case dateTag:
          return new Ctor(targe);
      default:
          return null;
  }
}


function deepClone(target, map = new WeakMap()) { // 4. weakMap 垃圾回收
   // 0. 基本类型 || 0
  if (!isObject(target)) {
    return target
  }
  const C = getInit(target)
  let res;
  const mapRes = map.get(target) // 3. 考虑循环引用
  if (mapRes) {
    return mapRes
  }
  map.set(target, res)

  const type = Object.prototype.toString.call(target)
  if (type === '[object RegExp]') { // 5. 考虑正则
    const reFlags = /\w*$/;
    res = C(target.source, reFlags.exec(target))
    res.lastIndex = target.lastIndex

  } else if (type === '[object Symbol]') { // 6. 考虑symbol
    res = Object(Symbol.prototype.valueOf.call(target))

  } else if (type === '[object Map]') { // 7. 考虑map，注意递归
    res = new C();
    target.forEach((value, key) => {
      res.set(key, clone(value, map)) // map 循环引用
    })
  } else if (type === '[object Set]') { // 8. 考虑set，注意递归
    res = new C();
    target.forEach(value => {
      res.add(clone(value, map))
    })
  } else if (type === '[object Object]' || type === '[object Array]') {
    // 克隆对象或者数组
    res = new C();
    for(let i in target) {
      res[i] = deepClone(target[i]) // 1. 不清楚有多少层级
    }
  } else {
    res = cloneOtherType(target, C)
  }

  return res
}

const target = {
  field1: 1,
  field2: undefined,
  field3: {
      child: 'child'
  },
  field4: [2, 4, 8],
  empty: null,
  map: new Map(),
  set: new Set(),
};

console.log(deepClone(target))

// 支持数组
