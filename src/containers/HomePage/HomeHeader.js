import React from 'react';
import './HomeHeader.scss';
import { withRouter } from 'react-router';
import { useCart } from 'react-use-cart';

const HomeHeader = (props) => {
    const {
        isEmpty,
        totalItems,
    } = useCart()

   const returnToHome = () => {
        if (props.history) {
            props.history.push(`/home`)
        }    
    }

    const GoToCart = () => {
        if (props.history) {
            props.history.push(`/detail-clinic`)
        }    
    }

        return (
            <React.Fragment>
                <div className="home-top-header-container">
                    <div className='hotline-email'>
                        <i className="fa-solid fa-phone"></i>
                        <i className="fa-solid fa-envelope"></i>
                        <div className="subs-title">Diện Chẩn Bùi Quốc Châu</div>
                    </div>
                    <div className='shopping' onClick={() => GoToCart()}>
                        <i className="fa-sharp fa-solid fa-cart-shopping"></i>  Giỏ hàng ({totalItems})
                    </div>
                </div>
                <div className='home-middler-header-container row'>
                    <div className='logo col-3' onClick={() => returnToHome()}></div>
                    <div className='title col-6'>
                        <h2>HỘI VŨ SHOP</h2>
                        <h3>Diện Chẩn, Bách Chi chính hãng</h3>
                    </div>
                   <div className='logo-1 col-3 row'>
                    <div className='col-6'></div>
                        <div className='hotline col-6'>
                            <i className="fa-solid fa-phone"></i>  HOTLINE
                        </div>
                   </div>
                </div>
                <div className="home-header-container">
                    <div className="home-header-content">
                        <div className="center-content">
                            <div className="child-content">                      
                                <div className="subs-title" onClick={() => returnToHome()}>TRANG CHỦ</div>
                            </div>
                            <div className="child-content">
                                <div className="subs-title">GIỚI THIỆU</div>
                            </div>
                            <div className="child-content">
                                <div className="subs-title">SẢN PHẨM <i className="fa-solid fa-caret-down"></i></div>
                            </div>
                            <div className="child-content">
                                <div className="subs-title">ĐÀO TẠO <i className="fa-solid fa-caret-down"></i></div>
                            </div>
                            <div className="child-content">
                                <div className="subs-title">DIỆN CHUẨN</div>
                            </div>
                            <div className="child-content">
                                <div className="subs-title">KIẾN THỨC</div>
                            </div>
                            <div className="child-content">
                                <div className="subs-title">VIDEO</div>
                            </div>
                            <div className="child-content">
                                <div className="subs-title">HƯỚNG DẪN</div>
                            </div>
                            <div className="child-content">
                                <div className="subs-title">LIÊN HỆ</div>
                            </div>
                        </div>
                        <div className="right-content">
                            <div className="search">
                                <i className="fas fa-search"></i>
                                <input type="text" placeholder="Tìm kiếm" />
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }


export default withRouter((HomeHeader));
