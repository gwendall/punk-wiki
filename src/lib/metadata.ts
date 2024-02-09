import { Metadata } from "next";

export const defaultMetadata: Metadata = {
    metadataBase: new URL('https://punk.wiki'),
    title: 'punk.wiki',
    description: 'A community list of all CryptoPunk-related resources.',
    icons: {
        icon: 'https://punkmaker.xyz/api/og?p=009&format=svg&background=FF04B4',
    },
    openGraph: {
        images: 'https://punkmaker.xyz/api/og?p=009&background=FF04B4&size=100',
    },
    twitter: {
        title: 'punk.wiki',
        description: 'A community list of all CryptoPunk-related resources.',
        images: ['https://punkmaker.xyz/api/og?p=009&background=FF04B4&size=100']
    }
}