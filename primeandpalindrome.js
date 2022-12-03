

//code to check prime number

let num = 10
let count =0

for(let i =2;i<=num-1;i++){
    if(num%i==0){
        count++
    }
}
if(count==0){
    console.log("prime number")
}else {
    console.log("Not a prime")
}

//code to chcek palindrome

let str = "venky"
let bag = ""
for(let i = str.length-1;i>=0;i--){
bag+=str[i]
}
if(bag==str){
    console.log(palindrome)
}else {
    console.log(not a palindrome)
}
    

