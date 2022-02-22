import React from 'react';
import WithRouterSample from './withroutersample';
const profileData = {
    user1:{
        age:'25',
        sex:'man'
    },
    user2:{
        age:'30',
        sex:'woman'
    }
}
const Profile = ({match}) => {
    console.log(match);
    const {username} = match.params;
    const profile = profileData[username];
    if(!profile){
        return <div>존재하지 않는 사용자입니다.</div>
    }
    return (
        <div>
            <h3>{username} ({`${profile.age} ${profile.sex}`})</h3>
            
            <WithRouterSample />
        </div>
    )
};

export default Profile;