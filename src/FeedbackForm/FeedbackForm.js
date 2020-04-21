import React, { useState } from 'react';
import useRatingInput from './useRatingInput';

const FeedbackForm = ({ onAddComment }) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [rating, setRating, RatingInput] = useRatingInput(0);
	const [comment, setComment] = useState('');

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

	const canSubmitForm = !!name.length && !!email.length && rating !== 0 && !!comment.length;

	return (
		<div>
			<form
				onSubmit={(e) => {
					e.preventDefault();

					onClickSubmit();
				}}
			>
			<div className="input-group">
				<label htmlFor="name">
				<p className="input-label">Name</p>
					<input 
					id="name"
					value={name}
					placeholder="Name"
					onChange={e => setName(e.target.value)}
					onBlur={e => setName(e.target.value)}
					className="input"
					/>
				</label>
				</div>
				<div className="input-group">
					<label htmlFor="email">
						<p className="input-label">Email</p>
						<input
						id="email"
						value={email}
						placeholder="hello@gmail.com"
						onChange={e => setEmail(e.target.value)}
						onBlur={e => setEmail(e.target.value)}
						className="input"
						/>
					</label>
				</div>
				<RatingInput />
				<div className="input-group">
					<label htmlFor="comment">
					<p className="input-label">Comment</p>
						<textarea 
							id="comment"
							value={comment}
							onChange={e => setComment(e.target.value)}
							onBlur={e => setComment(e.target.value)}
							className="textarea"
						/>
					</label>
				</div>
				<div className="flex flex-justify-end">
					<button 
						type="submit" 
						className={`${canSubmitForm ? 'submit-button active' : 'submit-button'}`}
						disabled={!canSubmitForm}
					>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
}

export default FeedbackForm;
