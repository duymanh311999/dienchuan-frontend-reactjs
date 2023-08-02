import React, { Component } from 'react';
import { connect } from "react-redux";
import './DetailClinic.scss';
import HomeHeader from '../../HomePage/HomeHeader';
import HomeFooter from '../../HomePage/HomeFooter';
import { getDetailInforItems, getAllItems } from '../../../services/userService';
import * as actions from '../../../store/actions';

class DetailClinic extends Component {

    constructor(props) {
        super(props);
        this.state = {
           isShowDetail: false,
           currentItemId: [],
           itemsRedux: [],
        }
    }


    async componentDidMount() {
        this.props.fetchItemsRedux();
        if (this.props.match && this.props.match.params && this.props.match.params.id) {
            let id = this.props.match.params.id;
            this.setState({
                currentItemId: id
            })

            let res = await getDetailInforItems(id);
            if (res && res.errCode === 0) {
                this.setState({
                    detailItem: res.data,
                })
            }
        }
    }



    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.listItems !== this.props.listItems) {
            this.setState({
                itemsRedux: this.props.listItems
            })
        }
    }

    showHideDetail = (status) =>{
        this.setState({
            isShowDetail: status
        })
    }

    render() {
        let {isShowDetail, detailItem, currentItemId} = this.state;

        let itemsRedux = this.state.itemsRedux;

        console.log('props',itemsRedux)

        return (
         <div>
           <HomeHeader/>
           <div className='section-container-cart'>
                <table id="TableManageItem">
                    <tbody>
                        <tr>
                            <th colSpan='1'>Xóa</th>
                            <th colSpan='1'>Ảnh sản phẩm</th>
                            <th colSpan='1'>Sản phẩm</th>
                            <th colSpan='1'>Đơn giá</th>
                            <th colSpan='1'>Số lượng</th>        
                            <th colSpan='1'>Thành tiền</th>
                        </tr>
                        <tr >
                            <td className='child-1' colSpan='1'><i className="fas fa-trash"></i></td>                     
                            <td className='child-2' colSpan='1'>Anh sản phẩm</td>
                            <td colSpan='1'>{detailItem && detailItem.name ? detailItem.name : ''}</td>
                            <td colSpan='1'>{detailItem && detailItem.priceAfterSale ? detailItem.priceAfterSale : ''} ₫</td>
                            <td className='child-4' colSpan='1'>  
                                <input className="form-control node col-3" type="number"
                                    // value="1"
                                />
                            </td>   
                            <td colSpan='1'>{detailItem && detailItem.priceAfterSale ? detailItem.priceAfterSale : ''} ₫</td>                                        
                        </tr>
                        <tr>
                            <th colSpan='4'>
                                <button className="btn-buyMore" >Mua thêm sản phẩm khác</button>
                                <button className="btn-reset" >Cập nhật lại giá và số lượng</button>
                            </th> 
                            <th colSpan='1'>Tổng tiền</th>        
                            <th colSpan='1'>Thành tiền</th>
                        </tr>
                    </tbody>
                </table>
                <div className='header-customer-infor'>
                 THÔNG TIN KHÁCH HÀNG
                </div>
                <div className='section-container-detial'>     
                        <div className='col-6 form-group'>
                            <div className='header-text'>Thông tin thanh toán</div>
                            <div className="col-12">
                                <label>Họ và tên (<span>*</span>)</label>
                                <input className="form-control" type="text"
                                />
                            </div>
                            <div className="col-12">
                                <label>Địa chỉ (<span>*</span>)</label>
                                <input className="form-control" type="text"
                                />
                            </div>
                            <div className="col-12">
                                <label>Email</label>
                                <input className="form-control" type="text"
                                />
                            </div>
                            <div className="col-12">
                                <label>Số điện thoại (<span>*</span>)</label>
                                <input className="form-control" type="text"
                                />
                            </div>
                        </div>

                        <div className="col-6 form-group">
                            <div className='header-text' >
                                {isShowDetail === false ?  
                                <span onClick={() => this.showHideDetail(true)}> Giao hàng tới địa chỉ khác</span> 
                                : 
                                <span onClick={() => this.showHideDetail(false)}> Giao hàng tới địa chỉ mặc định</span>}          
                                </div>     

                           <div className={isShowDetail === true ? 'show' : 'not-show'}>
                            <div className="col-12">
                                    <label>Họ và tên</label>
                                    <input className="form-control" type="text"
                                    />
                                </div>
                                <div className="col-12">
                                    <label>Địa chỉ</label>
                                    <input className="form-control" type="text"
                                    />
                                </div>
                                <div className="col-12">
                                    <label>Email</label>
                                    <input className="form-control" type="text"
                                    />
                                </div>
                                <div className="col-12">
                                    <label>Số điện thoại</label>
                                    <input className="form-control" type="text"
                                    />
                                </div>                 
                           </div>
                           <div className="col-12">
                                    <label>Ghi chú đơn hàng</label>
                                    <input className="form-control" type="text" style={{height: 80}}
                                    />
                                </div>
                            <div className='col-8'>
                                <form action="/action_page.php">
                                <p>Phương thức thanh toán</p>
                                <input type="radio" id="payment1" name="payment" value="atm"/> <label>Chuyển khoản qua ngân hàng</label><br/>
                                <input type="radio" id="payment2" name="payment" value="cod" checked/> <label>Thanh toán khi giao hàng (COD)</label> <br/>
                                </form>
                            </div>
                        </div>
                </div>
           </div>
           <HomeFooter/>
         </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        listItems: state.admin.items
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchItemsRedux: () => dispatch(actions.fetchAllItemsStart()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailClinic);
