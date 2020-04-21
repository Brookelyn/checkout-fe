import React, { Fragment } from 'react';
import './FeedbackView.css'
import FeedbackForm from '../FeedbackForm/FeedbackForm';
import FeedbackGraph from '../FeedbackGraph/FeedbackGraph';
import FeedbackFeed from '../FeedbackFeed/FeedbackFeed';

class FeedbackView extends React.Component {
	render() {
		return (
			<Fragment>
				<h1>Have something to say? Let us know what you think!</h1>
				<div className="flex">
					<div className="flex-1">
						<FeedbackForm />
					</div>
					<div className="flex-1">
						<FeedbackGraph />
						</div>
				</div>
				<div>
					<div>
						<FeedbackFeed />
						</div>
				</div>
			</Fragment>
		);
	}
}

export default FeedbackView;
