// import React, { Component } from 'react';
// // import callApi from '../../utils/apiCaller';
// import {Link} from 'react-router-dom';

// class UserActionPage extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             id:'',
//             name:'',
//             address:'',
//             phone:''
//         }
//     }


//     onChange =  (e) => {
//         const target = e.target;
//         const name = target.name;
//         const value = target.type === 'checkbox' ? target.checked : target.value;
//         this.setState({
//             [name]:value
//         })
//     }

    
//     componentDidMount(){
//         var {match} = this.props;
//         if(match){
//             var id = match.params.id;
//             callApi(`users/${id}`,'GET',null)
//             .then(res =>{
//                 var data= res.data;
//                 this.setState({
//                     id:data.id,
//                     name:data.name,
//                     address:data.address,
//                     phone:data.phone
//                 })
//             })
//         }
//     }


//     onSave = (e) => {
//         const {history} = this.props;
//         const {id} = this.state;
//         e.preventDefault();
//         // console.log(this.state);
//         if(id){//neu dung thi se update 
//             callApi(`users/${id}`,'PUT',{
//                 name:this.state.name,
//                 address:this.state.address,
//                 phone:this.state.phone
//             }).then(res => {
//                 // console.log(res);
//                 history.goBack();
//             })
            

//         }else{//neu co roi thi se them moi
//             callApi('users', 'POST',{
//                 name:this.state.name,
//                 address:this.state.address,
//                 phone:this.state.phone
//             }).then(res => {
//                 // console.log(res);
//                 history.goBack();
//             })
//         }
//     }


//     render() {

//         const {name,address,phone} = this.state;

//         return (
//             <div className="mt-4">
//             <h3>Quản lý khách hàng</h3>
//             <form method="POST" action="" onSubmit={this.onSave}>
//             <div className="form-group">
//                 <label htmlFor="exampleInputEmail1">Tên khách hàng</label>
//                 <input type="text" className="form-control" value={name} name="name" onChange={this.onChange} />
//             </div>
//             <div className="form-group">
//                 <label htmlFor="exampleInputEmail1">Địa chỉ</label>
//                 <input  type="text"  className="form-control" value={address} name="address" onChange={this.onChange} />
//             </div>
//             <div className="form-group">
//                 <label htmlFor="exampleInputEmail1">Sđt</label>
//                 <input type="text" className="form-control" value={phone} name="phone" onChange={this.onChange} />
//             </div>
//             <Link to="/user-list" className="btn btn-primary mr-2">Trở về</Link>
//             <button type="submit" className="btn btn-primary">Lưu lại</button>
//             </form>
//         </div>
//         );
//     }
// }

// export default UserActionPage;