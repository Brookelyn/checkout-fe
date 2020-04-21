import React, { useState } from 'react';
import Star from './Star';

const FeedbackForm =() => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [rating, setRating] = useState(0);
	const [comment, setComment] = useState('');

	const onClickSubmit = () => {
		setName('');
		setEmail('');
		setRating(0);
		setComment('');
		
		console.log({
			name,
			email,
			rating,
			comment
		});
	}

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				onClickSubmit();
			}}
		>
			<label htmlFor="name">
				Name
				<input 
				id="name"
				value={name}
				placeholder="Name"
				onChange={e => setName(e.target.value)}
				onBlur={e => setName(e.target.value)}
				/>
			</label>
			<label htmlFor="email">
				Email
				<input 
				id="email"
				value={email}
				placeholder="hello@gmail.com"
				onChange={e => setEmail(e.target.value)}
				onBlur={e => setEmail(e.target.value)}
				/>
			</label>
			<fieldset>
				<label htmlFor="star1" title="One star"><input type="radio" id="star1" name="rating" value="1" onChange={e => setRating(e.target.value)} /><Star /></label>
				<label htmlFor="star2" title="Two stars"><input type="radio" id="star2" name="rating" value="2" onChange={e => setRating(e.target.value)} /><Star /></label>
				<label htmlFor="star3" title="Three stars"><input type="radio" id="star3" name="rating" value="3" onChange={e => setRating(e.target.value)}/><Star /></label>
				<label htmlFor="star4" title="Four stars"><input type="radio" id="star4" name="rating" value="4" onChange={e => setRating(e.target.value)}/><Star /></label>
				<label htmlFor="star5" title="Five stars"><input type="radio" id="star5" name="rating" value="5" onChange={e => setRating(e.target.value)}/><Star /></label>
			</fieldset>
			<label htmlFor="comment">
				Comment
				<textarea 
					id="comment"
					value={comment}
					onChange={e => setComment(e.target.value)}
					onBlur={e => setComment(e.target.value)}
				/>
			</label>
			<button typ="submit">Submit</button>
		</form>
	);
}

export default FeedbackForm;
