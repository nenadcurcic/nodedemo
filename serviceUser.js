const serv = require('./services');

async function Run ()
{
    console.log('BEGIN');
    await serv.servPromise(1) .then((message) => {
        console.log(`Then: ${message}`);            
    }).catch((message) => {
        console.log(`Catch: ${message}`);
    })
    
    console.log('END');
};

Run();