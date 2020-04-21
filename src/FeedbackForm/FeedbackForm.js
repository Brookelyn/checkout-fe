import React, { useState, useEffect } from 'react';
import useRatingInput from './useRatingInput';

const FeedbackForm = ({ onAddComment }) => {
	const [canUserSubmit, setCanUserSubmit] = useState(false)
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [rating, setRating, RatingInput] = useRatingInput(0);
	const [comment, setComment] = useState('');

	useEffect(() => {
		setCanUserSubmit(!!name.length && !!email.length && rating !== 0 && !!comment.length);
		}, 
		[name, email, rating, comment]);

	const onClickSubmit = () => {
		setName('');
		setEmail('');
		setRating(0);
		setComment('');

		// This function should ideally be a PATCH or POST call
		// to the relevant endpoint.
		onAddComment({
			name,
			email,
			rating: parseInt(rating),
			comment,
			// The ID should be something unique and likely related to how it's stored in the DB, but
			// this is an easy (although not truly random) shortcut
			id: Math.random().toString(36).substr(2, 5),
		});
	}

	return (
		<div data-test="feedback-form">
			<form>
				<div className="input-group" data-test="feedback-form-name-group">
					<label htmlFor="name">
						<p className="input-label" data-test="feedback-form-name-label">Name</p>
						<input 
						id="name"
						value={name}
						placeholder="Name"
						onChange={e => setName(e.target.value)}
						onBlur={e => setName(e.target.value)}
						className="input"
						data-test="feedback-form-name-input"
						/>
					</label>
				</div>
				<div className="input-group" data-test="feedback-form-email-group">
					<label htmlFor="email">
						<p className="input-label" data-test="feedback-form-email-label">Email</p>
						<input
						id="email"
						value={email}
						placeholder="hello@gmail.com"
						onChange={e => setEmail(e.target.value)}
						onBlur={e => setEmail(e.target.value)}
						className="input"
						data-test="feedback-form-email-input"
						/>
					</label>
				</div>
				<RatingInput />
				<div className="input-group" data-test="feedback-form-comment-group">
					<label htmlFor="comment">
					<p className="input-label" data-test="feedback-form-comment-label">Comment</p>
						<textarea 
							id="comment"
							value={comment}
							onChange={e => setComment(e.target.value)}
							onBlur={e => setComment(e.target.value)}
							className="textarea"
							data-test="feedback-form-comment-input"
						/>
					</label>
				</div>
				<div className="flex flex-justify-end">
					<button 
						type="submit" 
						className={`${canUserSubmit ? 'submit-button active' : 'submit-button'}`}
						disabled={!canUserSubmit}
						data-test="feedback-form-submit-button"
						onClick={(e) => {
							e.preventDefault();

							onClickSubmit();
						}}
					>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
}

export default FeedbackForm;
