/** @format */

import { User } from '@/models/User';
import handleUsers from '@/pages/api/HandleUser';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

function UserDetail() {
	const [userDetail, setUserDetail] = useState<User>();

	const router = useRouter();

	const id = router.query.id;

	useEffect(() => {
		id && getUserById();
	}, [id]);

	const getUserById = async () => {
		const api = `/users/${id}`;

		try {
			const res: any = await handleUsers.getUsers(api);

			if (res) {
				setUserDetail(res);
			} else {
				console.log(`user not found`);
			}
		} catch (error) {
			console.log(error);
		}
	};

	console.log(userDetail);

	return <div>UserDetail</div>;
}

export default UserDetail;
