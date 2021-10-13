/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 * 
 * 1
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
  var findContentChildren = function(g, s) {
    let res = 0
    g = g.sort((a, b) => a - b)
    s = s.sort((a, b) => a - b)
    let i = 0, j = 0
    while(i < g.length && j < s.length) {
      if (g[i] <= s[j++]) {
        res++
        i++
      }
    }

    return res
  };
// @lc code=end

