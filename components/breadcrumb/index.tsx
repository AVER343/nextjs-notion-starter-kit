import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
export function BreadCrumbComponent(props: { breadcrumbs: { href: string; title: string }[] }) {
	const router = useRouter();
	return (
		<Breadcrumb spacing={'8px'} color={'teal'} colorScheme={'cyan'} separator={'/'}>
			{props.breadcrumbs.map((e, index) => (
				<BreadcrumbItem key={index}>
					<BreadcrumbLink onClick={() => router.push(props.breadcrumbs[index].href)}>
						{e.title}
					</BreadcrumbLink>
				</BreadcrumbItem>
			))}
		</Breadcrumb>
	);
}
