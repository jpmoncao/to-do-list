let pendingTasks = []

function registerTask() {
    let task = document.getElementById("task").value
    pendingTasks.push(task)
    console.log(pendingTasks)
}