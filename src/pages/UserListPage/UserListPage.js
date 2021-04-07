import React, { Component } from 'react';
import UserList from '../../components/UserList/UserList'
import UserItems from '../../components/UserItems/UserItems'
import {connect} from 'react-redux'
import callApi from '../../utils/apiCaller';
import {actFetchUserReq} from '../../actions/actUser';

class UserListPage extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         users:[]
    //     }
    // }

    componentDidMount(){
        // callApi('users','GET',null)
        // .then(res=>{
        //     this.setState({
        //         users:res.data
        //     })
        // })
        this.props.fetchAllUsers();
    }

    showUser(users) {
        var result= null;
        if(users.length > 0){
            result = users.map((user,index)=>{
                return (
                    <UserItems
                        key={index}
                        user={user}
                        index={index}
                        onDelete={this.onDelete}
                    />
                )
            })
        }
        return result;
    }

    onDelete = (id) => {
        var {users} = this.state;
        callApi(`users/${id}`,'DELETE',null)
        .then(res =>{
            if(res.status === 200){
                users = users.filter(user => user.id!== id);
                this.setState({
                    users:users
                })
            }
        })    
    }

    render() {
        var {users} = this.props;
        // var {users} = this.state;
        
        return (
            <div>
                <div className="flex-grid">
                    <UserList>
                        {this.showUser(users)}
                    </UserList>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        users: state.users
    }
}

const mapDispatchToProps = (dispatch, props)=>{
    return {
        fetchAllUsers:  () => {
            dispatch(actFetchUserReq())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (UserListPage);