import React, { Fragment } from 'react';
import FeedbackListing from './FeedbackListing';

const FeedbackFeed = ({ commentList }) => {
	if (!commentList) {
		return null;
	}

	return (
		<Fragment>
			{commentList.map(comment => 
				<FeedbackListing 
					key={comment.id} 
					name={comment.name} 
					rating={comment.rating} 
					comment={comment.comment}
				/>
			)}
		</Fragment>
	);
}

export default FeedbackFeed;