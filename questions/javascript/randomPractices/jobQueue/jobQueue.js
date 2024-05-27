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
        while (this.currentRunning < this.capacity && this.jobs.length > 0) {
            const job = this.jobs.shift();
            this.executables.push(job);
            this.executeJob(job);
        }
    }

    async executeJob(job, retries = 0) {
        this.currentRunning++;
        try {
            await job();
            console.log('Job completed successfully');
        } catch (error) {
            console.error(`Job failed: ${error}`);
            if (retries < this.maxRetries) {
                console.log(`Retrying job (${retries + 1}/${this.maxRetries})`);
                this.jobs.push(() => this.executeJob(job, retries + 1));
            } else {
                console.error('Job failed after maximum retries');
            }
        } finally {
            this.currentRunning--;
            this.executables.shift();
            this.runJobs();
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