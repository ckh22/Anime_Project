import React, { useState } from 'react';
import {
	TextField,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	Checkbox,
	Grid,
	Box,
	Typography,
	Button,
	FormHelperText,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink, useHistory, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import { createAnime } from '../../../../redux/actions/animeActions';
import { makeStyles } from '@material-ui/core/styles';

// Material UI Core Styles
const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
		// border: '1px solid red',
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
	textField: {
		width: '100%',
	},
}));

const CreateAnime = () => {
	const [formData, setFormData] = useState({
		title: '',
		description: '',
		demographic: '',
		genre: '',
		media: '',
		images: {
			title: '',
			url: '',
		},
		production: '',
		cast: '',
	});
	const genreData = ['Kodomomuke', 'Shonen', 'Shojo', 'Seinen', 'Josei', 'Seijin'];

	const onChangeHandler = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

	// Redux
	const dispatch = useDispatch();
	const userLogin = useSelector((state) => state.userLogin);

	// Material UI Core
	const classes = useStyles();

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(createAnime());
	};

	return (
		<>
			<h1>Add an Anime</h1>
			<p>Here you can add your favorite anime to our database and then edit the page</p>
			<p>To get started, please fill out the form as accurately as possible</p>
			<p>
				Once submitted the anime will be verified by a community lead and approved to initiate a Community
				assigning an admin,
			</p>
			<p>then to allow users to edit the content on the page</p>

			<div style={{ padding: '100px' }} className={classes.root}>
				<form onSubmit={submitHandler} className={classes.form} noValidate>
					<TextField
						id="outlined-error-helper-text"
						variant="outlined"
						margin="normal"
						required
						fullWidth
						label="Title"
						name="title"
						autoComplete="title"
						autoFocus
						onChange={onChangeHandler}
					/>
					<TextField
						id="outlined-error-helper-text"
						variant="outlined"
						margin="normal"
						required
						fullWidth
						label="Demographic"
						name="demograpbic"
						autoComplete="demographic"
						autoFocus
						onChange={onChangeHandler}
					/>
					<FormControl className={classes.formControl} error>
						<InputLabel id="demo-simple-select-error-label">Demographic</InputLabel>
						<Select
							labelId="demo-simple-select-error-label"
							id="demographic"
							onChange={onChangeHandler}
							renderValue={(value) => `⚠️  - ${value}`}
						>
							<MenuItem value="">
								<em>None</em>
							</MenuItem>
							{genreData.map((genre) => (
								<MenuItem>{genre}</MenuItem>
							))}
						</Select>
						<FormHelperText>Error</FormHelperText>
					</FormControl>
					<TextField
						id="outlined-error-helper-text"
						variant="outlined"
						margin="normal"
						required
						fullWidth
						label="Title"
						name="title"
						autoComplete="title"
						autoFocus
						onChange={onChangeHandler}
					/>
					<TextField
						id="outlined-error-helper-text"
						variant="outlined"
						margin="normal"
						required
						fullWidth
						label="Title"
						name="title"
						autoComplete="title"
						autoFocus
						onChange={onChangeHandler}
					/>
					<TextField
						id="outlined-error-helper-text"
						variant="outlined"
						margin="normal"
						required
						fullWidth
						label="Title"
						name="title"
						autoComplete="title"
						autoFocus
						onChange={onChangeHandler}
					/>
					<TextField
						id="outlined-error-helper-text"
						variant="outlined"
						margin="normal"
						required
						fullWidth
						label="Title"
						name="title"
						autoComplete="title"
						autoFocus
						onChange={onChangeHandler}
					/>
					<TextField
						id="outlined-error-helper-text"
						variant="outlined"
						margin="normal"
						required
						fullWidth
						label="Title"
						name="title"
						autoComplete="title"
						autoFocus
						onChange={onChangeHandler}
					/>
					<Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
						Create
					</Button>
				</form>
			</div>
		</>
	);
};

export default CreateAnime;
