function merge_sort(front, back, arr) {
    if (front === back) {

        // back = back - 1;
        // merge_sort(front, back,arr)
        return [arr[front]];

    } else {
        let mid = Math.floor((front + back) / 2);
        let a = merge_sort(front, mid, arr);
        let b = merge_sort(mid + 1, back, arr);

        return merge1(a, b);
    }
}
function merge1(arr1, arr2) {
    let i = 0;
    let j = 0;
    let arra = [];
    let flag = 0;

    while ((!(i === arr1.length)) && (!(j === arr2.length))) {
        if (arr1[i] <= arr2[j]) {
            arra.push(arr1[i]);
            i = i + 1;
            flag = 0;
        } else {
            arra.push(arr2[j]);
            j = j + 1;
            flag = 1;
        }
    }
    if (flag === 0) {
        while (!(j === arr2.length)) {
            arra.push(arr2[j]);
            j = j + 1;
        }
    } else if (flag === 1) {
        while (!(i === arr1.length)) {
            arra.push(arr1[i]);
            i = i + 1;
        }
    }
    return arra;
}
const arry = [9, 3, 4, 2, 8];

console.log(merge_sort(0, arry.length - 1, arry));
