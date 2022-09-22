/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let i = 0, subsL = 0, sum = 0, res = nums.length + 1
  for (let j = 0; j <= nums.length; j++) {
    sum += nums[j]
    while (sum >= target) {
      subsL = (j - i + 1)
      res = Math.min(subsL, res)
      sum = sum - nums[i]
      i++
    }
  }
  return res > nums.length ? 0 : res
};
// @lc code=end

