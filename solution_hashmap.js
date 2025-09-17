// Time Complexity: O(n)
// Space Complexity: O(n)

function majorityElement(nums) {
  let hashmap = {};

  for (let num of nums) {
    if (num in hashmap) {
      hashmap[num] += 1;
    } else {
      hashmap[num] = 1;
    }
  }

  for (let i in hashmap) {
    if (hashmap[i] > nums.length / 2) {
      return i;
    }
  }

  return -1;
}

console.log(majorityElement([3, 2, 3])); // 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2
console.log(majorityElement([3, 5, 5, 4, 5])); // 5
console.log(majorityElement([3, 5, 4, 5])); // -1
