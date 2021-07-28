
import { Component } from 'react';
import Sort from './Sort';
import Search from './Search'

class Control extends Component {
    
    render() {
        return (
            <div className="row"> 
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <Search onFilter = {this.props.onFilter} />
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <Sort onSort ={ this.props.onSort } />
                </div>
            </div>
        )
    }
}

export default Control;
