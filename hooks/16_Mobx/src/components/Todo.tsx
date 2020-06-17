import React from 'react';
import {observer} from 'mobx-react';

type Props = {
  [k: string]: any;
}
const Todo: React.FC<Props> = ({todo}) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.finished}
        onChange={() => (todo.finished = !todo.finished)}
      >
      </input>
      title: {todo.title}
    </li>
  )
}

export default observer(Todo)