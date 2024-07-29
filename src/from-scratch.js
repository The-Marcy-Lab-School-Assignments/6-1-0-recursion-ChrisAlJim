// Recursion Problem Set: Coding Exercises

// Calculate and return the total sum using recursive approach
const sum = (arr, total = 0, idx = 0) => {
  if (idx === arr.length) return total
  return sum(arr, total + arr[idx], idx + 1)
}

// Reverse string using recursive approach
const reverse = (str, revStr = "", idx = str.length - 1) => {
  if (idx === -1) return revStr
  return reverse(str, revStr + str[idx], idx - 1)
};

// Iterative approach to solving the fibonacci problem
const fibIter = (n) => {
  if (n === 0) return 0
  if (n === 1) return 1
  const fibArr = [0, 1]
  for (let i = 1; i < n; i ++) {
    const nextNum = (fibArr[i-1] + fibArr[i])
    fibArr.push(nextNum)
  }
  return fibArr.pop()
};

// Recursive fibonacci
const fibRec = (n, fibArr = [0,1], idx = 0) => {
  if (idx === n) return fibArr[idx]
  fibArr.push(fibArr[idx] + fibArr[idx+1])
  return fibRec(n, fibArr, idx + 1)
};

// Return the index of target in arr, or -1 if not found using recursion 
const binarySearch = (arr, target, start = 0, end = arr.length - 1) => { // binarySearch only works for an array already sorted
  if (start > end) return -1 // guard clause for if the target is not found in arr

  const middle = Math.floor((start + end) / 2) // middle index

  if(arr[middle] === target) { // if middle index of arr is equal to target return middle index
    return middle
  }

  if (arr[middle] > target) { // if the middle is greater than target
    return binarySearch(arr, target, start, middle - 1)// return the function with the end param now being the middle
  }

  if (arr[middle] < target) { // if the middle is less then target
    return binarySearch(arr, target, middle + 1, end) // return the function with the start param now being the middle
  }
};

//☝️🤓

module.exports = { sum, reverse, fibRec, fibIter, binarySearch };
