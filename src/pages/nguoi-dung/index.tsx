/** @format */

import React, { useEffect, useState } from 'react';
import handleUsers from '../api/HandleUser';
import { AxiosResponse } from 'axios';
import { User } from '@/models/User';
import Link from 'next/link';

function UsersPage() {
	const [users, setUsers] = useState<User[]>([]);

	useEffect(() => {
		getAllUsers();
	}, []);

	const getAllUsers = async () => {
		const api = `/users`;

		try {
			const res: any = await handleUsers.getUsers(api);

			if (res) {
				setUsers(res);
			} else {
				console.log('user not found');
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			Hiển thị danh sách người dùng
			<>
				{users.length > 0 &&
					users.map((item) => (
						<Link href={`/nguoi-dung/${item.id}`}>
							<div
								style={{
									padding: '10px 20px',
								}}
								key={item.id}>
								<h5>{item.name}</h5>
								<p>{item.email}</p>
							</div>
						</Link>
					))}
			</>
		</div>
	);
}

export default UsersPage;
