import React, { Component } from 'react';
import {connect} from 'react-redux';
import UserList from '../../../components/UserList/UserList';
import UserItems from '../../../components/UserItems/UserItems';
import {actFetchUserReq,actDeleteUserReq} from '../../../actions/actUser';

class AllUserPage extends Component {

    showUserItems(users){
        var result = null;
        if(users.length > 0){
            result = users.map((user, index)=>{
                return(
                    <UserItems
                        key={index}
                        user={user}
                        index={index}
                        onDeleteUser= {this.onDeleteUser}
                    />
                )
            })
        }
        return result;
    }

    onDeleteUser = (userId) => {
        this.props.onDelete(userId);
    }

    componentDidMount() {
        this.props.fetchAllUsers();
    }
    
    render() {
        var {users} = this.props;
        return (
            <div>
                <div className="flex-grid">
                    <UserList>
                        {this.showUserItems(users)}
                    </UserList>
                </div> 
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        users:state.users
    }
}

const mapDispatchToProps = (dispatch, props) =>{
    return{
        fetchAllUsers: (user) =>{
            dispatch(actFetchUserReq(user))
        },
        onDelete: (userId) =>{
            dispatch(actDeleteUserReq(userId))
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps) (AllUserPage);