var p = new Promise((resolve, reject) => {
    let l = 1 + 1;
    if (l == 2)
    {
        setTimeout(() => {
            resolve('resolved, it is equal!');            
        }, 500);
    } else {
        reject('failed, it is not equal!');
    }
});

async function Run ()
{
    console.log('BEGIN');
    await p.then((message) => {
        console.log(`Then: ${message}`);            
      
    }).catch((message) => {
        console.log(`Catch: ${message}`);
    })
    
    console.log('END');
};
//Run();

function watchCallback(callback, error){
    let l = 1 + 1;
    if(l == 2)
    {
        setTimeout(() => {
            callback('resolved, it is equal!');            
        }, 500);
    } else {
        error('failed, it is not equal!')
    }
}

console.log('BEGIN');
watchCallback((message)=>{
    console.log(`Success: ${message}`);
}, (error)=> {
    console.log(`Failed: ${error}`);
})
console.log('END');


