import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Todo from './components/Todo';
import BookTable from './components/BookTable';
import DisplayBoard from './components/DisplayBoard';
import CreateBook from './components/CreateBook';
import { getAllBooks, createBook, getAllTodos, createTodo } from './services/BookService';
import Footer from './components/Footer';

function App() {
  const [bookShelf, setBookShelf] = useState({});
  const [books, setBooks] = useState([]);
  const [numberOfBooks, setNumberBooks] = useState(0);
  const [isClick, setIsClick] = useState(false);
  const [todos, setTodos] = useState([]);
  const [todoList, setTodoList] = useState({});
  const [numberOfTodos, setNumberTodos] = useState(0);

  const handleSubmit = () => {
    createBook(bookShelf).then(() => {
      setNumberBooks(numberOfBooks + 1);
    });
  };

  const getAllBook = () => {
    getAllBooks().then((data) => {
      setBooks(data);
      setNumberBooks(data.length);
    });
  };

  const handleOnChangeForm = (e) => {
    let inputData = bookShelf;
    if (e.target.name === 'book') {
      bookShelf.book = e.target.value;
    } else if (e.target.name === 'category') {
      bookShelf.category = e.target.value;
    } else if (e.target.name === 'author') {
      bookShelf.author = e.target.value;
    }
    setBookShelf(inputData);
  };

  const handleIsClick = () => {
    setIsClick(!isClick);
    getAllTodos().then((data) => {
      console.log(data);
      setTodos(data);
    });
  };

  const handleOnChangeTodoForm = (e) => {
    let inputData = todoList;
    todoList.isComplete = false;
    if (e.target.name === 'todo') {
      todoList.todo = e.target.value;
    } else if (e.target.name === 'category') {
      todoList.category = e.target.value;
    }
    setTodoList(inputData);
  };

  const handleTodoSubmit = () => {
    createTodo(todoList).then(() => {
      console.log('success!');
    });
  };

  return (
    <div className="main-wrapper">
      <div className="main">
        <Header />
        <div className="todo-button">
          <button onClick={handleIsClick}>TODO</button>
        </div>
        {isClick === true ? (
          <Todo todos={todos} onChangeForm={handleOnChangeTodoForm} handleSubmit={handleTodoSubmit} />
        ) : (
          ''
        )}
        <CreateBook bookShelf={bookShelf} onChangeForm={handleOnChangeForm} handleSubmit={handleSubmit} />
        <DisplayBoard numberOfBooks={numberOfBooks} getAllBook={getAllBook} />
        <BookTable books={books} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
