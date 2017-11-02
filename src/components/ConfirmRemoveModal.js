import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';

export default class ConfirmRemoveModal extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render () {
        return(
            <Modal
                isOpen={!!this.props.confirmDelete}
                contentLabel="Are you sure?"
                closeTimeoutMS={200}
                className="modal"
            >
                <h3 className="modal__title">Are you sure?</h3>
                <p className="modal__body">Please confirm you want to delete this expense.</p>
                <div className="modal__buttons">
                    <button className="button" id="btnRemoveConfirm" onClick={this.props.onConfirmDelete}> Confirm </button>
                    <button className="button button--secondary" id="btnRemoveCancel" onClick={this.props.onCancelDelete} > Cancel </button>
                </div>
            </Modal>
        );
    }
}