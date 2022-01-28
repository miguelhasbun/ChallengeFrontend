import React from 'react'
import {TodoItem} from './TodoItem'
import { DataContext } from '../context/DataContext';

export const TodoList = () =>{
    const { data, setData, handleToggleComplete ,handleNodeRemoval } = React.useContext(DataContext);

    return( 
    <ul className="list-group">
        {
            data.map((todoItem,index) =>{
                return( 
                    <TodoItem 
                    key={index} 
                    nodeId={todoItem.id} 
                    task={todoItem.descripcion} 
                    complete={todoItem.finalizado} 
                    toggleComplete={handleToggleComplete}
                    remove={handleNodeRemoval}
                    />
                )
        })
        }
    </ul>    
    )
}


/* class TodoList extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        const removeNode =  (nodeId) => {
            this.props.removeNode(nodeId);
            return;
        }
        const toggleComplete= (nodeId) => {
            this.props.toggleComplete(nodeId);
            return;
        }

        var listNodes = this.props.data.map(function (listItem) {
			return (
				<TodoItem key={listItem.id} nodeId={listItem.id} task={listItem.task} complete={listItem.complete}/>
			);
		},this);
		return (
			<ul className="list-group">
				{listNodes}
			</ul>
		);
	}
}

export default TodoList; */