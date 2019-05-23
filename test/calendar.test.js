import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import Calendar from '../client/src/components/Calendar.jsx';

configure({ adapter: new Adapter() });

it('renders correctly when there are no items', () => {
	const tree = renderer.create(<Calendar />).toJSON();
	expect(tree).toMatchSnapshot();
});

describe('Rendering of Calendar', () => {
	it('should render without crashing', () => {
		const wrapper = shallow(<Calendar />);
		const dates = wrapper.find('.calendar-day');
		expect(wrapper.find('.calendar-table').length).toBe(1);
		expect(dates.length).toBe(42);
	});
});
