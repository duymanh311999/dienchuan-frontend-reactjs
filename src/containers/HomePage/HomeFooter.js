import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

class HomeFooter extends Component {
    render() {

        return (
            <div className="home-footer">
                <div className='content-left col-5 row'>
                    <div className='footer-content'>
                        <h1>VỀ CHÚNG TÔI</h1>
                            <div><a>Giới thiệu</a></div>
                            <div><a>Sản phẩm</a></div>
                            <div><a>Đào tạo</a></div>
                    </div>
                    <div className='footer-content'>
                        <h1>VỀ CHÚNG TÔI</h1>                 
                            <div><a>Giới thiệu</a></div>
                            <div><a>Sản phẩm</a></div>
                            <div><a>Đào tạo</a></div>                 
                    </div>
                </div>
                <div className='content-right col-5'>
                    <div className='footer-content'>
                    Công ty TNHH Diện Chẩn Việt Số ĐKKD 0108459913 do Sở KHĐT Tp. Hà Nội cấp ngày 05/10/2018 
                    - 1. Chính sách chung 
                    - 2. Chính sách bảo mật Diện Chẩn Việt đã thông báo Bộ Công Thương
                    </div>
                    <div className='footer-image'>
                        <img src="https://dungcudienchan.vn/wp-content/uploads/2020/01/dien-chan-bui-quoc-chau-da-thong-bao-bo-cong-thuong.png" title="Diện Chẩn Việt đã thông báo Bộ Công Thương"/>
                    </div>
                    
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
