const _ = require('lodash');

const testing = function (fun, inputs, output) {
    if (_.isEqual(fun(...inputs) , output)) {
        console.log(`test ok!
        Arguments: ${JSON.stringify(inputs)}  match ${JSON.stringify(output)}`);
        
    } else {
        console.error(`test fail for input${JSON.stringify(inputs)}
    Your function returns: ${JSON.stringify(fun(...inputs))}
    and must return: ${JSON.stringify(output)}`);
        
    }
    console.log('\n');
    
}


module.exports = testing;
