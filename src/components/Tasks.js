import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => {
    //state is immutable - you basically make a new one and send it down
    //so stuff like tasks.push() wouldn't work
    

    return (
        <>
            {tasks.map((task) => (
                <Task 
                key={task.id} 
                task={task} 
                onDelete={onDelete}
                onToggle={onToggle}
                 />
            ))}
        </>
    )
}

export default Tasks
