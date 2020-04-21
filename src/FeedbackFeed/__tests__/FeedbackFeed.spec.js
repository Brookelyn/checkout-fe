import React from 'react';
import { shallow } from 'enzyme';
import FeedbackFeed from '../FeedbackFeed';

const defaultProps = {
	commentList: [{
		name: 'Fake name',
		email: 'fake-name@fake-email.com',
		rating: 5,
		comment: 'Something here',
		id: 'FakeId',
	}]
};

const render = (props) => {
	const component = shallow(<FeedbackFeed {...props} />);

	return { component };
}

it('renders the component', () => {
	render(defaultProps);
});

it('displays the fallback where no comments have been provided', () => {
	const { component } = render({ commentList: [] });

	expect(component.find('h5').length).toEqual(1)
})