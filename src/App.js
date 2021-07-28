import React, { Component } from 'react';
import './App.css';
import CreateTask from './components/CreateTask';
import Control from './components/Control';
import TaskList from './components/TaskList';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
             tasks : [],
             isDisplayForm : false,
             edit: '',
             filter: {
                 name:"",
                 status: -1
             },
             sort:''
        }
    }
    
    onClickData = ()=> {

        this.setState({
            isDisplayForm : !this.state.isDisplayForm
        })


    }

    componentDidMount() {
        if(localStorage && localStorage.getItem('tasks')) {
            const tasks = JSON.parse(localStorage.getItem('tasks'))
            this.setState({
                tasks:tasks
            })
        }
    }

    onSubmit = (data) => {
        const {tasks} = this.state
        if(data.id === ''){
            data.id = Math.floor(Math.random()*1000)
            tasks.push(data)
            this.setState({
                tasks:tasks
            })
        }else {
            tasks.forEach((item,index) => {
                if(item.id === data.id){
                    tasks[index] = data
                }
            })
        }
        
        this.setState({
            tasks:tasks
        })
        localStorage.setItem('tasks',JSON.stringify(tasks))
    }

    closeForm = () => {
        this.setState({
            isDisplayForm : false
        })
    }

    onUpdate = (id) =>{
        const {tasks} = this.state
        tasks.forEach(item => {
            if(item.id === id){
                item.status = !item.status
                return
            }
        })
        this.setState({
            tasks:tasks
        })
        localStorage.setItem('tasks',JSON.stringify(tasks))
    }

    onDelete =(id) =>{
        const {tasks} = this.state
        const newTasks = tasks.filter(item => item.id !== id)
        this.setState({
            tasks:newTasks
        })
        localStorage.setItem('tasks',JSON.stringify(newTasks))
    }

    onEdit = (id) => {
        const {tasks} = this.state
        const task = tasks.find(item => item.id === id)
        this.setState({
            isDisplayForm: true,
            edit:task
        })
        
    }

    onFilter = (name,value)=>{
        const status = Number(value)
        this.setState({
            filter:{
                name: name,
                status:status
            }
        })
    }

    handFilter = (key) =>{
        this.setState({
            filter:{
                name: key,
            }
        })
    }

    handSort = (value) => {
        this.setState({
            sort:value
        })
    }

    render() {
        let { tasks ,isDisplayForm,edit,filter,sort} = this.state

        if(filter.name){
            tasks = tasks.filter(task => task.name.toLowerCase().indexOf(filter.name.toLowerCase()) !== -1)
        }

        if(filter.status) {
            tasks = tasks.filter(task => {
                if(filter.status === -1){
                    return task
                } else {
                    return !!filter.status === !!task.status 
                }
            })
        }

        if(sort) {
            tasks.sort((a, b) => {
                if(a.name > b.name) return sort;
                else return -sort;
            })
        }
        const isDisplay = isDisplayForm ? <CreateTask onSubmit = {this.onSubmit} onCloseForm = {this.closeForm} task = {edit}/> : ""
        return (
            <div className="container">
                <h2 className ="text-center">Danh sách quản lý công việc</h2>
                <div className="row mt-3">
                    <div className={isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}>
                        {isDisplay}
                    </div>
                    <div className ={isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                        <button type="button" className="btn btn-primary mb-3" onClick = {this.onClickData} >
                            <span className="fa fa-plus mr-5" ></span>Thêm Công Việc
                        </button>
                        <Control  onFilter = {this.handFilter} onSort = {this.handSort}/>
                        <div className="row mt-5 ">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <TaskList tasks = {tasks} onUpdate = {this.onUpdate} onDelete = {this.onDelete} onEdit = {this.onEdit} onFilter = {this.onFilter}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
