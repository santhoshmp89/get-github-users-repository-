import React from 'react';
import axios from 'axios';
import Form from '../components/Form';
import RepositoryList from '../components/RepositoryList';

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
        return(
            <div className="container">
                <div className="col-sm-12">
                    <Form value={this.state.term} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                    <div className="row">
                        {this.state.repositoryLists.map(val => <RepositoryList value={val}/>)}
                    </div>
                </div>
            </div>
        )
    }
}