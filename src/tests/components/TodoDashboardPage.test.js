import React from 'react';
import { shallow } from 'enzyme';
import TodoDashboardPage from '../../components/TodoDashboardPage';

test('should render TodoDashboardPage correctly', () => {
    const wrapper = shallow(<TodoDashboardPage />);
    expect(wrapper).toMatchSnapshot();
});