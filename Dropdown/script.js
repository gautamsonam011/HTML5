let arr = [1,2,3,4]
arr.pop(100)
arr.push(600)
arr.push(1000)
arr.shift()
arr.shift(200)
arr.unshift(900)
arr.pop()

console.log(arr.length)
console.log(arr)


let ar = [21,3,3,15,5];

console.log(ar.forEach((e,i)=>{
    return e*i
}))


let a = [10,20,30,40,50];

console.log(a.slice(1,-2))