const projects = [
    { id: 1, name: 'Option 1', probability: 0.3 },
	{ id: 2, name: 'Option 2', probability: 0.5 },
	{ id: 3, name: 'Option 3', probability: 0.15 },
	{ id: 4, name: 'Option 4', probability: 0.05 }
]

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

const getRandomTask = (tasks) => {
    const randomInt = getRandomInt(100);
    console.log(randomInt);
    let task = tasks[0]

    for(let i=tasks.length - 1; i>=0; i--) {
        if(randomInt < tasks[i].probability)
            task = tasks[i]
    }

    console.log(task.name);
    return task.id;
}

const getRandomSummary = (projects, activities) => {
    const result = {
        'ID 1': 0,
        'ID 2': 0,
        'ID 3': 0,
        'ID 4': 0
    };

    let tasks = [];
    for(let i=0; i<projects.length; i++) {
        let task = projects[i];
        task.probability *= 100;

        if(i == 0)
            tasks.push(projects[i])
        else {
            task.probability += tasks[i - 1].probability
            tasks.push(task);
        }
    }

    for(i=0; i<activities; i++) {
        const randomTaskId = getRandomTask(tasks);
        result[`ID ${randomTaskId}`]++;
    }

    console.log('--- Finished ---');
    console.log(result);
}

getRandomSummary(projects, 500);