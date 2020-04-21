import React from 'react';
import { shallow } from 'enzyme';
import FeedbackListing from '../FeedbackListing';

const defaultProps = {
	name: 'Fake name',
	email: 'fake-name@fake-email.com',
	rating: 5,
	comment: 'Something here',
	id: 'FakeId',
};

const render = (props) => {
	const component = shallow(<FeedbackListing {...props} />);

	return { component };
}

it('renders the component', () => {
	render(defaultProps);
});

it('correctly places the values passed in', () => {
	const { component } = render(defaultProps);

	expect(component.find('[data-test="feedback-item"]').length).toEqual(1);
	expect(component.find('[data-test="feedback-item-name"]').text()).toEqual(defaultProps.name);
	expect(component.find('RatingDisplay').prop('rating')).toEqual(5);
	expect(component.find('[data-test="feedback-item-feedback"]').text()).toEqual(defaultProps.comment);
});
