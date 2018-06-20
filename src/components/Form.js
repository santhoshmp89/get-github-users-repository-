import React from 'react';

export default class Form extends React.Component {
    
    inputChange = (e) => {
        this.props.handleChange(e.target.value);
    }

    render() {
        return(
            <form onSubmit = {e => this.props.handleSubmit(e)}>  
                <br /><br />              
                <div className="form-group row">
                    <label htmlFor="colFormLabel" className="col-sm-1 col-form-label">Username</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="colFormLabel" onChange={this.inputChange} value={this.props.value} />
                    </div>
                    <div className="col-sm-3">
                        <button type="submit" className="btn btn-primary mb-2">Submit</button>
                    </div>
                </div>
            </form>
        )
    }
}