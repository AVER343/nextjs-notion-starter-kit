import { Box, Center, HStack, SimpleGrid } from '@chakra-ui/react';
import React, { useState } from 'react';
import { motion, useViewportScroll } from 'framer-motion';
import { useRouter } from 'next/router';
import { BreadCrumbComponent } from '../../../components/breadcrumb';
function LevelPage() {
	let router = useRouter();
	let { _category } = router.query;
	let [ levels, setLevel ] = useState<{ [id: string]: any }>({ EASY: 'green', MEDIUM: 'orange', HARD: 'red' });
	return (
		<Box>
			<BreadCrumbComponent
				breadcrumbs={[
					{ href: '/questions', title: 'Category' },
					{ href: `/questions/${_category}`, title: 'Level' }
				]}
			/>

			<Center>
				<HStack mt='30vh' spacing={'15vh'}>
					{Object.keys(levels).map((e, index) => (
						<motion.button key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
							<Center
								as='button'
								p='1'
								borderRadius='md'
								bg={levels[e]}
								h='120px'
								color='white'
								width={'20vh'}
								height={'20vh'}
								onClick={() => router.push(`/question/${_category}/${e}`)}
							>
								{e}
							</Center>
						</motion.button>
					))}
				</HStack>
			</Center>
		</Box>
	);
}
export async function getServerSideProps(context:any) {
	return {
		props: {}
	};
}
export default LevelPage;
