import React from 'react';
import { shallow } from 'enzyme';
import Modal from 'react-modal';
import ConfirmRemoveModal from '../../components/ConfirmRemoveModal';

let onCancelDelete, onConfirmDelete, wrapper;

beforeAll(() => {
    onCancelDelete = jest.fn();
    onConfirmDelete = jest.fn();
});

test('should render ConfirmRemoveModal correctly', () => {
    wrapper = shallow(<ConfirmRemoveModal
        confirmDelete={true}
        onCancelDelete={onCancelDelete}
        onConfirmDelete={onConfirmDelete}
    />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ConfirmRemoveModal correctly (not open)', () => {
    wrapper = shallow(<ConfirmRemoveModal
        confirmDelete={false}
        onCancelDelete={onCancelDelete}
        onConfirmDelete={onConfirmDelete}
    />);
    expect(wrapper).toMatchSnapshot();
});

test('should handle onCancel', () => {
    wrapper = shallow(<ConfirmRemoveModal
        confirmDelete={true}
        onCancelDelete={onCancelDelete}
        onConfirmDelete={onConfirmDelete}
    />);
    wrapper.find({ id: 'btnRemoveCancel' }).simulate('click');
    expect(onCancelDelete).toHaveBeenCalled();
});

test('should handle onConfirm', () => {
    wrapper = shallow(<ConfirmRemoveModal
        confirmDelete={true}
        onCancelDelete={onCancelDelete}
        onConfirmDelete={onConfirmDelete}
    />);
    wrapper.find({ id: 'btnRemoveConfirm' }).simulate('click');
    expect(onConfirmDelete).toHaveBeenCalled();
});