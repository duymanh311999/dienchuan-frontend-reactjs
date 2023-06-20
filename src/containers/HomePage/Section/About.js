import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './About.scss'

class About extends Component {
    render() {

        return (
            <div className="section-share section-about">
                <div className="section-about-header col-4">
                    <span>Đăng ký tư vấn</span>
                </div>
                <div className="section-about-forms">
                    <div className='col-4'>
                            <input className="form-control" type="text"
                                    value="Họ và tên*"
                            />
                             <input className="form-control" type="phone"
                                    value="Số điện thoại*"
                            />
                             <input className="form-control" type="text"
                                    value="Địa chỉ"
                            />
                             <input className="form-control" type="email"
                                    value="Địa chỉ Email"
                            />
                             <input className="form-control node" type="text"
                                    value="Ghi chú"
                            />
                    </div>
                    <button className='btn btn-sightin'>Đăng ký</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
