import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

const SearchBox = ({ history }) => {
	const [keyword, setKeyword] = useState('');

	const submitHandler = (e) => {
		e.preventDefault();
		if (keyword.trim()) {
			history.push(`/search/${keyword}`);
		} else {
			history.push('/');
		}
	};

	return (
		<form onSubmit={submitHandler} inline>
			<FormControl
				type="text"
				name="q"
				onChange={(e) => setKeyword(e.target.value)}
				placeholder="Search Anime..."
				className="mr-sm-2 ml-sm-5"
			></FormControl>
			<Button type="submit" variant="outlined" className="p-2">
				Search
			</Button>
		</form>
	);
};

export default SearchBox;
