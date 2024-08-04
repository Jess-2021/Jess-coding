/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

// 子串 ➡️ 连续
var lengthOfLongestSubstring = function(s) {
    let window = new Set(), left = 0, res = 0

    for(let right = 0; right < s.length; right++) {
        const cur = s[right]
        while (window.has(cur)) {
            window.delete(s[left++])
        }

        window.add(cur)
        res = Math.max(res, right - left + 1)
    }

    return res
}


console.log(lengthOfLongestSubstring(" "))
// @lc code=end

