// Time Complexity: O(n*2)
// Space Complexity: O(1)

function majorityElement(nums) {
  let counter = 1;
  let i, j;

  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        counter++;
      }
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
