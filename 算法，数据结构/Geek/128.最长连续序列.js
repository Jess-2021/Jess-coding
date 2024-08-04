/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let res = 0, mainSet = new Set(nums)

    for(const item of mainSet) {
        // 如果有后续
        if (!mainSet.has(item + 1)) {
            let tmp = 1, tmpItem = item
            while(mainSet.has(tmpItem - 1)) {
                tmpItem -= 1
                tmp += 1
            }
            res = Math.max(res, tmp)
        }
    }

    return res
}

console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]))
// @lc code=end

