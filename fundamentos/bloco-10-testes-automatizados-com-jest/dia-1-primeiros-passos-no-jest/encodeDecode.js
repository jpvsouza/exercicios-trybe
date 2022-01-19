function encode(normal) {
    let array = normal.split("");
  
    for (let index = 0; index < array.length; index += 1) {
      if (array[index] == "a") {
        array[index] = 1;
      }
      else if (array[index] == "e") {
        array[index] = 2;
      }
      else if (array[index] == "i") {
        array[index] = 3;
      }
      else if (array[index] == "o") {
        array[index] = 4;
      }
      else if (array[index] == "u") {
        array[index] = 5;
      }
    }
    
    return array.join("");
  }
  
  
  function decode(codificado) {
    let array = codificado.split('');
  
    for (let index = 0; index < array.length; index += 1) {
      if (array[index] == 1) {
        array[index] = "a";
      } 
      else if (array[index] == 2) {
        array[index] = "e";
      } 
      else if (array[index] == 3) {
        array[index] = "i";
      } 
      else if (array[index] == 4) {
        array[index] = "o";
      } 
      else if (array[index] == 5) {
        array[index] = "u";
      }
    }
    return array.join("");
  }

module.exports.encode = encode;
module.exports.decode = decode;