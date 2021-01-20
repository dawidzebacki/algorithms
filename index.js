// 1. Please write a function that reverses a string
const reverseString = (str) => {
    return str.split('').reverse().join('');
}

// console.log(reverseString('kamil ślimak'))

// 2. Please write a function that filters out numbers from a list
const filterToNumbers = (arr) => {
    return arr.filter(element => typeof element === 'number');
}

// console.log(filterToNumbers([1, 2, 'x', '2', 5, true]))

// 3. Please write a function that shows the usage of closures
const getCounter = () => {
    let count = 0;

    return function innerGetCounter() {
        return count++;
    };

}

const countValue = getCounter();
countValue(); // 0
countValue(); // 1
countValue(); // 2
// Closure is created when an inner function (innerGetCounter) has access to its outer function (getCounter) variables and arguments.

// 4. Please write a recursive function that flattens an list of items
// example input [[2, [4, [44,5,6]]], [4,5,6], [[2,4], 4], 5]]
// example output [2, 4, 44, 5, 6, 4, 5, 6, 2, 4, 4, 5]

const getFlattedArray = (array) => {
    const flattedArray = array.flat();

    for (let i = 0; i < flattedArray.length; i++) {
        if (Array.isArray(flattedArray[i])) return getFlattedArray(flattedArray);
    }

    return flattedArray;
}

// console.log(getFlattedArray([
//     [2, [4, [44, 5, 6]]],
//     [4, 5, 6],
//     [
//         [2, 4], 4
//     ], 5
// ]));

// 5. Please write a function that finds all common elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['b', 4, 76]

const getAllCommonElements = (arr1, arr2) => {

    const shorterArray = arr1.length >= arr2.length ? arr2.slice() : arr1.slice();
    const longerArray = arr1.length >= arr2.length ? arr1.slice() : arr2.slice();
    const resultArray = [];

    for (let i = 0; i < shorterArray.length; i++) {
        if (longerArray.includes(shorterArray[i])) resultArray.push(shorterArray[i]);
    }

    return resultArray;
}

// console.log(getAllCommonElements(['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']));

// 6. Please write a function that finds all different elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['a', 3, 21, 'c', 'e']

const getAllDifferentElements = (arr1, arr2) => {

    const shorterArray = arr1.length >= arr2.length ? arr2.slice() : arr1.slice();
    const longerArray = arr1.length >= arr2.length ? arr1.slice() : arr2.slice();
    const resultArray = [];

    for (let i = 0; i < longerArray.length; i++) {
        if (!shorterArray.includes(longerArray[i])) resultArray.push(longerArray[i]);
        if (shorterArray[i] !== undefined && !longerArray.includes(shorterArray[i])) resultArray.push(shorterArray[i]);
    }

    return resultArray;
}

// console.log(getAllDifferentElements(['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']));

// 7. Please write a function that transforms an object to a list of [key, value] tuples.
// example input { color: 'Blue', id: '22', size: 'xl' }
// example output [['color', 'blue'], ['id', '22'], ['size', 'xl']]

const transformObjectToArray = (obj) => {
    const resultArray = [];

    for (const property in obj) resultArray.push([property.toLowerCase(), obj[property].toLowerCase()]);

    return resultArray;
}

// console.log(transformObjectToArray({ color: 'Blue', id: '22', size: 'xl' }));

// 8. Please write a function that transforms a list of [key, value] tuples to object. // reverse or task 7
// example input [['color', 'blue'], ['id', '22'], ['size', 'xl']]
// example output { color: 'Blue', id: '22', size: 'xl' }

const transformArrayToObject = (arr) => {
    const obj = {};

    arr.forEach(element => {
        if (!obj.hasOwnProperty(element[0])) {
            if (element.length > 2) obj[element[0]] = element.slice(1, element.length);
            else if (element.length === 2) obj[element[0]] = element[1];
            else return 'Arrays must have at least 2 items';
        }
    });

    return obj;
}

// console.log(transformArrayToObject([
//     ['color', 'blue'],
//     ['id', '22'],
//     ['size', 'xl'],
//     ['country', 'russia', 'poland', 'france']
// ]))

// 9. Please write a function that takes two arrays of items and returns an array of tuples made from two input arrays at the same indexes. Excessive items should be dropped.
// example input [1,2,3], [4,5,6,7]
// example output [[1,4], [2,5], [3,6]]

const getItemOneByOne = (arr1, arr2) => {

    const shorterArray = arr1.length >= arr2.length ? arr2.slice() : arr1.slice();
    const longerArray = arr1.length >= arr2.length ? arr1.slice() : arr2.slice();
    const resultArray = [];

    for (let i = 0; i < shorterArray.length; i++) {
        resultArray.push([shorterArray[i], longerArray[i]]);
    }

    return resultArray;

}

// console.log(getItemOneByOne([1, 2, 3], [4, 5, 6, 7]));

// 10. Please write a function which takes a path(path is an array of keys) and object, then returns value at this path. If value at path doesn't exists, return undefined.
// example inputs ['a', 'b', 'c', 'd'], { a: { b: { c: { d: '23' } } } }
// example output '23'

const getValuePath = (arr, obj) => {

    let resultObject = JSON.parse(JSON.stringify(obj));

    for (let i = 0; i < arr.length; i++) {
        if (resultObject[arr[i]] !== undefined) resultObject = resultObject[arr[i]];
    }

    return typeof resultObject === 'object' ? undefined : resultObject;
}

// console.log(getValuePath(['a', 'b', 'c', 'd'], { a: { b: { c: { d: '23' } } } }));

// 11. Please write compare function which compares 2 objects for equality.
// example input { a: 'b', c: 'd' }, { c: 'd', a: 'b' }  /// output true
// example input { a: 'c', c: 'a' }, { c: 'd', a: 'b', q: 's' }  /// output false

const compareObjects = (obj1, obj2) => {

    if (Object.keys(obj1).length !== Object.keys(obj1).length) return false;

    for (const property in obj1) {
        if (obj1[property] !== obj2[property]) return false;
    }

    return true;

}

// console.log(compareObjects({ a: 'b', c: 'd' }, { c: 'd', a: 'b' }))

// 12. Please write a function which takes a list of keys and an object, then returns this object, just without keys from the list
// example input ['color', 'size'], { color: 'Blue', id: '22', size: 'xl' }
// example output { id: '22' }

const getObjectWithoutKeys = (arr, obj) => {

    const resultObject = JSON.parse(JSON.stringify(obj));

    arr.forEach(element => {
        delete resultObject[element];
    });

    return resultObject;

}

// console.log(getObjectWithoutKeys(['color', 'size'], { color: 'Blue', id: '22', size: 'xl' }))