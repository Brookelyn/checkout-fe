import React from 'react';
import { VictoryChart, VictoryBar} from 'victory';

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
		<VictoryChart>
			<VictoryBar
				style={{ data: { fill: "#c43a31" } }}
				data={transformData()}
  		/>
		</VictoryChart>
	);
}

export default FeedbackGraph;
