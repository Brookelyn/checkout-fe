import React from 'react';
import RatingDisplay from './RatingDisplay';

const FeedbackListing = ({ name, rating, comment }) => (
	<div className="listing">
		<div className="pb-8">
			<h3 className="listing-name">{name}</h3>
			<RatingDisplay rating={rating} />
		</div>
		<div>{comment}</div>
	</div>
);

export default FeedbackListing;
