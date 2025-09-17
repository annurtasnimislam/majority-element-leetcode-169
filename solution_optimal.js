// Time Complexity: O(n)
// Space Complexity: O(1)

function majorityElement(nums) {
  let count = 0;
  let elem;

  for (let i in nums) {
    if (count === 0) {
      count++;
      elem = nums[i];
    } else if (elem === nums[i]) {
      count++;
    } else count--;
  }

  let counter = 0;
  for (let i in nums) {
    if (nums[i] === elem) {
      counter++;
    }

    if (counter > nums.length / 2) {
      return nums[i];
    }
  }

  return -1;
}

console.log(majorityElement([3, 2, 3])); // 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2
console.log(majorityElement([3, 5, 5, 4, 5])); // 5
console.log(majorityElement([3, 5, 4, 5])); // -1
