// durl여기 확인하기

import React from 'react';

const Todo = ({ todos, onChangeForm, handleSubmit }) => {
  if (todos.length === 0) return null;

  return (
    <>
      <div className="form-wrapper todo-wrapper">
        <div className="form todo">
          <form>
            <div className="input-group">
              <label>todo</label>
              <input type="text" onChange={(e) => onChangeForm(e)} name="todo" placeholder="todo" />
            </div>
            <div className="input-group">
              <label>category</label>
              <input type="text" onChange={(e) => onChangeForm(e)} name="category" placeholder="category" />
            </div>
            <button className="submit-button" onClick={() => handleSubmit()}>
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="table-wrapper">
        <div className="table-box">
          <h2>My Todos</h2>
          <div className="table-scroll">
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Todo</th>
                  <th>Category</th>
                  <th>complete</th>
                </tr>
              </thead>
              <tbody>
                {todos.map((todo) => {
                  return (
                    <tr key={todo.id} className={todo.id % 2 === 0 ? 'odd' : 'even'}>
                      <td>{todo.id}</td>
                      <td>{todo.todo}</td>
                      <td>{todo.category}</td>
                      <td>{todo.isComplete === true ? 'O' : 'X'}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
