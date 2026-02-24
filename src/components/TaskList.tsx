import type { TaskData } from "../types";

import Task from "./Task";

type TaskListProps = {
  loading?: boolean;
  tasks: TaskData[];
  onArchiveTask: (id: string) => void;
  onPinTask: (id: string) => void;
};

export default function TaskList({
    loading = false,
    tasks,
    onPinTask,
    onArchiveTask,
}: TaskListProps) {
    const events = {
        onPinTask,
        onArchiveTask
    };

    if(loading){
        return <div className="list-items">loading</div>
    }
    if(tasks.length === 0){
        return <div className="list-items">empty</div>
    }

    return (
        <div className="list-item">
            {tasks.map(task=>(
                <Task key={task.id} task={task} {...events}/>
            ))}
        </div>
    )
}