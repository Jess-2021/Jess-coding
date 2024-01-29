/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false
    let k = String(x), i = 0, j = k.length - 1
    while(i < j) {
        if (k[i] === k[j]) {
            i++;
            j--
        } else {
            return false
        }
    }

    return true
};
// @lc code=end


console.log(isPalindrome(10))


