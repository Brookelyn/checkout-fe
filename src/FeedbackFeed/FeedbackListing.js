import React from 'react';
import RatingDisplay from './RatingDisplay';

const FeedbackListing = ({ name, rating, comment }) => (
	<div 
		className="listing"
		data-test="feedback-item"
	>
		<div className="pb-8">
			<h3 className="listing-name" data-test="feedback-item-name">{name}</h3>
			<RatingDisplay rating={rating} />
		</div>
		<div data-test="feedback-item-feedback">{comment}</div>
	</div>
);

export default FeedbackListing;
