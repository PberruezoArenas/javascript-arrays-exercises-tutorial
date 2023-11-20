let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// Your code here

for (let i = 0; i < par.length; i = i + 1) {
    let letters = par[i].toLowerCase(); 
    if (letters.match(/[a-z]/)) {
        counts[letters] = (counts[letters] || 0) + 1;
    }
}

let result = " Recuento de letras: "
for (let letra in counts) {
    result += letra + ": " + counts[letra] + ", ";
}

result = result.slice(0, -2);

console.log(result);
