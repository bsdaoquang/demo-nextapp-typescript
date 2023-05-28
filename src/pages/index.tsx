/** @format */

import { Inter } from 'next/font/google';
import handlePosts from './api/HandlePost';
import { useEffect, useState } from 'react';
import { Post } from '@/models/Post';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	const [posts, setPosts] = useState<Post[]>([]);

	useEffect(() => {
		getAllPosts();
	}, []);

	const getAllPosts = async () => {
		const api = `/posts`;

		try {
			const res: any = await handlePosts.getPosts(api);

			if (res) {
				setPosts(res);
			} else {
				console.log(`Posts not found`);
			}
		} catch (error) {
			console.log(`Can not get posts ${error}`);
		}
	};

	const handleUpdatePost = async (id: number, data: Post) => {
		const api = `/post?id=${id}`;

		try {
			const res: any = await handlePosts.putPost(api, data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<Link href={`/nguoi-dung`}>Người dùng</Link>
			<h1>Posts</h1>
			{posts.length > 0 &&
				posts.map((item) => <p key={item.id}>{`${item.id} ${item.title}`}</p>)}
		</>
	);
}
