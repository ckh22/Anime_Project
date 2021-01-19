import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../../../../redux/actions/pro';

const ProfileEdit = ({ match, history }) => {
	const profileId = match.params.id;
	const [image, setImage] = useState('');
	const [uploading, setUploading] = useState(false);

	const dispatch = useDispatch();
	const uploadFileHandler = async (e) => {
		const file = e.target.files[0];
		const formData = new FormData();
		formData.append('image', file);
		setUploading(true);

		try {
			const config = {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			};

			const { data } = await axios.post('/api/upload', formData, config);

			setImage(data);
			setUploading(false);
		} catch (error) {
			console.error(error);
			setUploading(false);
		}
	};
	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(
			updateProfile({
				_id: profileId,
			})
		);
	};
	return <div>
    </div>;
};

export default ProfileEdit;
