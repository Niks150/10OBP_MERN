//Sorting

// types of sorting
//Selection Sort
//Bubble sort
//merge sort//Insertion sort//quick sort

//=========Selection Sort ===========//

let arr = [1, 5, 2, 4, 3];

for (let i = 0; i < arr.length - 1; i++) {

    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
            minIndex = j;
        }
    }

    // Swap
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
}

console.log(arr);