import React from 'react'
import { DataContext } from '../context/DataContext';


export const TodoForm = () =>{
    const {handleSubmit} = React.useContext(DataContext)
    const inputForm = React.useRef();
    const formRef = React.useRef();

    return (
        <div className="commentForm vert-offset-top-2">
            <hr />
            <div className="clearfix">
                <form  ref={formRef} className="todoForm form-horizontal"  onSubmit={(e)=> handleSubmit(e,{id: 12,descripcion: inputForm.current.value, finalizado: false})}>
                    <div className="form-group">
                        <label htmlFor="task" className="col-md-2 control-label">Task</label>
                        <div className="col-md-10">
                            <input type="text" id="task" ref={inputForm} className="form-control" placeholder="What do you need to do?" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-10 col-md-offset-2 text-right">
                            <input type="submit" value="Save Item" className="btn btn-primary" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}