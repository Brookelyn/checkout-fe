import React from 'react';
import { VictoryChart, VictoryBar } from 'victory';

const FeedbackGraph = ({ data }) => {
	const transformData = () => {
		return [
			{ x: 1, y: data.filter(rating => rating === 1).length },
			{ x: 2, y: data.filter(rating => rating === 2).length },
			{ x: 3, y: data.filter(rating => rating === 3).length },
			{ x: 4, y: data.filter(rating => rating === 4).length },
			{ x: 5, y: data.filter(rating => rating === 5).length }
		];
	}

	return (
		<div className="chart">
			<h4 data-test="customer-rating-count">{`${data.length} customer ratings`}</h4>
			<VictoryChart domainPadding={20} animate={{ duration: 100 }}>
				<VictoryBar
					cornerRadius={3}
					style={{ data: { fill: "#32368a" } }}
					data={transformData()}
					categories={{x: ['1 star','2 stars','3 stars','4 stars','5 stars']}}
					domain={{x: [1,5]}}
				/>
			</VictoryChart>
		</div>
	);
}

export default FeedbackGraph;
