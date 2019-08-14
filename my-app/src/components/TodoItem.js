import React from 'react'

class TodoItem extends React.Component{
    constructor(props){
        super()
        this.state = {
            id : props.id,
            completed : props.completed
        }


    }



    render() {
        const completedStyle = {
            fontstyle : "italic",
            textDecoration : "line-through",
            color : "#cdcdcd"
        }

        return (
            <div className="todo-item" id={this.props.id} >
                <input type="checkbox" checked={this.props.completed} onChange={()=>this.props.handleChange(this.state.id)}/>

                    <p style={this.props.completed ? completedStyle: null}>{this.props.text}</p>



            </div>
        )
    }
}

export default TodoItem