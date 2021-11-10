
const x = (n) => {
    const white = '■', black = '□'
    let inicio = 1, fin = n, xsh = []

    // Columnas
    for (let i = 1; i <= n; i++) {
        const row = []
        // Filas
        for (let j = 1; j <= n; j++) {
            (j === inicio || j === fin) 
                ? row.push(white) 
                : row.push(black)
        }
        xsh.push(row.join(''))
        inicio += 1
        fin -= 1
    }

    return xsh.join('\n')
}

console.log('X Shape of:')
console.log(x(10))