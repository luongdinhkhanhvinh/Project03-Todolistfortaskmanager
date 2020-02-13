import React from 'react';
import TaskItem from './TaskItem';
class TaskList extends React.Component {
  render(){
    var {task}=this.props;
    var elmTasks=task.map((task,index)=>{
    return <TaskItem key={task.id} index={index} task={task} />
    });
    return (  <div className="row mt-15">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th className="text-center">STT</th>
                                    <th className="text-center">Name</th>
                                    <th className="text-center">Status</th>
                                    <th className="text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td>
                                        <input type="text" className="form-control" />
                                    </td>
                                    <td>
                                        <select className="form-control">
                                            <option value="-1">All</option>
                                            <option value="0">Hide</option>
                                            <option value="1">Enable</option>
                                        </select>
                                    </td>
                                    <td></td>
                                </tr>
                                {elmTasks}
                                
                            </tbody>
                        </table>
                    </div>
                </div>
                    
  );
  }
}

export default TaskList;
