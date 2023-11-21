function lyricsGenerator(array) {
    let resultado = '';
    let contador = 0;
  
    for (let i = 0; i < array.length; i++) {
      if (array[i] === 0) {
        resultado = 'Boom ';
      } else if (array[i] === 1) {
        resultado = 'Drop the bass ';
        contador++;
  
        if (contador === 3) {
          resultado = '!!!Break the bass!!! ';
          contador = 0;
        }
      }
    }
  
    return resultado;
  }


// Your code here


// Don't change anything below this line
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))
