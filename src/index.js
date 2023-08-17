import os from "node:os";
import cluster from "node:cluster";

const runPrimaryProcess = () => {
    const processCount = os.availableParallelism();
    console.log(`Primary ${process.pid} is running \n`);
    console.log(`Forking server with ${processCount} process \n`);

    for (let index = 0; index < processCount; index++)cluster.fork();

    cluster.on('exit', (worker, code, signal) => {
        if (code !== 0 && !worker.exitedAfterDisconnect) {
            console.log(`Worker ${worker.process.pid} died with:\n code: ${code} \n signal: ${signal}`);
            cluster.fork();
        }
    });

}

const runWorkerProcess = async () => {
    await import('./server.js');
}


cluster.isPrimary ? runPrimaryProcess() : runWorkerProcess();