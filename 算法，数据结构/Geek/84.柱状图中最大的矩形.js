/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 * 
 * 3
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var largestRectangleArea = function(arr) {
  let res = 0
  for(let i=0; i < arr.length; i++) {
    let leftIndex = i
    let rightIndex = i
    while (leftIndex >= 0 && arr[leftIndex] >= arr[i]) {
      leftIndex--
    }
    while (rightIndex < arr.length && arr[rightIndex] >= arr[i]) {
      rightIndex++
    }
    let minRes = (rightIndex - leftIndex - 1) * arr[i]
    res = Math.max(minRes, res)
  }
  return res
};

var singleStack = function(arr) {
  let res = 0
  let stack = [-1]
  for(let i = 0; i < arr.length; i++) {
    // 当没有元素或者遍历元素小于stack最后一个元素时
    while(arr[stack[stack.length - 1]] >= arr[i] && stack.length > 1) {
      res = Math.max(res, arr[stack.pop()] * (i - stack[stack.length - 1] - 1))
    }
    stack.push(i)
  }
  while(stack.length > 1) {
    res = Math.max(res, arr[stack.pop()] * (arr.length - stack[stack.length - 1] - 1))
  }
  return res
}

function singleStack2(arr) {
  let res = 0
  let stack = [-1]
  for(let i = 0; i < arr.length; i++) {
    while(arr[stack[stack.length - 1]] >= arr[i] && stack.length > 1) {
      res = Math.max(res, arr[stack.pop()] * (i - stack[stack.length - 1] - 1))
    }
    stack.push(i)
  }
  while(stack.length > 1) {
    res = Math.max(res, arr[stack.pop()] * (arr.length - stack[stack.length - 1] - 1))
  }
  return res
}

var largestRectangleArea = function(arr) {
  let res = 0
  for(let i = 0; i < arr.length; i++) {
    let left = i, right = i
    while(arr[left] >= arr[i] && left > 0) left--
    while(arr[right] >= arr[i] && right < arr.length) right++

    res = Math.max(res, (right - left - 1) * arr[i])
  }
  return res
}

function largestRectangleArea(arr) {
  let res = 0
  let singleStack = [-1]
  for(let i = 0; i < arr.length; i++) {
    while(arr[singleStack.at(-1)] >= arr[i] && singleStack.length > 1) {
      res = Math.max(res, (arr[singleStack.pop()] * (i - singleStack.at(-1) - 1)))
    }
    stack.push(i)
  }

  while(stack.length > 1) {
    res = Math.max(res, arr[singleStack.pop()] * (arr.length - stack[stack.length - 1] - 1))
  }

  return res
}

var res = largestRectangleArea([2,1,5,6,2,3])
console.log(res)
// @lc code=end

