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
        "name": "CryptoPunks app",
        "url": "https://cryptopunks.app/",
        "description": "The original CryptoPunks marketplace and explorer",
        "categories": ["marketplace"],
        "builders": [
            {
                "name": "Larva Labs",
                "description": "Creators of CryptoPunks"
            }
        ]
    },
    {
        "name": "PunkMaker",
        "url": "https://punkmaker.xyz/",
        "logo": "https://punkmaker.xyz/logo.png",
        "description": "Make your own punk",
        "categories": ["creation"],
        "builders": [
            {
                "name": "Larva Labs",
                "description": "Creators of CryptoPunks"
            }
        ]
    },
    {
        name: "Niftyhorde",
        url: "https://niftyhorde.com",
        logo: 'https://avatars.githubusercontent.com/u/84375892?s=280&v=4',
        description: "We are a blockchain-based software company and creative think tank. Here you can find some of the resources we have developed for the Cryptopunks community.",
        categories: ["Blockchain", "Software", "Creative", "Cryptopunk"],
        builders: [
            {
                name: "Niftyhorde",
                description: "Blockchain-based software company and creative think tank."
            }
        ]
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
        name: "Swap your Punk",
        url: "https://swap.kiwi",
        description: "Swap your NFTs in a safe and secure way, your way!",
        logo: 'https://app.swap.kiwi/SwapKiwiCover.png',
        categories: ["NFT", "Trading", "Cryptopunk"],
        builders: [
            {
                name: "Swap Kiwi",
                description: "NFT trading platform."
            }
        ]
    },
    {
        name: "Bag",
        url: "https://bag.swap.kiwi",
        description: "Showcase your NFTs and discover new swaps",
        categories: ["NFT", "Showcase", "Trading", "Cryptopunk"],
        builders: [
            {
                name: "Swap Kiwi",
                description: "NFT showcase and trading platform."
            }
        ]
    },
    {
        name: "Ultimate Crypto Punks Toolbox",
        url: "https://github.com/niftyhorde",
        description: "A set of tools and utilities designed to empower and enhance your experience with Crypto Punks.",
        categories: ["Tools", "Utilities", "Cryptopunk"],
        builders: [
            {
                name: "Niftyhorde",
                description: "Developers of tools and utilities for Cryptopunks."
            }
        ]
    },
    {
        name: "Animate your Punk",
        url: "https://punks.wtf/studio",
        description: "Bring Cryptopunks pixels to life and export a GIF for sharing.",
        categories: ["Animation", "Cryptopunk", "GIF"],
        builders: [
            {
                name: "Punks WTF",
                description: "Cryptopunk animation studio."
            }
        ]
    },
    {
        name: "Revoke Cash",
        url: "https://revoke.cash",
        description: "Allows you to inspect all the contracts you've approved, and revoke their access for the ones you no longer need.",
        categories: ["Security", "Blockchain", "Smart Contract"],
        builders: [
            {
                name: "Revoke Cash",
                description: "Smart contract access management tool."
            }
        ]
    },
    {
        name: "Punks As Told By CryptoPunks",
        url: "https://nft.now",
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
        name: "Understanding CryptoPunks",
        url: "https://jaillet.eth",
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
        name: 'What The Punk',
        url: 'https://twitter.com/WTP_Movie',
        logo: 'https://pbs.twimg.com/profile_images/1728116867191934976/OKnCNSFT_400x400.jpg',
        description: 'Indepedent documentary on the amazing destiny of the Cryptopunks collection and the vivid Cryptoart scene Coproduced with ARTE & TokenAngels. Coming S1 24.',
        categories: ['Cryptopunk', 'Creation'],
        builders: []
    },
    {
        name: 'Wrapped Punks',
        url: 'https://www.wrappedpunks.com/',
        logo: 'https://assets.bitdegree.org/crypto-tracker/dapp-logos/ethereum/wrapped-cryptopunks-logo.png',
        description: 'Turn your CryptoPunks into ERC721',
        categories: [],
        builders: []
    },
];

export default PROJECTS;