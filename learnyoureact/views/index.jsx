import React from 'react';

export default class TodoBox extends React.Component {
    render() {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> properties are from the server
    return (
      <div className="todoBox">
        <h1>Todos</h1>
        <TodoList data = {this.props.data} />
        <TodoForm />
      </div>
    );
  }
<<<<<<< HEAD
}

class TodoList extends React.Component {
    render() {
    var todo = this.props.data.map(function(obj) { return <Todo title={obj.title} key={obj.title}>{obj.detail}</Todo>});
    return (
      <div className = "todoList">
        <table style={{border: "2px solid black"}}>
          <tbody>
            {todo}
          </tbody>
        </table>
      </div>
    );
  }
}

class Todo extends React.Component {
	// Write code here
	constructor(props) {
		super(props);
		this.state = {checked: false};
	}

	handleChange(e) {
		this.setState({checked: e.target.checked});
	}

	render() {
		return (
			<tr>
				<td style={{border: "1px solid black"}}>
					<input type="checkbox" checked={this.state.checked} onChange={this.handleChange}/>
				</td>
				<td style={{border: "1px solid black"}}>{this.props.title}</td>
				<td style={{border: "1px solid black"}}>{this.props.children}</td>
			</tr>
		);
	}
}

Todo.propTypes = {
	title: React.PropTypes.string.isRequired
};

=======
        return (
            <div className="todoBox">
                <h1>Todos</h1>
                <TodoList />
                <TodoForm />
            </div>
        );
    }
=======
>>>>>>> properties are from the server
}

class TodoList extends React.Component {
    render() {
    var todo = this.props.data.map(function(obj) { return <Todo title={obj.title} key={obj.title}>{obj.detail}</Todo>});
    return (
      <div className = "todoList">
        <table style={{border: "2px solid black"}}>
          <tbody>
            {todo}
          </tbody>
        </table>
      </div>
    );
  }
}

<<<<<<< HEAD
>>>>>>> initial commit, learnyoureact started
=======
class Todo extends React.Component {
	// Write code here
	constructor(props) {
		super(props);
		this.state = {checked: false};
	}

	handleChange(e) {
		this.setState({checked: e.target.checked});
	}

	render() {
		return (
			<tr>
				<td style={{border: "1px solid black"}}>
					<input type="checkbox" checked={this.state.checked} onChange={this.handleChange}/>
				</td>
				<td style={{border: "1px solid black"}}>{this.props.title}</td>
				<td style={{border: "1px solid black"}}>{this.props.children}</td>
			</tr>
		);
	}
}

<<<<<<< HEAD
>>>>>>> props passed
=======
Todo.propTypes = {
	title: React.PropTypes.string.isRequired
};

>>>>>>> proptypes passed
class TodoForm extends React.Component {
  // Write code here
  render() {
  	return (
	  <div className="todoForm">
	  	I am a TodoForm.
	  </div>
  	);
  }
}

<<<<<<< HEAD
<<<<<<< HEAD
let style = {
	checkedTodo: {
		textDecoration: "line-through"
	},
	notCheckedTodo: {
		textDecoration: "none"
	},
=======
let style = {
<<<<<<< HEAD
>>>>>>> style passed
=======
	checkedTodo: {
		textDecoration: "line-through"
	},
	notCheckedTodo: {
		textDecoration: "none"
	},
>>>>>>> ...pass
	tableContent: {
		border: "1px solid black"
	}
};
<<<<<<< HEAD
=======
>>>>>>> initial commit, learnyoureact started
=======
>>>>>>> style passed
