import React, { useState, Fragment } from 'react';
import Star from './Star';

const useRatingInput = (defaultState) => {
	const [rating, setRating] = useState(defaultState);

	const notZero = rating !== 0;

	const RatingInput = () => (
		<Fragment>
			<p className="input-label">Rating</p>

			<fieldset className="input-group">
				<label htmlFor="star1" title="One star">
					<input type="radio" id="star1" name="rating" value={1} onClick={e => setRating(e.target.value)} className="hidden" data-test="rating-input-1" />
					<Star isFilled={rating >= 1 && notZero} />
				</label>
				<label htmlFor="star2" title="Two stars">
					<input type="radio" id="star2" name="rating" value={2} onClick={e => setRating(e.target.value)} className="hidden" data-test="rating-input-2" />
					<Star isFilled={rating >= 2 && notZero} />
				</label>
				<label htmlFor="star3" title="Three stars">
					<input type="radio" id="star3" name="rating" value={3} onClick={e => setRating(e.target.value)} className="hidden" data-test="rating-input-3" />
					<Star isFilled={rating >= 3 && notZero} />
					</label>
				<label htmlFor="star4" title="Four stars">
					<input type="radio" id="star4" name="rating" value={4} onClick={e => setRating(e.target.value)} className="hidden" data-test="rating-input-4" />
					<Star isFilled={rating >= 4 && notZero} />
					
					</label>
				<label htmlFor="star5" title="Five stars">
					<input type="radio" id="star5" name="rating" value={5} onClick={e => setRating(e.target.value)} className="hidden" data-test="rating-input-5" />
					<Star isFilled={rating >= 5 && notZero} />
				</label>
			</fieldset>
		</Fragment>
	);

	return [rating, setRating, RatingInput];
}

export default useRatingInput;