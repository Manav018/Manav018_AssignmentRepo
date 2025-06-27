

"- **Student Name**: ruchit\n- **Grade Level**: Algebra 1\n- **Goal Subject**: Math\n- **Topic**: The student applies the mathematical process standards when using graphs of quadratic functions and their related transformations to represent in multiple ways and determine, with and without technology, the solutions to equations.\n- **Goal Standard**: Determine the effects on the graph of the parent function f(x) = x2 when f(x) is replaced by af(x), f(x) + d, f(x - c), f(bx) for specific values of a, b, c, and d. (TEKS Math Standard A.7C)\n- **State Standard**: TEKS Math Standard A.7C\n\n#### IEP Goal:\nBy the end of the academic year, [STUDENT] will determine the effects on the graph of the parent function f(x) = x2 when f(x) is replaced by af(x), f(x) + d, f(x - c), f(bx) for specific values of a, b, c, and d with 80% accuracy in 4 out of 5 trials, promoting independence and skill mastery.\n\n#### Quarterly Benchmarks:\n**Benchmark 1**:\n[STUDENT] will identify the effect on the graph of f(x) = x2 when f(x) is replaced by f(x) + d for specific values of d with 70% accuracy in 3 out of 4 trials.\n- **Activities to Measure Progress**:\n- Activities: Provide worksheets with various quadratic functions in the form f(x) + d, where d is a constant. [STUDENT] will graph these functions and describe the vertical translation compared to the parent function f(x) = x2.\n\n**Benchmark 2**:\n[STUDENT] will identify the effect on the graph of f(x) = x2 when f(x) is replaced by f(x - c) for specific values of c with 70% accuracy in 3 out of 4 trials.\n- **Activities to Measure Progress**:\n- Activities: Use graphing software to demonstrate the horizontal translation of f(x) = x2 when replaced by f(x - c). [STUDENT] will predict the translation and verify using the software.\n\n**Benchmark 3**:\n[STUDENT] will identify the effect on the graph of f(x) = x2 when f(x) is replaced by af(x) for specific values of a with 75% accuracy in 4 out of 5 trials.\n- **Activities to Measure Progress**:\n- Activities: Present [STUDENT] with a series of quadratic functions in the form af(x), where a is a constant. [STUDENT] will describe how the graph stretches or compresses vertically compared to the parent function.\n\n**Benchmark 4**:\n[STUDENT] will determine the effects on the graph of the parent function f(x) = x2 when f(x) is replaced by af(x), f(x) + d, f(x - c), f(bx) for specific values of a, b, c, and d with 80% accuracy in 4 out of 5 trials.\n- **Activities to Measure Progress**:\n- Activities: [STUDENT] will complete a comprehensive review worksheet that includes transformations of quadratic functions in the forms af(x), f(x) + d, f(x - c), and f(bx). [STUDENT] will graph these functions and describe the transformations.\n\nThese benchmarks ensure steady progress toward the IEP goal by breaking down the complex task into manageable steps, each focusing on a specific type of transformation. Progress will be monitored through observation, documentation of worksheet performance, and specific criteria for each activity, ensuring [STUDENT] achieves the goal of determining the effects on the graph of quadratic functions with accuracy and confidence."
# JavaScript Assignment

## How to Run the Code

1. Save the provided JavaScript file named `assignment.js`.
2. Include this file in your HTML or Node.js environment to run the functions.

## Function Descriptions

1. `isAnagram(str1, str2)`: Checks if `str1` and `str2` are anagrams.
2. `calculateTotalSpentByCategory(transactions)`: Returns total spending by category.
3. `findLargestElement(numbers)`: Returns the largest number in an array.
4. `isPalindrome(str)`: Checks if `str` is a palindrome.
5. `calculateTime(n)`: Calculates time to sum from 1 to `n`.
6. `countVowels(str)`: Counts vowels in `str`.
7. `sumArray(numbers)`: Sums all numbers in an array.
8. `filterEvenNumbers(numbers)`: Filters even numbers from an array.
9. `findSmallestElement(numbers)`: Finds the smallest number in an array.
10. `reverseString(str)`: Reverses the string `str`.
11. `fibonacci(n)`: Returns the nth Fibonacci number.
12. `removeDuplicates(arr)`: Removes duplicates from `arr`.
13. `countOccurrences(str, char)`: Counts occurrences of `char` in `str`.
14. `findCommonElements(arr1, arr2)`: Finds common elements in two arrays.
15. `sortStrings(arr)`: Sorts an array of strings alphabetically.


# JavaScript Functions: Sample Inputs and Expected Outputs

## 1. `isAnagram`

**Function**: `isAnagram(str1, str2)`

**Description**: Checks if two strings are anagrams.

**Sample Inputs and Expected Outputs**:

```javascript
// Input
isAnagram("listen", "silent");
// Output
true

// Input
isAnagram("hello", "world");
// Output
false
```

