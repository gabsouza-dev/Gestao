class TaskData {
    constructor(TaskId, TaskName, StartDate, EndDate, BaselineStartDate, BaselineEndDate, Duration, Progress, Predecessor, ResourceId, Notes, TaskType, ParentId) {
        this.TaskId = TaskId;
        this.TaskName = TaskName;
        this.StartDate = StartDate;
        this.EndDate = EndDate;
        this.BaselineStartDate = BaselineStartDate;
        this.BaselineEndDate = BaselineEndDate;
        this.Duration = Duration;
        this.Progress = Progress;
        this.Predecessor = Predecessor;
        this.ResourceId = ResourceId;
        this.Notes = Notes;
        this.TaskType = TaskType;
        this.ParentId = ParentId;
    }
}

function ProjectNewData() {
    const tasks = [
        new TaskData(1, "Product concept", new Date(2021, 3, 2), new Date(2021, 3, 8), null, null, "5days", null, null, null, null, null, null),
        new TaskData(2, "Define the product usage", new Date(2021, 3, 2), new Date(2021, 3, 8), new Date(2021, 3, 2), new Date(2021, 3, 2), "3", 30, "1", null, null, null, 1),
        new TaskData(3, "Define the target audience", new Date(2021, 3, 2), new Date(2021, 3, 4), null, null, "2Days", 40, "1", null, null, null, 1),
        new TaskData(4, "Prepare product sketch and notes", new Date(2021, 3, 5), null, null, null, "4", 30, "2", null, null, null, 1),
        new TaskData(5, "Concept approval", new Date(2021, 3, 8), new Date(2021, 3, 8), null, null, "0", null, "3,4", null, null, null, 1),
        new TaskData(6, "Market research", new Date(2021, 3, 9), new Date(2021, 3, 18), new Date(2021, 3, 9), new Date(2021, 3, 9), "4", 30, null, null, null, null, null),
        new TaskData(7, "Demand analysis", null, null, null, null, "4", 40, "6", null, null, null, 6),
        new TaskData(8, "Customer strength", new Date(2021, 3, 9), new Date(2021, 3, 12), new Date(2021, 3, 12), new Date(2021, 3, 13), "4", 30, "5", null, null, null, 7),
        new TaskData(9, "Market opportunity analysis", new Date(2021, 3, 9), new Date(2021, 3, 12), null, null, "4", null, "5", null, null, null, 7),
        new TaskData(10, "Competitor analysis", new Date(2021, 3, 15), new Date(2021, 3, 18), null, null, "4", 30, "7,8", null, null, null, 6),
        new TaskData(11, "Product strength analysis", new Date(2021, 3, 15), new Date(2021, 3, 18), null, null, "4", 40, "9", null, null, null, 6),
        new TaskData(12, "Research completed", new Date(2021, 3, 18), new Date(2021, 3, 18), null, null, "0", 30, "10", null, null, null, 6),
        new TaskData(13, "Product design and development", new Date(2021, 3, 19), new Date(2021, 4, 16), null, null, "20", null, null, null, null, null, null),
        new TaskData(14, "Functionality design", new Date(2021, 3, 19), new Date(2021, 3, 23), null, null, "4", 30, "12", null, null, null, 13),
        new TaskData(15, "Quality design", new Date(2021, 3, 19), new Date(2021, 3, 23), null, null, "3", 40, "12", null, null, null, 13),
        new TaskData(16, "Define reliability", new Date(2021, 3, 24), new Date(2021, 3, 25), null, null, "4", 30, "15", null, null, null, 13),
        new TaskData(17, "Identifying raw materials", new Date(2021, 3, 24), new Date(2021, 3, 25), null, null, "2", "15", null, null, null, 13),
        new TaskData(18, "Define cost plan", new Date(2021, 3, 26), new Date(2021, 3, 29), null, null, "2", 30, "17", null, null, null, 13),
        new TaskData(19, "Estimate manufacturing cost", new Date(2021, 3, 26), new Date(2021, 3, 29), null, null, "3", 40, "17", null, null, null, 18),
        new TaskData(20, "Estimate selling cost", new Date(2021, 3, 26), new Date(2021, 3, 29), null, null, "3", 30, "17", null, null, null, 18),
        new TaskData(21, "Development of final design", new Date(2021, 3, 30), new Date(2021, 4, 8), null, null, "7", null, null, null, null, null, 13),
        new TaskData(22, "Develop dimensions and design", new Date(2021, 3, 30), new Date(2021, 4, 1), null, null, "4", 30, "19,20", null, null, null, 21),
        new TaskData(23, "Develop designs to meet industry", new Date(2021, 4, 2), new Date(2021, 4, 3), null, null, "3", 40, "22", null, null, null, 21),
        new TaskData(24, "Include all the details", new Date(2021, 4, 6), new Date(2021, 4, 8), null, null, "4", 30, "23", null, null, null, 21),
        new TaskData(25, "CAD - Computer Aided Design", new Date(2021, 4, 9), new Date(2021, 4, 13), null, null, "3", "24", null, null, null, null),
        new TaskData(26, "CAM - Computer Aided Manufacturing", new Date(2021, 4, 14), new Date(2021, 4, 16), null, null, "4", 30, "25", null, null, null, null),
        new TaskData(27, "Finalize the design", new Date(2021, 4, 16), new Date(2021, 4, 16), null, null, "0", 40, "26", null, null, null, null),
        new TaskData(28, "Prototype testing", new Date(2021, 4, 17), new Date(2021, 4, 22), null, null, "4", 30, "27", null, null, null, null),
        new TaskData(29, "Include feedback", new Date(2021, 4, 17), new Date(2021, 4, 22), null, null, "4", null, "28ss", null, null, null, null),
        new TaskData(30, "Manufacturing", new Date(2021, 4, 23), new Date(2021, 4, 29), null, null, "5", 30, "28,29", null, null, null, null),
        new TaskData(31, "Assembling material into finished goods", new Date(2021, 4, 30), new Date(2021, 5, 5), null, null, "5", 40, "30", null, null, null, null),
        new TaskData(32, "Final product development", new Date(2021, 5, 6), new Date(2021, 5, 13), null, null, "6", 30, "31", null, null, null, null),
        new TaskData(33, "Market testing", new Date(2021, 5, 14), new Date(2021, 5, 20), null, null, "4", 30, "32", null, null, null, null),
        new TaskData(34, "Refining", new Date(2021, 5, 21), new Date(2021, 5, 23), null, null, "3", 30, "33", null, null, null, null),
        new TaskData(35, "Market research completion", new Date(2021, 5, 24), new Date(2021, 5, 26), null, null, "0", 30, "34", null, null, null, null)
    ];

    return tasks;
}

window.onload = function () {
    const taskList = ProjectNewData();
    const taskListElement = document.getElementById('task-list');

    taskList.forEach(task => {
        const listItem = document.createElement('li');
        listItem.textContent = `Tarefa ID: ${task.TaskId}, Nome: ${task.TaskName}, Início: ${task.StartDate.toLocaleDateString()}, Fim: ${task.EndDate ? task.EndDate.toLocaleDateString() : 'N/A'}`;
        taskListElement.appendChild(listItem);
    });
};
