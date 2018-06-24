import React from 'react';
import axios from 'axios';
import GithubCreateIssue from "github-create-issue";

const API_KEY = { 'token' : "0afe25d5f3e9a336743dd669d0b6a107f5854565" };

export default class IssueForm extends React.Component {
    constructor() {
        super();

        this.state = {
            title: '',
            comment: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })        
    }

    handleCommentSubmit = (e) => {
        e.preventDefault();
        GithubCreateIssue(`https://api.github.com/repos/${this.props.details.owner.login}/${this.props.details.name}/issues`, 'Big bug.', API_KEY, this.clbk );
        // axios.post(`https://api.github.com/repos/${this.props.details.owner.login}/${this.props.details.name}/issues`, {
        //     "title": "Found a bug",
        //     "body": "I'm having a problem with this."           
        // })
    }

    clbk = ( error, issue, info ) => {
        // Check for rate limit information...
        if ( info ) {
            console.error( 'Limit: %d', info.limit );
            console.error( 'Remaining: %d', info.remaining );
            console.error( 'Reset: %s', (new Date( info.reset*1000 )).toISOString() );
        }
        if ( error ) {
            throw new Error( error.message );
        }
        console.log( JSON.stringify( issue ) );
        // returns <issue_data>
    }

    render() {
        console.log(this.props.details);
        return(
            <form onSubmit={this.handleCommentSubmit}>
                <br />
                <div className="form-row float-right">
                    <div className="col-sm-4 my-1">                        
                        <input type="text"  className="form-control"  placeholder="Title" value={this.state.title} name="title" onChange={this.handleChange} />
                    </div>
                    
                    <div className="col-sm-6 my-1">                        
                        <textarea onChange={this.handleChange} className="form-control"  name="comment" value={this.state.comment} placeholder="Comments" >                        
                        </textarea>                       
                    </div>

                    <div className="col-sm-2 my-1">
                        <button type="submit" className="btn btn-secondary btn-sm">Submit</button>
                    </div>
                </div>
            </form>
           
        )
    }
}