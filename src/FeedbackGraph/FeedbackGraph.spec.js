import React from 'react';
import { shallow } from 'enzyme';
import FeedbackGraph from './FeedbackGraph';

const defaultProps = {
	data: [ 3, 1, 2, 5, 5, 1, 3, 4, 4 ],
};

const render = (props) => {
	const component = shallow(<FeedbackGraph {...props} />);

	return { component };
}

it('renders the component', () => {
	render(defaultProps);
});

it('passes the correct values', () => {
	const { component } = render(defaultProps);

	expect(component.find('[data-test="customer-rating-count"]').text()).toBe('9 customer ratings');
	expect(component.find('VictoryBar').prop('data')).toEqual([
		{ x: 1, y: 2 },
		{ x: 2, y: 1 },
		{ x: 3, y: 2 },
		{ x: 4, y: 2 },
		{ x: 5, y: 2 }
	]);
});
