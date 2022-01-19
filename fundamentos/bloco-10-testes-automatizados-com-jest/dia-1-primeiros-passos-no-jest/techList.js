const arrayExemplo = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript'];

const techList = (array, nome) => {
    let arrayNovo = array;
    if (array.length === 0) {
        return 'Vazio!'
    }
    let arrayVazio = [];
    arrayNovo.sort().forEach((elemento) => {
        arrayVazio[arrayVazio.length] = {
            tech: elemento,
            name: nome,
        }
    });
    return arrayVazio;
};

techList(arrayExemplo, 'Lucas');

module.exports = techList;