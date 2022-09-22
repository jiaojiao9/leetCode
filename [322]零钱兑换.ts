//给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。
//
// 计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。
//
// 你可以认为每种硬币的数量是无限的。
//
//
//
// 示例 1：
//
//
//输入：coins = [1, 2, 5], amount = 11
//输出：3
//解释：11 = 5 + 5 + 1
//
// 示例 2：
//
//
//输入：coins = [2], amount = 3
//输出：-1
//
// 示例 3：
//
//
//输入：coins = [1], amount = 0
//输出：0
//
//
//
//
// 提示：
//
//
// 1 <= coins.length <= 12
// 1 <= coins[i] <= 2³¹ - 1
// 0 <= amount <= 10⁴
//
//
// Related Topics 广度优先搜索 数组 动态规划 👍 2133 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
function coinChange(coins: number[], amount: number): number {
    if (!amount) {
        return 0;
    }
    let dp:any[] = Array(amount + 1).fill(Infinity);
    console.log(dp, '111')
    dp[0] = 0;
    // 循环所有钱
    for (let i = 0; i < coins.length; i++) { // [1, 2, 5]
        // coins[i] 1
        for (let j = coins[i]; j <= amount; j++) {
            console.log(dp[j], '22222')
            dp[j] = Math.min(dp[j - coins[i]] + 1, dp[j]);
            console.log(dp, '333333')
        }
    }
    console.log(dp)
    return dp[amount] === Infinity ? -1 : dp[amount];
}
console.log(coinChange([1, 2, 5], 11));
