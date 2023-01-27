let num1=10;
let num2=7;

function addtwonum(num1,num2){
    return new Promise((fulfil,notfulfil)=>{
        setTimeout(()=>{
            console.log("Inside setTimeout");
            fulfil(num1+num2);
        },3500);
    });
}
addtwonum(9,8).then(()=>{
    console.log("Promise was fulfilled");
}).catch(()=>{
    console.log("Promise was not fulfilled");
})