module.exports = function towelSort(matrix) {
    if (matrix == undefined) {
        return [];
    }

    let updMatrix = [];

    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 != 0) {
            matrix[i].reverse();
        }

        for (let n = 0; n < matrix[i].length; n++) {
            updMatrix.push(matrix[i][n]);
        }
    }
    return updMatrix;
}
