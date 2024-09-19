const delay = async (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

const MergeSort = async (arrs, updateArray) => {
    let arr = [...arrs];
    console.log("merge");
    recursiveMergeSort(arr, 0, arr.length - 1);

    // Merge function to merge two halves
    async function mergeHalves(array, left, mid, right) {
        const n1 = mid - left + 1;
        const n2 = right - mid;

        // Create temp arrays
        const L = new Array(n1);
        const R = new Array(n2);

        // Copy data to temp arrays L[] and R[]
        for (let i = 0; i < n1; i++)
            L[i] = array[left + i];
        for (let j = 0; j < n2; j++)
            R[j] = array[mid + 1 + j];

        let i = 0, j = 0;
        let k = left;

        // Merge the temp arrays back into arr[left..right]
        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                array[k] = L[i];
                i++;
            } else {
                array[k] = R[j];
                j++;
            }
            k++;
        }

        // Copy the remaining elements of L[], if there are any
        while (i < n1) {
            array[k] = L[i];
            i++;
            k++;
        }

        // Copy the remaining elements of R[], if there are any
        while (j < n2) {
            array[k] = R[j];
            j++;
            k++;
        }

        // Update array after each merge
       
    }

    // Recursive merge sort function
    async function recursiveMergeSort(array, left, right) {
        if (left >= right) return;

        const mid = Math.floor(left + (right - left) / 2);
        await recursiveMergeSort(array, left, mid);
        await recursiveMergeSort(array, mid + 1, right);
        await mergeHalves(array, left, mid, right);
        await delay(0);
        updateArray([...array]);
    }
};

export default MergeSort;
