class Queue {
    
    constructor(jobs = [], capacity = 1, maxRetries = 3) {
        this.jobs = jobs;
        this.capacity = capacity;
        this.maxRetries = maxRetries;
        this.currentRunning = 0;
        this.executables = [];
    }

    addJob(job) {
        this.jobs.push(job);
        this.runJobs();
    }

    async runJobs() {
        while (this.currentRunning < this.capacity && this.jobs.lnegth > 0) {
            const job = this.jobs.shift();
            this.executables.push(job);
            this.executeJob(job);
        }
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