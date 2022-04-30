import { Flex, Circle, Box, Badge, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react';
// const data = {
// 	isNew: true,
// 	imageURL:
// 		'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
// 	name: 'Wayfarer Classic',
// 	price: 4.5,
// 	rating: 4.2,
// 	numReviews: 34
// };

export interface RatingProps {
	rating: number;
	numReviews: number;
}

function ProductAddToCart(props: {
	onClick: () => any;
	isNew: boolean;
	imageURL: string;
	name: string;
	price: number;
	rating: number;
	numReviews: number;
}) {
	return (
		<Flex p={50} w='full' alignItems='center' justifyContent='center'>
			<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
				<Box
					onClick={props.onClick}
					bg={useColorModeValue('white', 'gray.800')}
					maxW='sm'
					borderWidth='1px'
					rounded='lg'
					shadow='lg'
					position='relative'
				>
					{props.isNew && <Circle size='10px' position='absolute' top={2} right={2} bg='red.200' />}

					<Image
						src={`/images/${props.name}.png`}
						alt={`Picture of ${props.name}`}
						height='280px'
						width='280px'
					/>

					<Box p='6'>
						<Box d='flex' alignItems='baseline'>
							{props.isNew && (
								<Badge rounded='full' px='2' fontSize='0.8em' colorScheme='red'>
									New
								</Badge>
							)}
						</Box>
						<Flex mt='1' justifyContent='space-between' alignContent='center'>
							<Box fontSize='2xl' fontWeight='semibold' as='h4' lineHeight='tight' isTruncated>
								{props.name}
							</Box>
							{/* <Tooltip
								label='Add to cart'
								bg='white'
								placement={'top'}
								color={'gray.800'}
								fontSize={'1.2em'}
							>
								{/* <chakra.a href={'#'} display={'flex'}>
									{/* <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} /> */}
							{/* </chakra.a>  */}
							{/* </Tooltip> */}
						</Flex>

						<Flex justifyContent='space-between' alignContent='center'>
							{/* <Rating rating={props.rating} numReviews={props.numReviews} /> */}
							<Box fontSize='2xl' color={useColorModeValue('gray.800', 'white')}>
								<Box as='span' color={'gray.600'} fontSize='lg'>
									£
								</Box>
								{props.price.toFixed(2)}
							</Box>
						</Flex>
					</Box>
				</Box>
			</motion.div>
		</Flex>
	);
}

export default ProductAddToCart;
