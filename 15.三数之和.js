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
var threeSum = function (nums) {
  // 找到 a b c
  // 无序的数组里，查找目标和大小相关，就可以看下是否可以利用排序降低复杂度
  // 排序 n * lgn
  // 最小+最大，如果比目标值大，说明我们要缩小这个最大值，最大值左移动，否则，最小右移
  // [1,2,3,4,6,5,7,8]
  if (nums.length < 3) {
    return []
  }
  let list = []
  nums.sort((a, b) => a - b) // n*lgn
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      continue
    }
    // 以num[i]为基准，找另外两个数组 数组之和 -num[i]
    let left = i + 1
    let right = nums.length - 1
    while (left < right) {
      if (right === i) {
        right-- // 越过num[i]
      } else if (nums[left] + nums[right] + nums[i] === 0) {
        // 命中
        list.push([nums[left], nums[right], nums[i]])
        // 继续找
        while (nums[left] === nums[left + 1]) {
          // 由于排序了，相等的都在一起
          left++
        }
        left++
        while (nums[right] === nums[right - 1]) {
          right--
        }
        right--
      } else if (nums[left] + nums[right] + nums[i] > 0) {
        // 数字太大了
        right--
      } else {
        // 数字太小了
        left++
      }

    }
  }
  return list
};
// @lc code=end