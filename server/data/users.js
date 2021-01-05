import bcrypt from 'bcryptjs';

const users = [
	{
		firstName: 'Admin',
		lastName: 'User',
		userName: 'AdminUser',
		email: 'admin@example.com',
		password: bcrypt.hashSync('1234567', 10),
		isAdmin: true,
	},
	{
		firstName: 'Clifford',
		lastName: 'Hartley',
		userName: 'Clifford',
		email: 'clifford@example.com',
		password: bcrypt.hashSync('1234567', 10),
		isAdmin: true,
	},
	{
		firstName: 'Robert',
		lastName: 'Hartley',
		userName: 'Robert',
		email: 'robert@example.com',
		password: bcrypt.hashSync('1234567', 10),
		isAdmin: true,
	},
];

export default users;
