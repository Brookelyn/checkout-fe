import React from 'react';
import FeedbackListing from './FeedbackListing';

const FeedbackFeed = ({ commentList }) => {
	if (!commentList) {
		return null;
	}

	return (
		<div className="feed">
			<h3>Customer reviews</h3>
			{commentList.map(comment => 
				<FeedbackListing 
					key={comment.id} 
					name={comment.name} 
					rating={comment.rating} 
					comment={comment.comment}
				/>
			)}
		</div>
	);
}

export default FeedbackFeed;