import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import logo from '../../assets/logo.svg';
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from "../../utils";
import { withRouter } from 'react-router';
import { changeLanguageApp } from "../../store/actions"

class HomeHeader extends Component {

    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language)
    }

    returnToHome = () => {
        if (this.props.history) {
            this.props.history.push(`/home`)
        }
    }
    render() {
        let language = this.props.language;
        return (
            <React.Fragment>
                <div className="home-top-header-container">
                    <div className='hotline-email'>
                        <i className="fa-solid fa-phone"></i>
                        <i className="fa-solid fa-envelope"></i>
                        <div className="subs-title">Diện Chẩn Bùi Quốc Châu</div>
                    </div>
                  
                    <div className='shopping'>
                        <i className="fa-sharp fa-solid fa-cart-shopping"></i>  Giỏ hàng (0)
                    </div>
                </div>
                <div className="home-header-container">
                    <div className="home-header-content">
                        <div className="center-content">
                            <div className="child-content">                      
                                <div className="subs-title">TRANG CHỦ</div>
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
                {this.props.isShowBanner === true &&
                    <div className="home-header-banner">
                        <div className="content-up">
                            <div className="title1"><FormattedMessage id="banner.title1" /></div>
                            <div className="title2"><FormattedMessage id="banner.title2" /></div>
                            <div className="search">
                                <i className="fas fa-search"></i>
                                <input type="text" placeholder="Tìm chuyên khoa khám bệnh" />
                            </div>
                        </div>
                        <div className="content-down">
                            <div className="options">
                                <div className="option-child">
                                    <div className="icon-child"><i className="far fa-hospital"></i></div>
                                    <div className="text-child"><FormattedMessage id="banner.child1" /></div>
                                </div>
                                <div className="option-child">
                                    <div className="icon-child"><i className="fas fa-mobile-alt"></i></div>
                                    <div className="text-child"><FormattedMessage id="banner.child2" /></div>
                                </div>
                                <div className="option-child">
                                    <div className="icon-child"><i className="fas fa-procedures"></i></div>
                                    <div className="text-child"><FormattedMessage id="banner.child3" /></div>
                                </div>
                                <div className="option-child">
                                    <div className="icon-child"><i className="fas fa-flask"></i></div>
                                    <div className="text-child"><FormattedMessage id="banner.child4" /></div>
                                </div>
                                <div className="option-child">
                                    <div className="icon-child"><i className="fas fa-user-md"></i></div>
                                    <div className="text-child"><FormattedMessage id="banner.child5" /></div>
                                </div>
                                <div className="option-child">
                                    <div className="icon-child"><i className="fas fa-briefcase-medical"></i></div>
                                    <div className="text-child"><FormattedMessage id="banner.child6" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </React.Fragment>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        userInfo: state.user.userInfo,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeHeader));
