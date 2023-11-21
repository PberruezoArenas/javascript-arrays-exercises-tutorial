// Your code here


function matrixBuilder(n) {
    let maTrix = [];

    for (let i = 0; i < n; i++) {
        maTrix[i] = [];
        for (let j = 0; j < n; j++) {
            maTrix[i][j] = Math.round(Math.random());
        }
    }
    return maTrix;
}

// Do not change anything from this line down
console.log(matrixBuilder(5))
