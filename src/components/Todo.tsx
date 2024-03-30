import { TTodo } from "../types/types";

export default function ({ todo }: { todo: TTodo }) {
  return <>
    <input type="checkbox" checked={todo.completed} />
    <span>{todo.content}</span>
  </>;
}
