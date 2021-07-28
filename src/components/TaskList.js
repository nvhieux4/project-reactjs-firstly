
import { Component } from 'react';
import Task from './Task';

class TaskList extends Component {
    constructor(props){
        super(props)
        this.state = {
            filterName:"",
            filterStatus: -1
        }
    }

    onChange = (e) =>{
        const name = e.target.name
        const value = e.target.value
        this.setState({
            [name] : value
        })
        this.props.onFilter(name === "filterName" ? value : this.state.filterName,name === "filterStatus" ? value : this.state.filterStatus)
    }
    
    render() {
        const {tasks} = this.props
        const {filterName,filterStatus} = this.state
        const taskItem = tasks.map((task,index) => <Task key ={task.id} index = {index} task = {task} onUpdate = {this.props.onUpdate} onDelete = {this.props.onDelete} onEdit = {this.props.onEdit}/> )
        return (
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th className="text-center">STT</th>
                        <th className="text-center">Tên</th>
                        <th className="text-center">Trạng Thái</th>
                        <th className="text-center">Hành Động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>
                            <input type="text" className="form-control" name ="filterName" onChange={this.onChange} value = {filterName} />
                        </td>
                        <td>
                            <select className="form-control" name ="filterStatus" onChange={this.onChange} value={filterStatus}>
                                <option value="-1">Tất Cả</option>
                                <option value="0">Hoàn thành</option>
                                <option value="1">Chưa hoàn thành</option>
                            </select>
                        </td>
                        <td></td>
                    </tr>
                    {taskItem }
                </tbody>
            </table>
        )
    }
}

export default TaskList;
