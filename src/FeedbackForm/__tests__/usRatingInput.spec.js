import React from 'react';
import { shallow } from 'enzyme';
import useRatingInput from '../useRatingInput';

const Wrapper = (props) => {
  const hook = props.hook ? props.hook() : undefined;
  return <div hook={hook} />;
}

it('should start with a value of 0', () => {
	const component = shallow(<Wrapper hook={() => useRatingInput(0)} />);

	const { hook } = component.find('div').props();
	const [rating] = hook;
	
	expect(rating).toEqual(0);
});

it('should set the correct rating when setRating is called', () => {
	const component = shallow(<Wrapper hook={() => useRatingInput(0)} />);

	let { hook } = component.find('div').props();
	let [rating, setRating] = hook;
	
	expect(rating).toEqual(0);

	setRating(2);

	({ hook } = component.find('div').props());
	[rating] = hook;

	expect(rating).toEqual(2);
});