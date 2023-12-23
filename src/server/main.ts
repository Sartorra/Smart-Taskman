// Main entry point for the server
import cluster, { Worker } from 'cluster';
import * as serverWorker from './cluster-workers/server.js';
import os from 'os';

function masterNode() {
    const totalCores = os.cpus().length;

    for (let i = 0; i < totalCores; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker: Worker, code: number, signal: string) => {
        // Prevent cores from being idle from a crash.
        cluster.fork();

        // TODO: Have some form of logging system to handle crashes.
    });
}

function workerNode() {
    serverWorker.run();
}

if (cluster.isPrimary) {
    masterNode();
}
else {
    workerNode();
}

