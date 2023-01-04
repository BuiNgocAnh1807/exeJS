
//bai3
const arr3 =  [2, 1, 0, 3, 2, 1, 2];
const array1 = arr3.reduce(
        (unique, item) => unique.includes(item) ? unique : [...unique, item]
        , []) // ban đầu mảng rỗng giá trị false thì sẽ push item vào mảng 


//bai4
const arr4 = [0, 1, 1, 2, 2, 2];
let count = arr4.reduce((res,cur) => {
    let temp = (res[cur] || 0) + 1 
    let newRes = {...res}
    newRes[cur] = temp
    return newRes
},{})


// bai5
const arr5 = [12, 45, 21, 65, 38, 76, 108, 43];
function Max(arr) {
    return arr.reduce((t, v) => t > v ? t : v);
}
Max(arr5);
function Min(arr) {
    return arr.reduce((t, v) => t < v ? t : v);
}
Min(arr5);

//bai1

const Chunk = (arr, number) => {
    let newArr = []
    return arr.reduce((res, curr, idx) => {
        const newRes = [...res]
        newArr.push(curr)
        console.log(newArr)
        if (newArr.length == number) {
            newRes.push(newArr)
            newArr = []
            // console.log(newArr)
        }
        if (newArr.length != 0 && idx == arr.length - 1) newRes.push(newArr)
        return newRes
    }, [])
}

//bai2
function Difference(arr, arr2) {
    return arr.reduce((t, v) => (!arr2.includes(v) && t.push(v), t), []);
    // check các giá trị trong mảng arr2 true thì push vào mảng khai báo ban đầu
}

const arrlist = [1, 2, 3, 4, 5];
const arrlist2 = [2, 3, 6]
Difference(arrlist, arrlist2); 

//bai 6
const arr6 = [
    { area: "GZ", name: "YZW", age: 27 },
    { area: "GZ", name: "TYJ", age: 25 },
    { area: "SZ", name: "AAA", age: 23 },
    { area: "FS", name: "BBB", age: 21 },
    { area: "SZ", name: "CCC", age: 19 }
];
function Group(arr6, gr) {
    return arr6.reduce((res, curr) => {
        let key = curr[gr]
        let value = res[key] || []
        value.push(curr)
        let newRes = { ...res }
        newRes[key] = value
        return newRes
    }, {})
}
console.log(Group(arr6, "area"))

