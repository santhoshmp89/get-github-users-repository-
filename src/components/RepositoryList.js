import React from 'react';

const RepositoryList = (props) => {
    return(
        <div className="col-sm-4">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.value.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Created Date: {props.value.created_at}</h6>
                    <p className="card-text">{props.value.description}</p>
                </div>
            </div>
        </div>
    )
}

export default RepositoryList;