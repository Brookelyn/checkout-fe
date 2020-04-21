import React, { Fragment } from 'react';
import './FeedbackView.css'
import FeedbackForm from '../FeedbackForm/FeedbackForm';
import FeedbackGraph from '../FeedbackGraph/FeedbackGraph';
import FeedbackFeed from '../FeedbackFeed/FeedbackFeed';

const commentList = [
	{
		name: 'Smoke',
		id: '123abc',
		rating: 5,
		comment: 'This is an excellent fake fish - I totally thought it was real until I bit it!'
	},
	{
		name: 'Mirrors',
		id: '321tfg',
		rating: 1,
		comment: 'I could tell it was fake from a distance. Even the catnip my owner sprinkled around it couldn\'t fool me!'
	},
	{
		name: 'Riddick',
		id: '958hsl',
		rating: 5,
		comment: 'Fish! I like Fish! I think something was wrong as it gave me a stomach ache? But I will totally eat another one if you let me.'
	},
	{
		name: 'Gordon',
		id: '937kso',
		rating: 3,
		comment: 'The cats are part of the deep state conspiricy! There is no fish - the cats are trying to distract us so they can have the squirrels to themselves!'
	}
]

class FeedbackView extends React.Component {
	state = {
		allComments: commentList,
	}

	onAddComment = (comment) => {
		// In a proper app this function wouldn't exist; the commentList data should be coming
		// from an external source. On adding a new comment, I'd expect to receive a new list of comments to display.
		this.setState({ allComments: [comment, ...this.state.allComments]})
	}

	render() {
		const { allComments } = this.state;

		return (
			<div className="feedback-view">
				<h1>Share your feedback</h1>
				<div className="flex">
					<div className="flex-1 w-50">
						<FeedbackForm onAddComment={this.onAddComment} />
					</div>
					<div className="flex-1 w-50">
						<FeedbackGraph data={allComments.map(comment => comment.rating)} />
						</div>
				</div>
				<div>
					<div>
						<FeedbackFeed commentList={allComments} />
						</div>
				</div>
			</div>
		);
	}
}

export default FeedbackView;
