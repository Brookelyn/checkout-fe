import React from 'react';
import { shallow, mount } from 'enzyme';
import FeedbackForm from '../FeedbackForm';

const defaultProps = {
	onAddComment: jest.fn(),
}

const render = (props, renderMethod = shallow) => {
	const component = renderMethod(<FeedbackForm {...props} />);

	return { 
		component,
	 };
}

it('renders the component', () => {
	const { component,  } = render(defaultProps);

	expect(component).toMatchSnapshot();
});

it('updates the value of the name input', ()=> {
	const { component } = render(defaultProps);

	expect(component.find('[data-test="feedback-form-name-input"]').prop('value')).toEqual('');

	component.find('[data-test="feedback-form-name-input"]').simulate('change', { target: { value: 'Namey McNameFace', } });

	expect(component.find('[data-test="feedback-form-name-input"]').prop('value')).toEqual('Namey McNameFace');
});

it('updates the value of the email input', ()=> {
	const { component } = render(defaultProps);

	expect(component.find('[data-test="feedback-form-email-input"]').prop('value')).toEqual('');

	component.find('[data-test="feedback-form-email-input"]').simulate('change', { target: { value: 'Namey@mcnameface.com', } });

	expect(component.find('[data-test="feedback-form-email-input"]').prop('value')).toEqual('Namey@mcnameface.com');
});

it('updates the value of the comment textarea', ()=> {
	const { component } = render(defaultProps);

	expect(component.find('[data-test="feedback-form-comment-input"]').prop('value')).toEqual('');

	component.find('[data-test="feedback-form-comment-input"]').simulate('change', { target: { value: 'No boats got named after me :(', } });

	expect(component.find('[data-test="feedback-form-comment-input"]').prop('value')).toEqual('No boats got named after me :(');
});

it.only('enables the submit button when all form data is present', () => {
	const { component } = render(defaultProps, mount);

	expect(component.find('[data-test="feedback-form-submit-button"]').prop('disabled')).toBe(true);

	component.find('[data-test="feedback-form-name-input"]').simulate('change', { target: { value: 'Namey McNameFace', } });
	component.find('[data-test="feedback-form-email-input"]').simulate('change', { target: { value: 'Namey@mcnameface.com', } });
	component.find('[data-test="feedback-form-comment-input"]').simulate('change', { target: { value: 'No boats got named after me :(', } });
	component.find('[data-test="rating-input-2"]').simulate('click');

	expect(component.find('[data-test="feedback-form-submit-button"]').prop('disabled')).toBe(false);
	expect(component.find('[data-test="feedback-form-submit-button"]').hasClass('active')).toBe(true);
});

it('clears the form and calls the onAddComment prop on submit', () => {
	const onAddCommentSpy = jest.fn();
	const { component } = render({onAddComment: onAddCommentSpy}, mount);

	expect(component.find('[data-test="feedback-form-submit-button"]').prop('disabled')).toBe(true);

	component.find('[data-test="feedback-form-name-input"]').simulate('change', { target: { value: 'Namey McNameFace', } });
	component.find('[data-test="feedback-form-email-input"]').simulate('change', { target: { value: 'Namey@mcnameface.com', } });
	component.find('[data-test="feedback-form-comment-input"]').simulate('change', { target: { value: 'No boats got named after me :(', } });
	component.find('[data-test="rating-input-2"]').simulate('change', { target: { checked: true } });

	component.find('[data-test="feedback-form-submit-button"]').simulate('click');
	
	expect(onAddCommentSpy).toBeCalled();
	expect(component.find('[data-test="feedback-form-name-input"]').prop('value')).toEqual('');
	expect(component.find('[data-test="feedback-form-email-input"]').prop('value')).toEqual('');
	expect(component.find('[data-test="feedback-form-comment-input"]').prop('value')).toEqual('');
	expect(component.find('Star').filter(star => star.prop('isFilled') === true).length).toEqual(0);
})
