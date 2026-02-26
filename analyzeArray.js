const analyzeArray = (array) => {
    let sum = 0;
    let max = array[0];
    let min = array[0];

    for(let i = 0; i < array.length; i++){
        sum += array[i];

        if(array[i] > max) max = array[i];
        if(array[i] < min) min = array[i];
    }

    const average = Math.ceil(sum / array.length);

    return {
        average,
        length: array.length,
        max,
        min
    };
}

export default analyzeArray;