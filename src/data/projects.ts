type Project = {
    name: string;
    url: string;
    logo?: string;
    description: string;
    categories: string[];
    builders: {
        name: string;
        description: string;
    }[];
};

const PROJECTS: Project[] = [
    {
        "name": "CryptoPunks",
        "url": "https://cryptopunks.app/",
        "description": "The original CryptoPunks marketplace and explorer.",
        "categories": ["marketplace"],
        "builders": [
            {
                "name": "Larva Labs",
                "description": "Creators of CryptoPunks"
            }
        ]
    },
    {
        name: 'CryptoPunks Brand Hub',
        url: 'https://hub.cryptopunks.app/',
        logo: 'https://pbs.twimg.com/profile_images/1752127331748163584/ndmVfRhj_400x400.jpg',
        description: 'An archive and living source for project info and initiatives.',
        categories: ['Brand', 'Marketplace'],
        builders: [
            {
                name: 'Yuga Labs',
                description: 'Owners of CryptoPunks'
            }
        ]
    },
    {
        name: 'PunkCam',
        url: 'https://punk.cam',
        logo: 'https://punk.cam/logo.png',
        description: 'PunkCam is a fun way to take a selfie with your favorite Cryptopunk.',
        categories: ['Cryptopunk', 'Selfie', 'Fun'],
        builders: [
            {
                name: 'PunkCam',
                description: 'Creators of the PunkCam selfie app.'
            }
        ]
    },
    {
        name: 'PunkMaker',
        url: 'https://punkmaker.xyz',
        logo: 'https://punkmaker.xyz/logo.png',
        description: 'Make your own punk',
        categories: ['Cryptopunk', 'Creation'],
        builders: [
            {
                name: 'Larva Labs',
                description: 'Creators of CryptoPunks'
            }
        ]
    },
    {
        name: 'Wrapped Punks',
        url: 'https://www.wrappedpunks.com/',
        logo: 'https://assets.bitdegree.org/crypto-tracker/dapp-logos/ethereum/wrapped-cryptopunks-logo.png',
        description: 'Turn your CryptoPunks into ERC721',
        categories: [],
        builders: []
    },
    {
        name: "Punks Wrapper",
        url: "https://punks.swap.kiwi",
        description: "We created a simpler interface for the WrappedPunks smart contract.",
        categories: ["Blockchain", "Cryptopunk", "Smart Contract"],
        builders: [
            {
                name: "Swap Kiwi",
                description: "Blockchain interface developers."
            }
        ]
    },
    {
        name: "Punks.wtf",
        url: "https://punks.wtf",
        description: "Explore punks pixel data & animate your punk.",
        categories: [],
        builders: []
    },
    {
        name: "The Punk Animator",
        url: "https://thepunkanimator.xyz/",
        description: "Animate your punk.",
        categories: [],
        builders: []
    },
    {
        name: 'IttyBits',
        url: 'https://ittybits.xyz/',
        logo: 'https://ittybits.xyz/ittybits.png',
        description: 'Each Cryptopunk, constrained to 12x12 pixels, while retaining their original ID #s and traits.',
        categories: [],
        builders: []
    },
    {
        name: "Punks As Told By CryptoPunks",
        url: "https://nftnow.com/punks-as-told-by-cryptopunks/",
        logo: 'https://nftnow.com/wp-content/uploads/2023/09/cryptopunks-thumbnail.jpg',
        description: "Dive deep into the heart of the CryptoPunks revolution with exclusive interviews of the pioneers and influencers who shaped its history.",
        categories: ["Entertainment", "Documentary", "Cryptopunk"],
        builders: [
            {
                name: "NFT Now",
                description: "Creators of NFT-related content and documentaries."
            }
        ]
    },
    {
        name: 'Cryptopunks.eth.limo',
        url: 'https://cryptopunks.eth.limo/',
        logo: 'https://cryptopunks.eth.limo/favicon.ico',
        description: 'A new and innovative NFT marketplace dedicated exclusively to the iconic 10,000 CryptoPunks collection.',
        categories: [],
        builders: []
    },
    {
        name: "Understanding CryptoPunks",
        url: "https://understanding-cryptopunks.vv.xyz/",
        description: "A little guide than explore the wild phenomenon of CryptoPunks. By jaillet.eth.",
        categories: ["Guide", "Education", "Cryptopunk"],
        builders: [
            {
                name: "Jaillet",
                description: "Educator and guide writer for Cryptopunks."
            }
        ]
    },
    {
        name: "Burned Punks",
        url: "https://burnedpunks.com",
        description: "There were 10,000 Cryptopunks. 9,988 remain.",
        categories: ["Cryptopunk", "Community"],
        builders: [
            {
                name: "Burned Punks",
                description: "Community for tracking the rarity of Cryptopunks."
            }
        ]
    },
    {
        name: 'CryptoPunks Origins',
        url: 'https://cryptopunksorigins.com/',
        logo: 'https://pbs.twimg.com/profile_images/1661814409537224713/T1Rl7eyd_400x400.jpg',
        description: '"CryptoPunks Origins" chronicles the life and evolution of the CryptoPunks project.',
        categories: ['movie'],
        builders: []
    },
    {
        name: 'What The Punk',
        url: 'https://twitter.com/WTP_Movie',
        logo: 'https://pbs.twimg.com/profile_images/1728116867191934976/OKnCNSFT_400x400.jpg',
        description: 'Indepedent documentary on the amazing destiny of the Cryptopunks collection and the vivid Cryptoart scene Coproduced with ARTE & TokenAngels. Coming S1 24.',
        categories: ['movie'],
        builders: []
    },
];

export default PROJECTS;