import React from 'react';
import RatingDisplay from './RatingDisplay';

const FeedbackListing = ({ name, rating, comment }) => (
	<div>
		<div>
			<h3>{name}</h3>
			<RatingDisplay rating={rating}/>
		</div>
		<div>{comment}</div>
	</div>
);

export default FeedbackListing;
