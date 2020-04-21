import React from 'react';
import { shallow } from 'enzyme';
import Star from '../Star';



const render = (props) => {
	const component = shallow(<Star {...props} />);

	return { 
		component,
	 };
}

it('should render', () => {
	const { component } = render();

	expect(component).toMatchSnapshot();
});

it('should change colour when isFilled === true', () => {
	const { component } = render({ isFilled: true });

	expect(component.find('path').prop('fill')).toBe('#fcb50d');
});

it('should adjust the size when passed the size: "small" prop', () => {
	const { component } = render({ size: 'small' });

	expect(component.find('svg').prop('width')).toBe('16');
	expect(component.find('svg').prop('height')).toBe('16');
});
