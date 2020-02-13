import React from 'react';
class TaskForm extends React.Component {
    onCloseForm=()=>{
        this.props.onCloseForm();
    }
  render(){
    return (
        <div className="panel panel-warning">
        <div className="panel-heading">
            <h3 className="panel-title">Add work</h3>
        </div>
        <span 
        className="fa fa-times-circle text-right"
        onClick={this.onCloseForm}>
        </span>
        <div className="panel-body">
            <form>
                <div className="form-group">
                    <label>Name :</label>
                    <input type="text" className="form-control" />
                </div>
                <label>Status :</label>
                <select className="form-control" required="required">
                    <option value="1">Enable</option>
                    <option value="0">Hide</option>
                </select>
                <br/>
                <div className="text-center">
                    <button type="submit" className="btn btn-warning">Add</button>&nbsp;
                    <button type="submit" className="btn btn-danger">Cancel</button>
                </div>
            </form>
        </div>
    </div>
  );
  }
}

export default TaskForm;
