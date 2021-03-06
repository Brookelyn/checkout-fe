import React from 'react';
import Star from '../FeedbackForm/Star';

const RatingDisplay = ({rating}) => {
	const stars = [];

	for (let i = 0; i < rating; i++) {
		stars.push(<Star key={i} isFilled size="small" />);
	}

	return <div data-test="feedback-item-rating">{stars}</div>
}

export default RatingDisplay;
