/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

// ❌
var isMatch = function(s, p) {
    // 从后往前匹配
    // 如果遇到没有匹配到的，则返回false，否则继续
    // 如果是*则往前再找一位，如果是.则匹配任何元素

    // let x = s, y = p, tmpP = ''
    // while(y) {
    //     const current = y.slice(-1), currentX = x.slice(-1)
    //     y = y.slice(0, -1)
    //     if (tmpP) {
    //         if (current === '.') return true
    //         if (current === '*') continue
    //         while(x.slice(-1) === currentX) {
    //             x = x.slice(0, -1)
    //         }
    //         tmpP = ''
    //     } else if (current === '*') {
    //         tmpP = '*'
    //     } else if (current === '.') {
    //         x = x.slice(0, -1)
    //     } else {
    //         if (currentX === current) {
    //             x = x.slice(0, -1)
    //         } else {
    //             return false
    //         }
    //     }

    // }

    return !x.length
};
// @lc code=end


console.log(isMatch('ab', 'a'))