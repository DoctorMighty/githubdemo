/* make two functions one that does complicated math and then one that waits for the math to get returned

*/
//complicated math
function someMath(){
    for(i = 0; i<1000000; i++){
        if(i = 1000000){
            return i;
        }
    }
}
//where we put our promise
const mathAnswer = () => {
    return new Promise((resolve, reject) => {
        try{
            resolve(someMath());
        }   catch(error){
            reject('error: numbers arnent real');
        }
    })
}

mathAnswer().then(res => {
    console.log(res);
}).catch(err => {
    console.log(err.message);
});

const wait = setTimeout(() => {
    mathAnswer().then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err.message);
    });
},2000);