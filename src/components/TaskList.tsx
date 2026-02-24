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
    onArchiveTask,
  };

  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );

  if (loading) {
    return (
      <div className="list-items" data-testid="loading" key={"loading"}>
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }
  if (tasks.length === 0) {
    return (
      <div className="list-items" data-testid="empty" key={"empty"}>
        <div className="wrapper-message">
          <span className="icon-check" />
          <p className="title-message">You have no tasks</p>
          <p className="subtitle-message">Sit back and relax</p>
        </div>
      </div>
    );
  }
  const taskInOrder = [
    ...tasks.filter((t)=> t.state === "TASK_PINNED"),
    ...tasks.filter((t)=> t.state === "TASK_INBOX"),
    ...tasks.filter((t)=> t.state === "TASK_ARCHIVED"),
   
  ]
  return (
    <div className="list-item">
      {taskInOrder.map((task) => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  );
}
