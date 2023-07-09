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
// import { getAllItemsName } from "../../../services/userService";

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
      console.log('selectedOption', selectedOption)
    };

    handleSaveContentMarkdown = () => {
        this.props.saveDetailItems({
            contentHTML: this.state.contentHTML,
            contentMarkdown: this.state.contentMarkdown,
            itemId: this.state.selectedOption.value
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
       
        console.log('props:', this.state)
        return (
            <div className="manage-doctor-container">
                <div className="manage-doctor-title">
                    TẠO THÊM THÔNG TIN SẢN PHẨM
                </div>
                <div className="more-infor">
                    <div className="content-left form-group">
                        <label> <FormattedMessage id="admin.manage-doctor.select-doctor" /></label>
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
                        <span><FormattedMessage id="admin.manage-doctor.save" /></span>
                        :
                        <span><FormattedMessage id="admin.manage-doctor.add" /></span>
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
