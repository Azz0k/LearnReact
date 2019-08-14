import React from 'react';
import About from './About.js'
import TodoItem from './TodoItem'
import TodoData from './TodoData'

class Main extends React.Component{
    constructor(){
        super()
        this.state = {
            todos: TodoData
        }
        this.handleChangeInput= this.handleChangeInput.bind(this)
    }

    handleChangeInput(id){

        this.setState( (state)=>{
            const list = state.todos.map((item) =>{
                if (item.id === id) {

                    item.completed = ! item.completed
                }

                return item


        })

            return {todos: list}
    }
)
}


    render() {


        const items = this.state.todos.map(data => <TodoItem key={data.id} text={data.text} id={data.id} completed={data.completed}
                                                             handleChange={this.handleChangeInput}/>)
            return (

            <div className="description, todo-list">

                {items}
            </div>
    )
}

}

export default Main