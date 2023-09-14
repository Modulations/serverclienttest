var focus = {}

// setup workers here
var workerFarm = require('worker-farm');
var workers = workerFarm(require.resolve('./child.js'));

var ret = 0;
 
for (var i = 0; i < 10; i++) {
  workers('#' + i + ' FOO', focus, function (err, outp) {
    console.log(outp)
    if (++ret == 10) { workerFarm.end(workers) }
    console.log(focus)
    })
}

console.log("Initial Commit")
