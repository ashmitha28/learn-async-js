// Function to log any row that has at least one negative number
function logRowsWithNegativeNumbers(array2D) {
    const promises = [];

    // Iterate through each row in the 2D array
    for (let rowIdx = 0; rowIdx < array2D.length; rowIdx++) {
        const row = array2D[rowIdx];
        // Check if the row contains any negative number
        if (row.some(num => num < 0)) {
            // Log the row asynchronously
            const promise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log('Row with negative numbers:', row);
                    resolve();
                }, 0);
            });
            promises.push(promise);
        }
    }

    // Wait for all promises to resolve
    return Promise.all(promises);
}

// Example usage for logging any row that has at least one negative number
const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

logRowsWithNegativeNumbers(array2D)
    .then(() => {
        console.log('Logging complete');
    })
    .catch(error => {
        console.error('Error:', error);
    });
