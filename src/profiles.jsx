import React from 'react';
import Profile from './profile';
import {NavLink,Route} from 'react-router-dom';


const Profiles = (props) => {
    return (
        <div>
            <h1>프로필 목록</h1>
            <ul>
                <li>
                    <NavLink to="/profiles/user1" activeStyle={{background:'black', color:'white'}}>user1</NavLink>
                </li>
                <li>
                    <NavLink to="/profiles/user2" activeStyle={{background:'black', color:'white'}}>user2</NavLink>
                </li>
            </ul>
            <Route path="/profiles" exact render={() => <div>사용자를 선택해주세요</div>}></Route>
            <Route path="/profiles/:username" component={Profile}></Route>
            
        </div>
    )
};

export default Profiles;