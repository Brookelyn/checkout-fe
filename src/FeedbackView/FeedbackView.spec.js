import React from 'react';
import { shallow } from 'enzyme';
import FeedbackView from './FeedbackView';

const render = (props) => {
	const component = shallow(<FeedbackView {...props} />);

	return { component };
}

it('renders the component', () => {
	render();
});

it('renders the correct elements', () => {
	const { component } = render();

	expect(component.find('[data-test="feedback-form-header"]').length).toBe(1);
	expect(component.find('FeedbackForm').length).toBe(1);
	expect(component.find('FeedbackGraph').length).toBe(1);
	expect(component.find('FeedbackFeed').length).toBe(1);
});

it('updates the state when onAddComment is called', () => {
	const { component } = render();

	// As this is currently hardcoded, I know it's starting with 4
	expect(component.state('allComments').length).toBe(4);

	const newComment = {
		name: 'Fake name',
		email: 'fake-name@fake-email.com',
		rating: 5,
		comment: 'Something here',
		id: 'FakeId',
	};

	component.instance().onAddComment(newComment);

	expect(component.state('allComments').length).toBe(5);
	expect(component.state('allComments')[0]).toEqual(newComment);

})

