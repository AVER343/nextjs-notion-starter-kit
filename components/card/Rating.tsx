import { Box } from '@chakra-ui/react';
import React from 'react';
import { RatingProps } from './index';

export function Rating({ numReviews }: RatingProps) {
	return (
		<Box d='flex' alignItems='center'>
			{/* {Array(5).fill('').map((_, i) => {
                const roundedRating = Math.round(rating * 2) / 2;
                if (roundedRating - i >= 1) {
                    return (
                        <BsStarFill key={i} style={{ marginLeft: '1' }} color={i < rating ? 'teal.500' : 'gray.300'} />
                    );
                }
                if (roundedRating - i === 0.5) {
                    return <BsStarHalf key={i} style={{ marginLeft: '1' }} />;
                }
                return <BsStar key={i} style={{ marginLeft: '1' }} />;
            })} */}
			<Box as='span' ml='2' color='gray.600' fontSize='sm'>
				{numReviews} review{numReviews > 1 && 's'}
			</Box>
		</Box>
	);
}
