/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 * 
 * 2
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

  var findContentChildren = function(g, s) {
    let res = 0
    g.sort((a,b) => a-b)
    s.sort((a,b) => a-b)
    while(s.length && g.length) {
      if (g[0] <= s[0]) {
        res++
        g.shift()
        s.shift()
      } else {
        s.shift()
      }
    }

    return res
  }

  var findContentChildren = function(g, s) {
    let res = i = j = 0
    g.sort((a, b) => a-b)
    s.sort((a, b) => a-b)
    while(i < g.length && j < s.length) {
      if (g[i] <= s[i]) {
        res++
        s++
      }
    }

    return res
  }

  // 最好用index来解决
    // @lc code=end

