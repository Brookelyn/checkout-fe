import React from 'react';
import { shallow } from 'enzyme';
import RatingDisplay from '../RatingDisplay';

const defaultProps = {
	rating: 5,
};

const render = (props) => {
	const component = shallow(<RatingDisplay {...props} />);

	return { component };
}

it('renders the component', () => {
	render(defaultProps);
});

it('renders an alternate number of stars', () => {
	const {component} = render({ rating: 3 });

	expect(component.find('Star').length).toEqual(3);
});