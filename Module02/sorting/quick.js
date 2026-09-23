let arr = [5, 4, 6, 7, 1, 2];

function partitionIndex(arr, l, high) {
    let i = l;
    let j = l;
    let pivot = high;

    while (j < high) {
        if (arr[j] <= arr[pivot]) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
        }
        j++;
    }

    [arr[i], arr[pivot]] = [arr[pivot], arr[i]];

    return i;
}

function quickSort(l, r, arr) {
    if (l >= r)
        return;

    let index = partitionIndex(arr, l, r);

    quickSort(l, index - 1, arr);
    quickSort(index + 1, r, arr);
}

quickSort(0, arr.length - 1, arr);

console.log(arr);