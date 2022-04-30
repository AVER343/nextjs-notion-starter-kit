import React, { useEffect, useState } from 'react';
import { SimpleGrid, Text, Box} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { BASE_URL } from '../../constants/url';
import Cards from '../../components/card';
import { BreadCrumbComponent } from '../../components/breadcrumb';
export interface ICategory {
	category_id: number;
	category: string;
	imageUrl: any[];
	status: number;
	flags: any[];
}

function QuestionsPage() {
	const [ categories, setCategories ] = useState<ICategory[]>([]);
	const [ page ] = useState(0);
	const breadcrumbs = [
		{
			href: '/questions',
			title: 'Category'
		}
	];
	const router = useRouter();
	useEffect(
		() => {
			fetch(`${BASE_URL}/question/categories`)
				.then((e) => e.json())
				.then((e) => setCategories(e))
				.catch((e) => console.log({ e }));
		},
		[ page ]
	);
	return (
		<React.Fragment>
			<BreadCrumbComponent breadcrumbs={breadcrumbs} />
			<Text fontSize='4xl' color='teal'>
				Categories
			</Text>
			<SimpleGrid minChildWidth='280px' spacing={1} spacingY={0}>
				{[ ...categories ].map((e, index) => (
					<Box key={index}>
						<Cards
							onClick={() => router.push(`/questions/${e.category}`)}
							isNew={true}
							imageURL={e.imageUrl[0] || ''}
							name={e.category}
							price={0}
							rating={0}
							numReviews={0}
							// imageUrl={`https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80`}
							// description={JSON.stringify(e)}
							// title={e.category}
							// category={e.category}
						/>
					</Box>
				))}
			</SimpleGrid>
		</React.Fragment>
	);
}
export async function getServerSideProps() {
	return {
		props: { questions: [] } // will be passed to the page component as props
	};
}
export default QuestionsPage;