---

## 2. `calculateTotalSpentByCategory`

**Function**: `calculateTotalSpentByCategory(transactions)`

**Description**: Returns total spending by category.

**Sample Inputs and Expected Outputs**:

```javascript
// Input
const transactions = [
    { category: 'Food', price: 20 },
    { category: 'Food', price: 15 },
    { category: 'Transport', price: 50 }
];
calculateTotalSpentByCategory(transactions);
// Output
{ Food: 35, Transport: 50 }
```

---

## 3. `findLargestElement`

**Function**: `findLargestElement(numbers)`

**Description**: Returns the largest number in an array.

**Sample Inputs and Expected Outputs**:

```javascript
// Input
findLargestElement([3, 5, 7, 2, 8]);
// Output
8
```

---

## 4. `isPalindrome`

**Function**: `isPalindrome(str)`

**Description**: Checks if `str` is a palindrome.

**Sample Inputs and Expected Outputs**:

```javascript
// Input
isPalindrome("A man a plan a canal Panama");
// Output
true

// Input
isPalindrome("Hello");
// Output
false
```

---

## 5. `calculateTime`

**Function**: `calculateTime(n)`

**Description**: Calculates time to sum from 1 to `n`.

**Sample Inputs and Expected Outputs**:

```javascript
// Input
calculateTime(1000);
// Output
0.001 (varies)
```

---

## 6. `countVowels`

**Function**: `countVowels(str)`

**Description**: Counts vowels in `str`.

**Sample Inputs and Expected Outputs**:

```javascript
// Input
countVowels("Hello World");
// Output
3

// Input
countVowels("This is a test");
// Output
4
```

---

## 7. `sumArray`

**Function**: `sumArray(numbers)`

**Description**: Sums all numbers in an array.

**Sample Inputs and Expected Outputs**:

```javascript
// Input
sumArray([1, 2, 3, 4, 5]);
// Output
15

// Input
sumArray([10, 20, 30]);
// Output
60
```

---

## 8. `filterEvenNumbers`

**Function**: `filterEvenNumbers(numbers)`

**Description**: Filters even numbers from an array.

**Sample Inputs and Expected Outputs**:

```javascript
// Input
filterEvenNumbers([1, 2, 3, 4, 5]);
// Output
[2, 4]

// Input
filterEvenNumbers([6, 7, 8, 9]);
// Output
[6, 8]
```

---

## 9. `findSmallestElement`

**Function**: `findSmallestElement(numbers)`

**Description**: Finds the smallest number in an array.

**Sample Inputs and Expected Outputs**:

```javascript
// Input
findSmallestElement([3, 5, 7, 2, 8]);
// Output
2
```

---

## 10. `reverseString`

**Function**: `reverseString(str)`

**Description**: Reverses the string `str`.

**Sample Inputs and Expected Outputs**:

```javascript
// Input
reverseString("Hello");
// Output
"olleH"

// Input
reverseString("JavaScript");
// Output
"tpircSavaJ"
```

---

## 11. `fibonacci`

**Function**: `fibonacci(n)`

**Description**: Returns the nth Fibonacci number.

**Sample Inputs and Expected Outputs**:

```javascript
// Input
fibonacci(5);
// Output
5

// Input
fibonacci(10);
// Output
55
```

---

## 12. `removeDuplicates`

**Function**: `removeDuplicates(arr)`

**Description**: Removes duplicates from `arr`.

**Sample Inputs and Expected Outputs**:

```javascript
// Input
removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
// Output
[1, 2, 3, 4, 5]
```

---

## 13. `countOccurrences`

**Function**: `countOccurrences(str, char)`

**Description**: Counts occurrences of `char` in `str`.

**Sample Inputs and Expected Outputs**:

```javascript
// Input
countOccurrences("banana", 'a');
// Output
3

// Input
countOccurrences("Mississippi", 's');
// Output
4
```

---

## 14. `findCommonElements`

**Function**: `findCommonElements(arr1, arr2)`

**Description**: Finds common elements in two arrays.

**Sample Inputs and Expected Outputs**:

```javascript
// Input
findCommonElements([1, 2, 3, 4], [3, 4, 5, 6]);
// Output
[3, 4]
```

---

## 15. `sortStrings`

**Function**: `sortStrings(arr)`

**Description**: Sorts an array of strings alphabetically.

**Sample Inputs and Expected Outputs**:

```javascript
// Input
sortStrings(["banana", "apple", "cherry"]);
// Output
["apple", "banana", "cherry"]

// Input
sortStrings(["zebra", "monkey", "apple"]);
// Output
["apple", "monkey", "zebra"]
```
---

## Submission Details

- **Submitting Date**: 2/08/2024

- **Everything is followed as per steps**: Yes

- **Assignment Level**: Easy

- **Code Quality Is Maintained?**: Yes
