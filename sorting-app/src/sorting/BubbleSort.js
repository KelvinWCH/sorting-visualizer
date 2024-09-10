const delay = async (ms) => {
    return new Promise((resolve) => 
        setTimeout(resolve, ms));
};

const BubbleSort = async (arr, updateArray) => {
    let array = [...arr];
    let n = array.length;
    
    for (let i = 0; i < n - 1; i++) {
        let swapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                // Swap the elements
                [array[j], array[j + 1]] = [array[j + 1], array[j]];

       
                console.log(array);

               
                updateArray([...array]);
                swapped = true;
            }
            await delay(0);
            
 
        }
       
        if (!swapped) break; // If no elements were swapped, array is sorted
    }
    
    updateArray(array);
}

export default BubbleSort;
