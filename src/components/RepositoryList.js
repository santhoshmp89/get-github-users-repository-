import React from 'react';
import IssueForm from '../components/IssueForm';

class RepositoryList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showIssues: false
        }
    }

    showIssueForm = () => {
        this.setState({
            showIssues: !this.state.showIssues
        })
    }

    render() {
        return (
            <li className="list-group-item">
                {this.props.value.name} 
                    <span>
                        <button  type="button" className="btn btn-warning float-right btn-sm" onClick={this.showIssueForm}>Create Issue</button>
                    </span>
                {this.state.showIssues &&
                    <IssueForm details={this.props.value} />
                }
            </li>
        )
    }
    
}

export default RepositoryList;