import React from "react"
import { Link } from "react-router-dom"

import { Trash } from "./Icon"
import type { Todos } from "../App"

type Props = {
  todo: Todos
  onDelete: (id: number) => void
}

const TodoItem: React.FunctionComponent<Props> = ({ todo, onDelete }) => {
  const convertDate = new Date(todo.created_at)
  return (
    <li
      data-cy="activity-item"
      className="p-[1.75rem] flex flex-col h-full w-full rounded-xl bg-white shadow-lg aspect-square"
      key={todo.id}
    >
      <Link to={`/details/${todo.id}`}>
        <h4
          data-cy="activity-item-title"
          className="font-bold text-xl hover:underline cursor-pointer"
        >
          {todo.title}
        </h4>
      </Link>
      <div className="mt-auto flex justify-between">
        <p
          data-cy="activity-item-date"
          className="text-sm text-[#888888]"
        >{`${convertDate.getDate()} ${convertDate.toLocaleString("default", {
          month: "long",
          year: "numeric"
        })}`}</p>
        <button data-cy="activity-item-delete-button" onClick={() => onDelete(todo.id)}>
          <Trash />
        </button>
      </div>
    </li>
  )
}

export default TodoItem
