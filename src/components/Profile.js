import React from 'react';

const Profile = (props) => {
    console.log(props)
    return(
    <div className="col-sm-4">
        <div className="card">
            <img className="card-img-top" src={props.value.owner.avatar_url} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{props.value.owner.login}</h5>                
            </div>

            <div className="card-body pull-right">
                <a href={props.value.owner.url} className="card-link float-right">Visit Github Profile</a>            
            </div>
        </div>
    </div>
      
    )
}

export default Profile;