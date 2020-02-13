import React from 'react';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      task:[]
    }
  }
  componentWillMount(){
   if(localStorage && localStorage.getItem('task')){
     var task =JSON.parse(localStorage.getItem('task'));
     this.setState({
       task:task
     });
   }
  }
  onGenarateData=()=>{
    var task =[
      {
        id:this.genarateID() ,
        status:true,
        name:'Learning Programming'
      },
      {
        id:this.genarateID(),
        status:false,
        name:'Go Swimming'
      },
      {
        id:this.genarateID(),
        status:true,
        name:'Go to beed'
      }
    ];
    this.setState({
      task:task
    });
    localStorage.setItem('task',JSON.stringify(task))
  }
  s4(){
    return Math.floor((1+Math.random()) *0x10000).toString(16).substring(1);
  }
  genarateID(){
    return this.s4()+this.s4()+'-'+this.s4()+'-'+this.s4()+'-'+this.s4()+'-'+this.s4()+'-'+this.s4()+'-'+this.s4();
  }
  render(){
    var {task}=this.state;
    return (
      <div className="container">
        <div className="text-center">
            <h1>Manager Work </h1>
            <hr/>
        </div>
        <div className="row">
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              {/* Form */}
                <TaskForm/>
            </div>
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                <button type="button" className="btn btn-primary">
                    <span className="fa fa-plus mr-5"></span>Add Work
                </button>
                <button 
                type="button" 
                className="btn btn-danger ml-5"
                onClick={this.onGenarateData}
                >
                    <span className="fa fa-plus mr-5"></span>Genarate Data
                </button>
                  {/* Control */}
                    <Control/>
                  {/* TaskList */}
                    <TaskList task={task}/>
                    
            </div>
        </div>
    </div>
  );
  }
}

export default App;
