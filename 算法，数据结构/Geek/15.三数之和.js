/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function(nums) {
	let res = []
	if (!nums || nums.length < 3) return res
	nums.sort((a, b) => a-b)
	for(let i = 0; i < nums.length - 1; i++) {
		if (i > 0 && nums[i] === nums[i - 1]) continue
		for(let j = i + 1, k = nums.length - 1; j < k;) {
			let sum = nums[i] + nums[j] + nums[k]
			if (sum === 0) {
				res.push([nums[i], nums[j], nums[k]])
				while(nums[k] === nums[k-1]) k--;
				j++;
				k--;
			}
			else if (sum > 0) k--;
			else if (sum < 0) j++;
		}
	}
	return res
}

function threeSum(nums) {
  let res = []
	if (!nums || nums.length < 3) return res
	nums.sort((a,b) => a - b)
	for(let i = 0; i < nums.length - 1; i++) {
		if (i > 0 && nums[i] === nums[i - 1]) continue
		for(let x = i + 1, y = nums.length - 1; x < y;) {
			let sum = nums[i] + nums[x] + nums[y]
			if (!sum) {
				res.push(nums[x], nums[i], nums[y])
				while(nums[y] === nums[y - 1]) y--
				y--
				x++
			}
			else if (sum < 0) x++
			else if (sum > 0) y--
		}
	}

	return res
}

// 1. 排序后跳过相同的数：while(nums[k] === nums[k-1]) k--;

console.log(threeSum([-2, 0, 3, -1, 4, 0, 3, 4, 1, 1, 1, -3, -5, 4, 0]));
// console.log(threeSum3([-4, -1, -1, 2, 5, 5, 5]));
// @lc code=end
//# sourceMappingURL=15.三数之和.js.map