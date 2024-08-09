/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存
 */

// 双向链表
class Node {
    constructor(key = 0, value = 0) {
        this.key = key
        this.value = value
        this.prev = null
        this.next = null
    }
}

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    // 需要顺序插入数据，用线性数据结构
    // 插入后，需要把旧的移动到后面，链表
    // 查询数据 hash表
    this.capacity = capacity
    this.dummy = new Node()
    this.dummy.prev = this.dummy
    this.dummy.next = this.dummy
    this.cache = new Map()
};

LRUCache.prototype.getNode = function(key) {
    // 获取元素，并移动到最前
    if (!this.cache.has(key)) {
        return null
    }
    const node = this.cache.get(key)
    this.remove(node)
    this.pushFront(node)

    return node
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    const node = this.getNode(key)
    return node ? node.value : -1
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    let node = this.getNode(key)
    if (node) {
        node.value = value // 更新值
        return
    }

    node = new Node(key, value)
    this.cache.set(key, value)
    this.pushFront(node)

    if (this.cache.size > this.capacity) {
        const least = this.dummy.prev
        this.remove(least)
        this.cache.delete(least.key)
    }
};

LRUCache.prototype.remove = function(x) {
    this.next.prev = x.prev
    this.prev.next = x.next
};

LRUCache.prototype.pushFront = function(x) {
    x.prev = this.dummy
    x.next = this.dummy.next
    x.prev.next = x
    x.next.prev = x
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

