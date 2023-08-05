import React, { useState, useEffect} from 'react';
import { connect } from "react-redux";
import './DetailClinic.scss';
import HomeHeader from '../../HomePage/HomeHeader';
import HomeFooter from '../../HomePage/HomeFooter';
import { getDetailInforItems, getAllItems } from '../../../services/userService';
import * as actions from '../../../store/actions';
import { useCart } from 'react-use-cart';

const DetailClinic = (props) => {   
    const [defaultAddress, setDefaultAddress] = useState(false)

    const {
        isEmpty,
        cartTotal,
        items,
        totalItems,
        updateItemQuantity,
        removeItem,
        emptyCart,
      } = useCart();

      const returnToHome = () => {
        if (props.history) {
            props.history.push(`/home`)
        }    
      } 
     
        return (
         <div>
           <HomeHeader/>
           <div className='section-container-cart'>
                <h1>{isEmpty ? 'Khong co san pham' : 'Gio hang'}</h1>
                <table id="TableManageItem">
                {!isEmpty ?    
                    <tbody >
                        <tr>
                            <th colSpan='1'>Xóa</th>
                            <th colSpan='1'>Ảnh sản phẩm</th>
                            <th colSpan='1'>Sản phẩm</th>
                            <th colSpan='1'>Đơn giá</th>
                            <th colSpan='1'>Số lượng</th>        
                            <th colSpan='1'>Thành tiền</th>
                        </tr>
                    {items.map((item, index) => {
                        let amount = item.price * item.quantity;
                        return (     
                                <tr key={index}>
                                    <td 
                                        className='child-1' 
                                        colSpan='1'
                                        onClick={() => removeItem(item.id)}
                                    >
                                            <i className="fas fa-trash"></i>
                                    </td>                     
                                    <td 
                                        className='image child-2' 
                                        colSpan='1'
                                        style={{ backgroundImage: `url(${item.image})`}}               
                                    >   
                                    </td>
                                    <td colSpan='1'>{item.name}</td>
                                    <td colSpan='1'>{item.price} ₫</td>
                                    <td className='child-4' colSpan='1'>
                                        {item.quantity}
                                        <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                                        <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                                    </td>   
                                    <td colSpan='1'>{amount} ₫</td>                                        
                                </tr>
                        )
                    })}  
                              
                                <tr>
                                    <th colSpan='4'>
                                        <button 
                                            className="btn-buyMore"
                                            onClick={() => returnToHome()} 
                                        >
                                            Mua thêm sản phẩm khác
                                        </button>
                                        <button 
                                            className="btn-reset" 
                                            onClick={() => emptyCart(items.id)}
                                        >
                                            Dọn dẹp giỏ hàng
                                        </button>
                                    </th> 
                                    <th colSpan='1'>Tổng tiền</th>        
                                    <th colSpan='1'>{cartTotal}</th>
                                </tr>                 
                    </tbody> 
                    :
                    ''
                }      
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
                                {defaultAddress ?
                                <span onClick={() => setDefaultAddress(false)} > Giao hàng tới địa chỉ mặc định</span> 
                                :
                                <span onClick={() => setDefaultAddress(true)}> Giao hàng tới địa chỉ khác</span> 
                                }                    
                            </div>   
                            {defaultAddress && 
                                <div className='show'>
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
                            }
                         
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


export default (DetailClinic);
