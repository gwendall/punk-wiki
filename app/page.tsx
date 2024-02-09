import { Metadata } from 'next';
import ClientPage from './client';

export default ClientPage;

export const metadata: Metadata = {
  metadataBase: new URL('https://punk.wiki'),
  title: 'Punk.wiki',
  description: 'A community list of all CryptoPunk-related resources.',
  icons: {
    icon: 'https://punkmaker.xyz/api/og?p=009&format=svg&background=FF04B4',
  },
  openGraph: {
    images: 'https://punkmaker.xyz/api/og?p=009&background=FF04B4&size=100',
  },
  twitter: {
    images: ['https://punkmaker.xyz/api/og?p=009&background=FF04B4&size=100']
  }
}