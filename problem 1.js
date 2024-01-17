function findDistinctSum(set1, set2) {
    let distinctSum = 0;

    // Add elements from set1 that are not in set2
    for (let element of set1) {
        if (!set2.includes(element)) {
            distinctSum += element;
        }
    }

    // Add elements from set2 that are not in set1
    for (let element of set2) {
        if (!set1.includes(element)) {
            distinctSum += element;
        }
    }

    return distinctSum;
}

// Example usage:
const set1 = [3, 1, 7, 9];
const set2 = [2, 4, 1, 9, 3];
const result = findDistinctSum(set1, set2);
console.log("Output:", result); // Output: 13 (distinct elements 4, 7, 2)
