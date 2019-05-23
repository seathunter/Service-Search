import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import Search from '../client/src/components/Search.jsx';

configure({ adapter: new Adapter() });

it('renders correctly when there are no items', () => {
	const tree = renderer.create(<Search />).toJSON();
	expect(tree).toMatchSnapshot();
});

describe('Rendering of Search Bar', () => {
	it('should render without crashing', () => {
		const wrapper = shallow(<Search />);
		expect(wrapper.find('.header-search-box').length).toBe(1);
	});
});
