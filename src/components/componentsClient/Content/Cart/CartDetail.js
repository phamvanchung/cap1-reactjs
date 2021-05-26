import React, { Component } from 'react';
import Search from '../Search/Search';
import './Detail.scss';
import { connect } from 'react-redux';
import {actGetPostByIdReq} from '../../../../actions/actPosts';

class CartDetail extends Component {

    componentDidMount() {
        const { match } = this.props;
        if (match) {
            const {postId} = match.params;
            this.props.getPostById(postId);
        }
      }

    addToCart =  (posts) => {
    if(this.props.login.isLogin === true) {
        
        this.props.history.push('/my-order');
    }else{
        this.props.history.push('/login')
        }
    }
    
    showDetailPost = (posts) => {
        if(posts){
            return(
            <div>
                <div className="information_shop">
                <div className="info_name_icon">
                    <h1 className="infor_shopName">{posts.name}</h1>
                </div>
                <div className="form_dn">
                    <button onClick={()=>this.addToCart(this.props.detailPost)} className="btn btn-info button">Đặt Ngay</button>
                </div>
                </div>
                <div className="infor_image-wrapper">
                    <img className="infor_image_1" src={posts.avatar} alt="img" />
                </div>
                <div className="infor_content">
                    <h2 className="top_pick_heading">Mô tả cửa hàng</h2>
                    <p className="context">
                        {posts.description}
                    </p>
                    <p className="top_pick_heading">Hotline: {posts.phone}</p>
                </div>
            </div>
            )
        }
    }
   
                    
    render() {
        return (
            <div className="grid">
            <div className="grid__full-width">
            <div className="grid__row">
                <div className="gird_colum_1">
                <Search/>
                </div>
                <div className="gird_colum_2 ">

                    {this.showDetailPost(this.props.detailPost)}

                    <div className="infor_context">
                        <p className="vehicle_label">Loại phương tiện</p>
                        <div className="vehicle_list">
                        <div className="vehicle_item">
                        <p className="vehicle_name">Xe Tay Ga</p>
                        <img src="data:image/jpeg;base64,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" alt="" className="vehicle_image" />
                    </div>
                    <div className="vehicle_item">
                        <p className="vehicle_name">Xe Tay Côn</p>
                        <img src="data:image/jpeg;base64,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" alt="" className="vehicle_image" />
                    </div>
                    <div className="vehicle_item">
                        <p className="vehicle_name">Xe Số</p>
                        <img src="https://giaxe.2banh.vn/cache/dataupload/products/thumbs/266_204_1541406201-86024cad1e83101d97359d7351051156-392-1.png" alt="" className="vehicle_image" />
                    </div>
                    </div>
                    <div className="evaluate_list">
                    <div className="evaluate_column">
                    <p className="evaluate_category">Đánh giá của khách</p>
                        <div className="bar">
                        <div className="info">
                            <span>Nhân viên phục vụ</span>
                            <span>95%</span>
                        </div>
                        <div className="line nv" />
                        </div>
                        <div className="bar">
                        <div className="info">
                            <span>Tiện nghi</span>
                            <span>85%</span>
                        </div>
                        <div className="line tn" />
                        </div>
                        <div className="bar">
                        <div className="info">
                            <span>Sạch sẽ</span>
                            <span>80%</span>
                        </div>
                        <div className="line sx" />
                        </div>
                        <div className="bar">
                        <div className="info">
                            <span>Thoải mái</span>
                            <span>80%</span>
                        </div>
                        <div className="line tm" />
                        </div>
                        <div className="bar">
                        <div className="info">
                            <span>Đáng giá tiền</span>
                            <span>75%</span>
                        </div>
                        <div className="line gt" />
                        </div>
                    </div>
                    </div>
                    <div className="evaluate_comment">
                    <p className="evaluate_label">Đọc xem khách yêu thích điều gì nhất:</p>
                    <div className="user_comment">
                        <ul className="user_comment_list">
                        <li className="user_comment_item">
                            <div className="user_infor">
                            <div className="user_avatar">
                                <img src="https://scontent-hkg4-2.xx.fbcdn.net/v/t1.6435-9/189185753_1843633905821342_4424451760013821227_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=bi5hvkJEkwUAX99Uq6Q&_nc_ht=scontent-hkg4-2.xx&oh=de6d125615c6383e38968c8040cc4625&oe=60D2A3F2" alt="" className="avatar_img" />
                            </div>
                            <div className="user_name">Huyền</div>

                            </div>
                            <div className="user_review">
                            <p>"Great service, reasonable price, I will most definitely come back next time if I have a problem"</p>
                            </div>
                        </li>
                        <li className="user_comment_item">
                            <div className="user_infor">
                            <div className="user_avatar">
                                <img src="https://scontent.fdad2-1.fna.fbcdn.net/v/t1.6435-9/185023900_1836140239904042_3046220796629891909_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=730e14&_nc_ohc=3CgKwuvEhscAX9ZGZ2t&_nc_oc=AQnwUTOHYru2ms2flaXOItwBtkcTbAw4U00Jn65R-6GNYwEE10Oy0aSg8yJ_qMd_a3Ix5S3NCykI-lDHLuLxRlkH&_nc_ht=scontent.fdad2-1.fna&oh=17a3efb69fa2a788d4cdeab8d8303577&oe=60CFE5CC" alt="" className="avatar_img" />
                            </div>
                            <div className="user_name">My</div>

                            </div>
                            <div className="user_review">
                            <p>"Fast, convenient, I'm very satisfied"</p>
                            </div>
                        </li>
                        <li className="user_comment_item">
                            <div className="user_infor">
                            <div className="user_avatar">
                                <img src="https://scontent.fdad2-1.fna.fbcdn.net/v/t1.6435-9/134983071_1324152301293743_5531899446354479510_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=174925&_nc_ohc=AGfFErM1mZIAX_mwmft&_nc_ht=scontent.fdad2-1.fna&oh=809cdacf2384171c0d991c6dcee255af&oe=60D0BB8A" alt="" className="avatar_img" />
                            </div>
                            <div className="user_name">Hoa</div>
                            </div>
                            <div className="user_review">
                            <p>"More then awesome"</p>
                            </div>
                        </li>
                        </ul>
                    </div>
                    <div className="cmt">
                        <div className="form_cmt">
                        <form>
                            <p className="text_cmt">Review Of User:</p>
                            <textarea cols={50} rows={3} className="content_cmt" />
                            <button className="btn-sub">Submit</button>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        );
    }
}

const mapStateToProps=(state)=>({
    detailPost: state.itemEditing,
    login: state.auth
})
const mapDispatchToProps = (dispatch) =>({
    getPostById: (postId)=>{
        dispatch(actGetPostByIdReq(postId))
    }
})

export default connect(mapStateToProps,mapDispatchToProps) (CartDetail);