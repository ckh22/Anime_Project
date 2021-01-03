//import bcrypt from 'bcryptjs';

const users = [
	{
		firstName: 'Admin',
		lastName: 'User',
		userName: 'AdminUser',
		email: 'admin@example.com',
		password: 'Admin',
		//bcrypt.hashSync('12345', 10),
		isAdmin: true,
	},
	{
		firstName: 'Clifford',
		lastName: 'Hartley',
		userName: 'Clifford',
		email: 'clifford@example.com',
		password: 'Admin',
		isAdmin: true,
		// bcrypt.hashSync('12345', 10),
	},
	{
		firstName: 'Robert',
		lastName: 'Hartley',
		userName: 'Robert',
		email: 'robert@example.com',
		password: 'Admin',
		isAdmin: true,
		//password: bcrypt.hashSync('12345', 10),
	},
];

export default users;
