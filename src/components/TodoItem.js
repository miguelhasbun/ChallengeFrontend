
import React from 'react'

export const TodoItem = ({nodeId,task,complete, toggleComplete,remove}) => {
    return (
        <li className={complete ? 'list-group-item-success': 'list-group-item clearfix' }> 
			{task}
			<div className="pull-right" role="group">
				<button type="button" className="btn btn-xs btn-success img-circle" onClick={() => toggleComplete(nodeId)}>&#x2713;</button> 
                <button type="button" className="btn btn-xs btn-danger img-circle" onClick={() => remove(nodeId)} >&#xff38;</button>
			</div>
		</li>
    )
}