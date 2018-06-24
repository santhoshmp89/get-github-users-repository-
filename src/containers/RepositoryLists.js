import React, {Fragment} from 'react';
import axios from 'axios';
import Form from '../components/Form';
import RepositoryList from '../components/RepositoryList';
import Profile from '../components/Profile';

export default class RepositoryLists extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            repositoryLists: [],
            showLoader: false
        }
    }

    handleChange = (value) => {
        this.setState({
            term: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        axios.get(`https://api.github.com/users/${this.state.term}/repos`)
        .then((response) => {            
            this.setState({
                repositoryLists: response.data
            })
        })
        .catch((error) => {
            console.log(error);
        });
    }

    render() {
        const repositoryLists = this.state.repositoryLists;
        return(
            <div className="container">
                <div className="col-sm-12">
                    <Form value={this.state.term} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                    <div className="row">
                        { repositoryLists.length > 0 && 
                            <Fragment>  
                                <Profile value={this.state.repositoryLists[0]} />
                                <div className="col-sm-8">
                                    <div className="card">
                                        <div className="card-header">
                                            Repository Lists
                                        </div>
                                        <ul className="list-group list-group-flush">                                       
                                            {this.state.repositoryLists.map(val => <RepositoryList value={val}/>)}
                                        </ul>
                                    </div>
                                </div>
                                <br />
                            </Fragment>                           
                        }
                    </div>
                </div>
            </div>
        )
    }
}