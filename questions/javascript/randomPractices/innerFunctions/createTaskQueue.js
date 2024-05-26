function createTaskQueue() {
    let queue = [];
    let processing = false;

    function runNext() {
        if (queue.length === 0) {
            console.log('Queue is empty, stopping processing.');
            processing = false;
            return;
        }
        processing = true;
        const task = queue.shift();
        console.log('Starting task...');
        task().then(() => {
            console.log('Task completed.');
            runNext();
        });
    }

    function addTask(task) {
        queue.push(task);
        console.log('Task added to queue.');
        if (!processing) {
            console.log('No tasks processing, calling runNext()...');
            runNext();
        }
    }

    return addTask;
}

const taskQueue = createTaskQueue();

taskQueue(() => new Promise(res => setTimeout(() => { console.log('Task 1'); res(); }, 1000)));
taskQueue(() => new Promise(res => setTimeout(() => { console.log('Task 2'); res(); }, 500)));
taskQueue(() => new Promise(res => setTimeout(() => { console.log('Task 3'); res(); }, 300)));
