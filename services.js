var p = function (x) {
    return new Promise((resolve, reject) => {
        let l = 1 + x;
        if (l == 2)
        {
            setTimeout(() => {
                resolve('resolved, it is equal!');            
            }, 500);
        } 
        else {
            setTimeout(() => {
                reject('failed, it is not equal!');
            }, 500);
        }
    });
} 


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



exports.servPromise = p;
exports.servCallback = watchCallback;