const delay = async (ms) => {
    return new Promise((resolve) => 
        setTimeout(resolve, ms));
};

const InsetionSort = async (arr, updateArray) => {
    let array = [...arr];
    let n = array.length;
    
    for (let i = 1; i < array.length; i++) {
        let currentValue = array[i]
        let j;
        for (j = i - 1; j >= 0 && array[j] > currentValue; j--) {
            array[j + 1] = array[j];
            await delay(0);
            updateArray([...array])
        }
        array[j + 1] = currentValue
     
    }
}

export default InsetionSort;
