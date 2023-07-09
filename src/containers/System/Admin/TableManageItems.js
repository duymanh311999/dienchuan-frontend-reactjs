import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './TableManageItems.scss';
import * as actions from "../../../store/actions"

import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
// import style manually
import 'react-markdown-editor-lite/lib/index.css';

// Register plugins if required
// MdEditor.use(YOUR_PLUGINS_HERE);

// Initialize a markdown parser
const mdParser = new MarkdownIt(/* Markdown-it options */);

// Finish!
function handleEditorChange({ html, text }) {
    console.log('handleEditorChange', html, text);
}

class TableManageItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemsRedux: []
        }
    }

    componentDidMount() {
        this.props.fetchItemsRedux();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.listItems !== this.props.listItems) {
            this.setState({
                itemsRedux: this.props.listItems
            })
        }
    }

    handleDeleteItem = (item) => {
        this.props.deleteAItemRedux(item.id);
    }
    handleEditItem = (item) => {
        this.props.handleEditItemFromParentKey(item)
    }
    render() {
        let arrItems = this.state.itemsRedux;
        return (
            <React.Fragment>
                <table id="TableManageUser">
                    <tbody>
                        <tr>
                            <th>Tên sản phẩm</th>
                            <th>Loại sản phẩm</th>
                            <th>Số lượng</th>
                            <th>Giá không sale</th>
                            <th>Giá có sale</th>        
                            <th>descriptionHTML</th>
                            <th>Chỉnh sửa</th>
                        </tr>
                        {arrItems && arrItems.length > 0 &&
                            arrItems.map((item, index) => {
                                return (
                                    <tr key={index} >
                                        <td>{item.name}</td>                     
                                        <td>{item.typeOf}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.priceBeforeSale}</td>
                                        <td>{item.priceAfterSale}</td>   
                                        <td>{item.descriptionHTML}</td>                                        
                                        <td>
                                            <button
                                                onClick={() => this.handleEditItem(item)}
                                                className="btn-edit" ><i className="fas fa-pencil-alt"></i></button>
                                            <button
                                                onClick={() => this.handleDeleteItem(item)}
                                                className="btn-delete" ><i className="fas fa-trash"></i></button>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>

            
            </React.Fragment>
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
        deleteAItemRedux: (id) => dispatch(actions.deleteAItem(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageItems);
