const titleToNumber = (columnTitle: string): number => {
  let result = 0;
  let length = columnTitle.length;

  for (let i = 0; i < length; i++) {
    result += (columnTitle.charCodeAt(i) - 64) * Math.pow(26, length - (i + 1));
  }

  return result;
};

console.log(titleToNumber("AB"));

const singleNumber = (nums: number[]): number => {
  let result = 0;
  for (let num of nums) {
    result ^= num;
  }
  return result;
};

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
console.log(singleNumber([1]));

const isAnagram = (s: string, t: string): boolean => {
  if (s.length !== t.length) return false;
  return s.split('').sort().join('') === t.split('').sort().join('');
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));

const climbStairs = (n: number): number => {
  if (n <= 2) return n;
  let first = 1, second = 2;
  for (let i = 3; i <= n; i++) {
    let third = first + second;
    first = second;
    second = third;
  }
  return second;
};

console.log(climbStairs(2));
console.log(climbStairs(3));
