//Q) 1. Check if two strings are anagrams of each other
function isAnagram(str1, str2) {
    // If the lengths of the strings are not equal, they cannot be anagrams
    if (str1.length !== str2.length) {
      return false;
    }
    // Sort the characters of both strings and compare them for equality
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');
    return sortedStr1 === sortedStr2;
  }
  console.log("OUTPUT:1-");
  console.log(isAnagram("acts", "cats")); // true
  
  // Q)2. Calculate the total amount spent in each category of transactions
  function calculateTotalSpentByCategory(transactions) {
    const categoryTotals = {}; // Initialize an object to keep track of category totals
    for (const transaction of transactions) {
      const { category, price } = transaction;
      if (!categoryTotals[category]) {
        categoryTotals[category] = 0;
      }
      categoryTotals[category] += price;
    }
    // Return an array of objects, where each object represents a category and its total amount spent
    return Object.entries(categoryTotals).map(([category, total]) => ({ category, total }));
  }
  const transactions = [
    { category: 'Food', price: 10 },
    { category: 'Food', price: 20 },
    { category: 'Transportation', price: 30 },
    { category: 'Entertainment', price: 40 },
    { category: 'Food', price: 50 },
  ];
  const result = calculateTotalSpentByCategory(transactions);
  console.log("OUTPUT:2-");
  console.log(result); // [{ category: 'Food', total: 80 }, { category: 'Transportation', total: 30 }, { category: 'Entertainment', total: 40 }]
  
  // Q)3. Find the largest element in an array of numbers
  function findLargestElement(numbers) {
    let largest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > largest) {
        largest = numbers[i];
      }
    }
    return largest;
  }
  const numbers = [3, 1, 4, 10, 2, 6];
  console.log("OUTPUT:3-");
  console.log(findLargestElement(numbers)); // 10
  
  // Q)4. Check if a string is a palindrome
  function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  }
  console.log("OUTPUT:4-");
  console.log(isPalindrome("cat")); // false
  
  // Q)5. Calculate the time it takes to sum the numbers from 1 to n
  function calculateTime(n) {
    const startTime = performance.now();
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    const endTime = performance.now();
    return endTime - startTime;
  }
  console.log("OUTPUT:5-");
  console.log(calculateTime(1000)); // time in milliseconds
  
  //Q) 6. Count the number of vowels in a string
  function countVowels(str) {
    const vowels = 'aeiou';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i].toLowerCase())) {
        count++;
      }
    }
    return count;
  }
  console.log("OUTPUT:6-");
  console.log(countVowels("Hello World")); // 3
  
  // Q)7. Sum the elements of an array of numbers
  function sumArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  }
  const num = [1, 2, 3, 4, 5];
  console.log("OUTPUT:7-");
  console.log(sumArray(num)); // 15
  
  // Q)8. Filter the even numbers from an array of numbers
  function filterEvenNumbers(numbers) {
    const evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        evenNumbers.push(numbers[i]);
      }
    }
    return evenNumbers;
  }
  const even = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log("OUTPUT:8-");
  console.log(filterEvenNumbers(even)); // [2, 4, 6, 8, 10]
  
// Q)9. Find the smallest element in an array of numbers
function findSmallestElement(numbers) {
    let smallest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] < smallest) {
        smallest = numbers[i];
      }
    }
    return smallest;
  }
  console.log("OUTPUT:9-");
  console.log(findSmallestElement([5, 2, 9, 6, 3, 1])); // 1
  
  // Q)10. Reverse a string
  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  console.log("OUTPUT:10-");
  console.log(reverseString("Hello World")); // "dlroW olleH"
  
  // Q)11. Calculate the nth number in the Fibonacci sequence
  function fibonacci(n) {
    if (n <= 1) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  console.log("OUTPUT:11-");
  console.log(fibonacci(10)); // 55
  
  // Q)12. Remove duplicates from an array
  function removeDuplicates(arr) {
    return [...new Set(arr)];
  }
  console.log("OUTPUT:12-");
  console.log(removeDuplicates([1, 2, 2, 3, 4, 3, 5])); // [1, 2, 3, 4, 5]
  
  // Q)13. Count the number of occurrences of a character in a string
  function countOccurrences(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === char) {
        count++;
      }
    }
    return count;
  }
  console.log("OUTPUT:13-");
  console.log(countOccurrences("Hello World", "l")); // 3
  
  // Q)14. Find the common elements between two arrays
  function findCommonElements(arr1, arr2) {
    let commonElements = [];
    for (let i = 0; i < arr1.length; i++) {
      if (arr2.includes(arr1[i])) {
        commonElements.push(arr1[i]);
      }
    }
    return commonElements;
  }
  console.log("OUTPUT:14-");
  console.log(findCommonElements([1, 2, 3, 4, 5], [1, 2, 6, 7, 5])); // [1, 2, 5]
  
  // Q)15. Sort an array of strings in alphabetical order
  function sortStrings(arr) {
    return arr.sort();
  }
  console.log("OUTPUT:15-");
  console.log(sortStrings(["dog", "cat", "apple", "banana"])); // ["apple", "banana", "cat", "dog"]
