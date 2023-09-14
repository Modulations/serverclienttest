// var focus = {}

// // setup workers here
// var workerFarm = require('worker-farm');
// var workers = workerFarm(require.resolve('./child.js'));

// var ret = 0;
 
// for (var i = 0; i < 10; i++) {
//   workers('#' + i + ' FOO', focus, function (err, outp) {
//     console.log(outp)
//     if (++ret == 10) { workerFarm.end(workers) }
//     console.log(focus)
//     })
// }

// console.log("Initial Commit")

var redis = require("redis")
var config = {
    url: 'redis://localhost:6379'
}
const client = redis.createClient(config);

yerr = async () => {
    client.on('error', (err) => {
        console.log(err)
    })

    await client.connect();
    // await here?
    await client.hSet('user-session:123', {
        name: 'John',
        surname: 'Smith',
        company: 'Redis',
        age: 29
    })

    let userSession = await client.hGetAll('user-session:123');
    console.log(JSON.stringify(userSession, null, 2));
}

yerr()