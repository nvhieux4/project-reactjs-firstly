
import { Component } from 'react';

class Task extends Component {
    
    onClick = () =>{
        this.props.onUpdate(this.props.task.id)
    }

    onDelete = () => {
       
        this.props.onDelete(this.props.task.id)
    }

    onEdit = () => {
        this.props.onEdit(this.props.task.id)
    }

    render() {
        const {task,index} = this.props
        return (
            <tr>
                <td>{index}</td>
                <td>{task.name}</td>
                <td className="text-center" onClick = {this.onClick}>
                <span className={task.status === true ? 'badge bg-danger' : 'badge bg-success'}>
                        {task.status === true ? "Chưa hoàn thành" : "Hoàn thành"}
                </span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning" onClick = {this.onEdit}>
                        <span className="fa fa-pencil mr-5"></span>Sửa
                    </button>
                    &nbsp;
                    <button type="button" className="btn btn-danger" onClick = {this.onDelete}>
                        <span className="fa fa-trash mr-5"></span>Xóa
                    </button>
                </td>
            </tr>
        )
    }
}

export default Task;
