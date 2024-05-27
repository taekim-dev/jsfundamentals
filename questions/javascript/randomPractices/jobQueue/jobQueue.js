class Queue {
    constructor(jobs, capacity) {

    }

    addJob(job) {

    }

    processJob() {

    }
}

const job = () => new Promose((resolve, reject) => {
    setTimeout(() =>  resolve('Job completed'), 1000);
})

const jobWithFailure = () => new Promise((resolve, reject) => {
    setTimeout(() => reject('Job failed'), 1000);
})

const queue = new Queue([], 2);

queue.addJob(job);
queue.addJob(jobWithFailure);
queue.addJob(job);
queue.addJob(jobWithFailure);
queue.addJob(job);
queue.addJob(job);

queue.processJob();