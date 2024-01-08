import React from "react";
import "./Task.styles.css";

interface Task {
  id: string;
  title: string;
  state: string;
}

const Task = React.forwardRef<
  HTMLDivElement,
  {
    task: Task;
    onArchiveTask?: (id: string) => void;
    onPinTask?: (id: string) => void;
  }
>(({ task: { id, title, state }, onArchiveTask, onPinTask }, ref) => {
  return (
    <div className={`list-item ${state}`} ref={ref}>
      <label
        htmlFor="checked"
        aria-label={`archiveTask-${id}`}
        className="checkbox"
      >
        <input
          type="checkbox"
          disabled={true}
          name="checked"
          id={`archiveTask-${id}`}
          checked={state === "TASK_ARCHIVED"}
        />
        <span
          className="checkbox-custom"
          onClick={() => onArchiveTask && onArchiveTask(id)}
        />
      </label>

      <label htmlFor="title" aria-label={title} className="title">
        <input
          type="text"
          value={title}
          readOnly={true}
          name="title"
          placeholder="Input title"
        />
      </label>

      {state !== "TASK_ARCHIVED" && (
        <button
          className="pin-button"
          onClick={() => onPinTask && onPinTask(id)}
          id={`pinTask-${id}`}
          aria-label={`pinTask-${id}`}
          key={`pinTask-${id}`}
        >
          <span className={`icon-star`} />
        </button>
      )}
    </div>
  );
});

export default Task;
