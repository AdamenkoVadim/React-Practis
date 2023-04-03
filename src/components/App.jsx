import React,{ Component } from 'react';
/* import Profile from './Profile/profile';
import user from './Profile/user.json';
import Counter from './Counter/Counter' */
/* import Dropdown from './Dropdown/Dropdown'; */
import TodoList from './TodoList';
import initialTodos from 'components/TodoList/todos.json'

class App extends Component {
  state = {
    todos: initialTodos,
    name: 'Vasy',
    phone:'380'
  }

deleteTodo = (todoId) => {
  this.setState(prevState => ({
    todos: prevState.todos.filter(todo => todo.id !== todoId),
  }))
}

hendleInputChange = event => {
  const { name,value } = event.currentTarget;
  this.setState({[name]:value});
}

  render() {
    const { todos } = this.state;
    const comletedTodos = todos.filter(todo => todo.completed);
    /* console.log(comletedTodos.length); */
    return (
      <>
      {/*   {user.map(user => (
         <Profile
            key={user.id}
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
        />
        
        ))}
        <Counter /> */}
        {/* <Dropdown /> */}
        
        <form>
          <label>
            Имя  
            <input 
              type ="text" 
              name ="name"
              value={this.state.inputValue} 
              onChange = {this.hendleInputChange} 
        />
          </label>
          <label>
            Телефон  
            <input 
              type ="text"
              name ="phone" 
              value={this.state.inputValue} 
              onChange = {this.hendleInputChange} 
        />
          </label>
        </form>
       

        <h1>Состояние компонента</h1>
        <p>Total ToDos: {todos.length}</p>
        <p>Total Dan ToDos:{comletedTodos.length}</p>
        <TodoList 
        todos={todos}
        onDeleteTodo = {this.deleteTodo}
        />
      </>
      
     
    );
  }
}
 
export default App;
