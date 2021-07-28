
import { Component } from 'react';


class CreateTask extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id:"",
            name: "",
            status:true
        } 
    }

    onChange = (e) => {
        const name = e.target.name
        let value = e.target.value
        if(name === 'status') {
            value = e.target.value === "true" ? true : false
        } 
         this.setState( {
             [name]:value
         })
    }


    onClick = (e) => {
        e.preventDefault()
        this.props.onSubmit(this.state)
        this.onClear()
        this.props.onCloseForm()
        
    }

    onClear = () => {
        this.setState({
            name:'',
            value:true
        })
    }

    componentDidMount() {
        this.setState({
            id:this.props.task.id,
            name: this.props.task.name,
            status:this.props.task.status
        })
    }

    componentDidUpdate(nextProps){
        if(nextProps.task !== this.props.task) {
            this.setState({
                id:this.props.task.id,
                name: this.props.task.name,
                status:this.props.task.status
            })
        }
    }


    render() {
        return (
            <div className="panel-body">
               
                    <div className="form-group">
                        <label>Tên :</label>
                        <input type="text" className="form-control" value ={this.state.name} onChange ={this.onChange} name = 'name'/>
                    </div>
                    <label>Trạng Thái :</label>
                    <select className="form-control" required="required" value ={this.state.status} onChange ={this.onChange} name ='status'>
                        <option value={true}>Chưa hoàn thành</option>
                        <option value={false}>Hoàn thành</option>
                    </select>
                    <div className="text-center mt-3">
                        <button type="submit" className="btn btn-warning"  onClick = {this.onClick} >Thêm</button>
                        <button type="button" className="btn btn-danger ms-3 " onClick = {this.onClear} >Hủy Bỏ</button>
                    </div>
               
            </div>
        )
    }
}

export default CreateTask;
