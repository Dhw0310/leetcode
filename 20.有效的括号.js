/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let length = s.length
    if(length % 2 === 1) return false
    const map = new Map()
    map.set(']', '[')
    map.set('}', '{')
    map.set(')', '(')
    let stock = []
    for(i of s) {
        if(!map.has(i)) {
            stock.push(i)
        } else {
            let str = stock.pop()
            if(map.get(i) !== str) {
                return false
            }
        }
    }
    return stock.length === 0
};
// @lc code=end

