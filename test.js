var http = require('http');

function myname(){
    return "Here is my IP address";
}

async function callHttpbin() {
    let promise = new Promise((resolve, reject) => {
        http.get(
            'http://httpbin.org/ip',
            function(response) {
                var str="";
                response.setEncoding('utf8');
                response.on('data', function(data){
                    str += data;
                });
                response.on('end', function() {
                    var result = JSON.parse(str);
                    myips = result.origin;
                    return resolve(myips);
                });
            }
        );
    });
    let result = Promise.resolve(promise);
    return result;
}

async function executeAsyncTask(){
    const valueA = await callHttpbin();
    const valueB = myname();
    console.log(valueB+" "+valueA);
}

executeAsyncTask();
// Output Here is my IP address 149.24.160.1
