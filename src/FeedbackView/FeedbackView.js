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
		rating: 2,
		comment: 'I could tell it was fake from a distance. Even the catnip my owner sprinkled around it couldn\'t fool me!'
	},
	{
		name: 'Riddick',
		id: '958hsl',
		rating: 4,
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
						<FeedbackFeed commentList={commentList} />
						</div>
				</div>
			</Fragment>
		);
	}
}

export default FeedbackView;
