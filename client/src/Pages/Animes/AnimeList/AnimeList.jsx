import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { listAnime, deleteAnime, createAnime } from '../actions/animeActions';

const AnimeList = ({ history, match }) => {
    // "pageNumber" is for id of current page number or for current page number
    const pageNumber = match.params.pageNumber || 1;

    // "dispatch" is now redux dispatcher
	const dispatch = useDispatch();

    // "product list is now animeList within the state"
	const animeList = useSelector((state) => state.animeList);
	const { loading, error, animes, page, pages } = animeList;

	const animeCreate = useSelector((state) => state.animeCreate);
	const {
		loading: loadingCreate,
		error: errorCreate,
		success: successCreate,
		anime: createdAnime,
	} = animeCreate;

	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	const createAnimeHandler = () => {
		dispatch(createAnime());
	};

	return (
		<>
			<Row className="align-items-center">
				<Col>
					<h1>Animes</h1>
				</Col>
				<Col className="text-right">
					<Button className="my-3" onClick={createAnimeHandler}>
						<i className="fas fa-plus"></i> Create Anime
					</Button>
				</Col>
			</Row>
			{errorCreate && <Message variant="danger">{errorCreate}</Message>}
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant="danger">{error}</Message>
			) : (
				<>
					<Table striped bordered hover responsive className="table-sm">
						<thead>
							<tr>
								<th>ID</th>
								<th>NAME</th>
								<th>PRICE</th>
								<th>CATEGORY</th>
								<th>BRAND</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{products.map((product) => (
								<tr key={product._id}>
									<td>{product._id}</td>
									<td>{product.name}</td>
									<td>${product.price}</td>
									<td>{product.category}</td>
									<td>{product.brand}</td>
									<td>
										<LinkContainer to={`/admin/product/${product._id}/edit`}>
											<Button variant="light" className="btn-sm">
												<i className="fas fa-edit"></i>
											</Button>
										</LinkContainer>
										<Button
											variant="danger"
											className="btn-sm"
											onClick={() => deleteHandler(product._id)}
										>
											<i className="fas fa-trash"></i>
										</Button>
									</td>
								</tr>
							))}
						</tbody>
					</Table>
					<Paginate pages={pages} page={page} isAdmin={true} />
				</>
			)}
		</>
	);
};

export default AnimeList;
