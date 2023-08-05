import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { LANGUAGES, CRUD_ACTIONS, CommonUtils } from "../../../utils";
import * as actions from "../../../store/actions"
import './AdminManage.scss';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
import TableManageItems from './TableManageItems';
import MdEditor from 'react-markdown-editor-lite';
import MarkdownIt from 'markdown-it';

const mdParser = new MarkdownIt(/* Markdown-it options */);

class AdminManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            descriptionHTML: '',

            previewImgURL: '',
            isOpen: false,

            name: '',
            priceBeforeSale: '',
            quantity: '',
            price: '',
            typeOf: '',
            avatar: '',

            typeofArr: [],
            id: '',

        }
    }

    async componentDidMount() {
        this.props.getTypeOfStart();
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.typeofRedux !== this.props.typeofRedux) {
            let arrTypeof = this.props.typeofRedux;
            this.setState({
                typeofArr: arrTypeof,
                typeOf: arrTypeof && arrTypeof.length > 0 ? arrTypeof[0].keyMap : ''
            })
        }

        if (prevProps.listItems !== this.props.listItems) {
            let arrTypeof = this.props.typeofRedux;
           

            this.setState({
                typeOf: arrTypeof && arrTypeof.length > 0 ? arrTypeof[0].keyMap : '',
                name: '',
                priceBeforeSale: '',
                quantity: '',
                price: '',
                avatar: '',
                action: CRUD_ACTIONS.CREATE,
                previewImgURL: '',
                descriptionHTML: '',
            })
        }
    }

    handleOnchangeImage = async (event) => {
        let data = event.target.files;
        let file = data[0];
        if (file) {
            let base64 = await CommonUtils.getBase64(file);
            let objectUrl = URL.createObjectURL(file);
            this.setState({
                previewImgURL: objectUrl,
                avatar: base64
            })
        }
    }

    openPreviewImage = () => {
        if (!this.state.previewImgURL) return;

        this.setState({
            isOpen: true
        })
    }

    handleSaveItems = () => {
        let isValid = this.checkValidateInput();
        if (isValid === false) return;
        let { action } = this.state;

        if (action === CRUD_ACTIONS.CREATE) {
            this.props.createNewItem({
                name: this.state.name,
                quantity: this.state.quantity,
                priceBeforeSale: this.state.priceBeforeSale,
                price: this.state.price,
                typeOf: this.state.typeOf,
                avatar: this.state.avatar,
                descriptionHTML: this.state.descriptionHTML,
        })
        }
          
            if (action === CRUD_ACTIONS.EDIT) {
                //fire redux edit user
                this.props.editAItemRedux({
                    id: this.state.id,
                    name: this.state.name,
                    quantity: this.state.quantity,
                    priceBeforeSale: this.state.priceBeforeSale,
                    price: this.state.price,
                    typeOf: this.state.typeOf,
                    avatar: this.state.avatar,
                    descriptionHTML: this.state.descriptionHTML,
                })
            }
  
    }

    checkValidateInput = () => {
        let isValid = true;
        let arrCheck = ['name','quantity', 'price', 'typeOf' ]
        for (let i = 0; i < arrCheck.length; i++) {
            if (!this.state[arrCheck[i]]) {
                isValid = false;
                alert('This input is required: ' + arrCheck[i])
                break;
            }
        }

        return isValid;
    }

    onChangeInput = (event, id) => {
        let copyState = { ...this.state }
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        })
    }

    
    handleEditorChange = ({ html, text }) => {
        this.setState({
            description: text,
            descriptionHTML: html,
        })
    }

    handleEditItemFromParent = (item) => {
        let imageBase64 = '';
        if (item.image) {
            imageBase64 = Buffer.from(item.image, 'base64').toString('binary');
        }


        this.setState({
            name: item.name,
            priceBeforeSale: item.priceBeforeSale,
            quantity: item.quantity,
            price: item.price,
            descriptionHTML: item.descriptionHTML,
            typeOf: item.typeOf,
            avatar: '',
            previewImgURL: imageBase64,
            action: CRUD_ACTIONS.EDIT,
            id: item.id
        })
    }

    render() {
        let language = this.props.language;
        let typeofs = this.state.typeofArr;
        let isGetTypeof = this.props.isLoadingTypeof;

        let { name, priceBeforeSale, quantity, price,
            descriptionHTML, avatar, typeOf
        } = this.state;
        return (
            <div className="user-redux-container">
                <div className="title">
                    Item
                </div>
                <div className="user-redux-body" >
                    <div className="container">
                        <div className="row">
                            <div className="col-12 my-3"><FormattedMessage id="manage-user.add" /> </div>
                            <div className="col-12">{isGetTypeof === true ? 'Đang tải Thông tin' : ''}</div>
                            <div className="col-12"></div>

                            <div className="col-3">
                                <label>Name</label>
                                <input className="form-control" type="text"
                                    value={name}
                                    onChange={(event) => { this.onChangeInput(event, 'name') }}
                                />
                            </div>
                            <div className="col-3">
                                <label>priceBeforeSale</label>
                                <input className="form-control" type="text"
                                    value={priceBeforeSale}
                                    onChange={(event) => { this.onChangeInput(event, 'priceBeforeSale') }}

                                />
                            </div>
                            <div className="col-3">
                                <label>price</label>
                                <input className="form-control" type="text"
                                    value={price}
                                    onChange={(event) => { this.onChangeInput(event, 'price') }}
                                />
                            </div>
                            <div className="col-3">
                                <label>quantity</label>
                                <input className="form-control" type="text"
                                    value={quantity}
                                    onChange={(event) => { this.onChangeInput(event, 'quantity') }}
                                />
                            </div>
                            <div className="col-3">
                                <label>descriptionHTML</label>
                                <input className="form-control" type="text"
                                    value={descriptionHTML}
                                    onChange={(event) => { this.onChangeInput(event, 'descriptionHTML') }}

                                />
                            </div>
                            <div className="col-3">
                                <label>typeOf</label>
                                <select className="form-control"
                                    onChange={(event) => { this.onChangeInput(event, 'typeOf') }}
                                    value={typeOf}
                                >
                                    {typeofs && typeofs.length > 0 &&
                                        typeofs.map((item, index) => {
                                            return (
                                                <option key={index} value={item.keyMap}>
                                                      {language === LANGUAGES.VI ? item.valueVi : item.valueEn}
                                                </option>
                                                
                                            )
                                        })
                                    }
                                </select>
                            </div>


                            <div className="col-3">
                                <label>Tải ảnh</label>
                                <div className="preview-img-container">
                                    <input id="previewImg" type="file" hidden
                                        onChange={(event) => this.handleOnchangeImage(event)}

                                    />
                                    <label className="label-upload" htmlFor="previewImg">Tải ảnh <i className="fas fa-upload"></i></label>
                                    <div className="preview-image"
                                        style={{ backgroundImage: `url(${this.state.previewImgURL})` }}
                                        onClick={() => this.openPreviewImage()}
                                    >
                                    </div>
                                </div>

                            </div>
                                  
                            <div className="col-12 my-3">
                                <button
                                    className={this.state.action === CRUD_ACTIONS.EDIT ? "btn  btn-warning" : "btn btn-primary"}
                                    onClick={() => this.handleSaveItems()}
                                >
                                    Lưu thông tin
                                </button>
                            </div>

                            <div className="col-12 mb-5">
                                <TableManageItems
                                    handleEditItemFromParentKey={this.handleEditItemFromParent}
                                    action={this.state.action}
                                />
                            </div>
                        </div>
                    </div>
                </div>


                {this.state.isOpen === true &&
                    <Lightbox
                        mainSrc={this.state.previewImgURL}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                    />
                }

            </div>

        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
       
        roleRedux: state.admin.roles,
        positionRedux: state.admin.positions,

        isLoadingTypeof: state.admin.isLoadingTypeof,
        listItems: state.admin.items,
        typeofRedux: state.admin.typeof,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart()),
        createNewItem: (data) => dispatch(actions.createNewItem(data)),
        
        fetchItemsRedux: () => dispatch(actions.fetchAllItemsStart()),
        getTypeOfStart: () => dispatch(actions.fetchTypeOfStart()),
        editAItemRedux: (data) => dispatch(actions.editAItem(data))


        // processLogout: () => dispatch(actions.processLogout()),
        // changeLanguageAppRedux: (language) => dispatch(actions.changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminManage);
