import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './TableManageUser.scss';
import * as actions from "../../../store/actions"
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import './ManageDoctor.scss';
import Select from 'react-select';
import { CRUD_ACTIONS, LANGUAGES } from '../../../utils';
import { getDetailInforItems } from "../../../services/userService";

const mdParser = new MarkdownIt(/* Markdown-it options */);

class ManageDoctor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //save to Markdown table
            contentMarkdown: '',
            contentHTML: '',
            selectedOption: '',
            description: '',
            listItemsName: [],
            hasOldData: false,

        }
    }

    componentDidMount() {
        this.props.getAllItemName();
    }

   
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.allItemsName !== this.props.allItemsName) {
            let dataSelect = this.buildDataInputSelect(this.props.allItemsName)
            this.setState({
                listItemsName: dataSelect
            })
        }
    }

    buildDataInputSelect = (inputData) => {
        let result = [];
        if (inputData && inputData.length > 0) {
            inputData.map((item, index) => {
                let object = {}
                object.label = item.name;
                object.value = item.id;
                result.push(object)
            })
        }
        return result;
    }

    handleChangeSelect = async (selectedOption) => {
      this.setState({ selectedOption })
      let res = await getDetailInforItems(selectedOption.value);
      if (res && res.errCode === 0 && res.data && res.data.Markdown){
        let markdown = res.data.Markdown;
        this.setState({
            contentHTML: markdown.contentHTML,
            contentMarkdown: markdown.contentMarkdown,
            hasOldData: true,
        })
      }else{
        this.setState({
            contentHTML: '',
            contentMarkdown: '',
            hasOldData: false,
        })
      }
      
    };

    handleSaveContentMarkdown = () => {
        let { hasOldData } = this.state;
        this.props.saveDetailItems({
            contentHTML: this.state.contentHTML,
            contentMarkdown: this.state.contentMarkdown,
            itemId: this.state.selectedOption.value,
            action: hasOldData === true ? CRUD_ACTIONS.EDIT : CRUD_ACTIONS.CREATE
        })
    }

    handleEditorChange = ({ html, text }) => {
        this.setState({
            contentMarkdown: text,
            contentHTML: html,
        })
    }


    render() {
        let { hasOldData, listItemsName } = this.state;
        return (
            <div className="manage-doctor-container">
                <div className="manage-doctor-title">
                    TẠO THÊM THÔNG TIN SẢN PHẨM
                </div>
                <div className="more-infor">
                    <div className="content-left form-group">
                        <label>Chọn sản phẩm</label>
                        <Select
                            value={this.state.selectedOption}
                            onChange={this.handleChangeSelect}
                            options={this.state.listItemsName}
                            placeholder={<FormattedMessage id="admin.manage-doctor.select-doctor" />}
                        />
                    </div>
                </div>


                <div className="manage-doctor-editor">
                    <MdEditor
                        style={{ height: '300px' }}
                        renderHTML={text => mdParser.render(text)}
                        onChange={this.handleEditorChange}
                        value={this.state.contentMarkdown}
                    />
                </div>

                <button
                    onClick={() => this.handleSaveContentMarkdown()}
                    className={hasOldData === true ? "save-content-doctor" : "create-content-doctor"}>
                    {hasOldData === true ?
                        <span>Lưu thông tin</span>
                        :
                        <span>Tạo thông tin</span>
                    }
                </button>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        allItemsName: state.admin.allItemsName,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllItemName: () => dispatch(actions.getAllItemName()),
        saveDetailItems: (data) => dispatch(actions.saveDetailItems(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageDoctor);
