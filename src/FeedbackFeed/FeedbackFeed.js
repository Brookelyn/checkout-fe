import React from 'react';
import FeedbackListing from './FeedbackListing';

const FeedbackFeed = ({ commentList }) => {
	return (
		<div className="feed">
			<h3>Customer reviews</h3>
			{commentList.length ? 
			commentList.map(comment => 
				<FeedbackListing 
					key={comment.id} 
					name={comment.name} 
					rating={comment.rating} 
					comment={comment.comment}
				/>
			) :
			(
				<h5
					className="text-center"
					data-test="no-reviews"
				>
					This has not yet received a review.
				</h5>
			)
			}
		</div>
	);
}

export default FeedbackFeed;