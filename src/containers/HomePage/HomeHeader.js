import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import logo from '../../assets/logo.svg';
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from "../../utils";
import { withRouter } from 'react-router';
import { changeLanguageApp } from "../../store/actions"

class HomeHeader extends Component {

    returnToHome = () => {
        if (this.props.history) {
            this.props.history.push(`/home`)
        }    
    }

    GoToCart = () => {
        if (this.props.history) {
            this.props.history.push(`/detail-clinic`)
        }    
    }

    render() {
    
        return (
            <React.Fragment>
                <div className="home-top-header-container">
                    <div className='hotline-email'>
                        <i className="fa-solid fa-phone"></i>
                        <i className="fa-solid fa-envelope"></i>
                        <div className="subs-title">Diện Chẩn Bùi Quốc Châu</div>
                    </div>
                    <div className='shopping' onClick={() => this.GoToCart()}>
                        <i className="fa-sharp fa-solid fa-cart-shopping"></i>  Giỏ hàng (0)
                    </div>
                </div>
                <div className='home-middler-header-container row'>
                    <div className='logo col-3' onClick={() => this.returnToHome()}></div>
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
                                <div className="subs-title" onClick={() => this.returnToHome()}>TRANG CHỦ</div>
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

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeHeader));
