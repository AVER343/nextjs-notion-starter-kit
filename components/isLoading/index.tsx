import { CircularProgress } from '@chakra-ui/react';

export function IsLoadingComponent({ isLoading, children }) {
	if (isLoading) {
		return <CircularProgress isIndeterminate color='green.300' />;
	}
	return children;
}
