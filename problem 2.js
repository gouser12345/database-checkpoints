function dotProduct(v1, v2) {
    let productSum = 0;

    for (let i = 0; i < v1.length; i++) {
        productSum += v1[i] * v2[i];
    }

    return productSum;
}

function areVectorsOrthogonal(v1, v2) {
    const result = dotProduct(v1, v2);
    return result === 0;
}

// Example usage:
const vectors = [
    { v1: [1, 2, 3], v2: [4, 5, 6] },
    { v1: [0, 1, -1], v2: [2, -2, 1] },
    // Add more vector pairs as needed
];

for (let pair of vectors) {
    const isOrthogonal = areVectorsOrthogonal(pair.v1, pair.v2);
    console.log(`Vectors ${pair.v1} and ${pair.v2} are orthogonal: ${isOrthogonal}`);
}
