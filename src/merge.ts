function merge(collection_1: number[], collection_2: number[]): number[] {
  let arr = [...collection_1, ...collection_2];
  for (let i = 1; i < arr.length; i++) {
    let currentElement = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > currentElement) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = currentElement;
  }
  return arr;
}

export default merge;

const collection1 = [4, 1, 3, 5];
const collection2 = [8, 2, 7, 9, 6];

const result = merge(collection1, collection2);
console.log("collection1: ", collection1);
console.log("collection2: ", collection2);
console.log("result: ", result);
