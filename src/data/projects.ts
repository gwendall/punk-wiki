type Project = {
    name: string;
    url: string;
    logo?: string;
    description: string;
    categories: string[];
    builders: {
        name: string;
        url?: string;
        picture?: string;
    }[];
};

const PROJECTS: Project[] = [
    {
        "name": "CryptoPunks",
        "url": "https://cryptopunks.app/",
        logo: 'https://pbs.twimg.com/profile_images/1506332416847269890/OJ8gQuG2_400x400.png',
        "description": "The original CryptoPunks marketplace and explorer.",
        "categories": ["marketplace"],
        "builders": [
            {
                name: "Larva Labs",
                url: 'https://twitter.com/larvalabs',
                picture: 'https://pbs.twimg.com/profile_images/1506331796056727561/7R9A2LIR_400x400.png',
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
                url: 'https://twitter.com/yugalabs'
            }
        ]
    },
    {
        name: 'PunkCam',
        url: 'https://punk.cam',
        logo: 'https://punk.cam/logo.png',
        description: 'Take selfies with your punks.',
        categories: ['Cryptopunk', 'Selfie', 'Fun'],
        builders: [
            {
                name: 'PunkCam',
                url: 'https://twitter.com/PUNK_CAM'
            },
            {
                name: 'Gwendall',
                url: 'https://twitter.com/gwendall'
            }
        ]
    },
    {
        name: 'PunkMaker',
        url: 'https://punkmaker.xyz',
        logo: 'https://punkmaker.xyz/logo.png',
        description: 'Make your own punk.',
        categories: ['Cryptopunk', 'Creation'],
        builders: [
            {
                name: 'Gwendall',
                url: 'https://twitter.com/gwendall'
            }
        ]
    },
    {
        name: "(Crypto) Punk's Not Dead",
        url: 'https://github.com/cryptopunksnotdead',
        logo: 'https://avatars.githubusercontent.com/u/79600699?s=200&v=4',
        description: 'Open Source Tools & Scripts and Public Domain Artwork & Datasets for Punks.',
        categories: ['Cryptopunk', 'Community'],
        builders: [
            {
                name: 'Gerald Bauer',
                url: 'https://twitter.com/geraldbauer'
            }
        ]
    },
    {
        name: 'Wrapped Punks',
        url: 'https://www.wrappedpunks.com/',
        logo: 'https://assets.bitdegree.org/crypto-tracker/dapp-logos/ethereum/wrapped-cryptopunks-logo.png',
        description: 'Turn your CryptoPunks into ERC721.',
        categories: [],
        builders: []
    },
    {
        name: "Punks Wrapper",
        url: "https://punks.swap.kiwi",
        logo: 'https://app.swap.kiwi/SwapKiwiCover.png',
        description: "A simpler interface for the WrappedPunks smart contract.",
        categories: ["Blockchain", "Cryptopunk", "Smart Contract"],
        builders: [
            {
                name: 'Niftynaut',
                url: 'https://twitter.com/niftynaut'
            }
        ]
    },
    {
        name: "Punks.wtf",
        url: "https://punks.wtf",
        logo: 'https://pbs.twimg.com/profile_images/1648319453627547648/aKNoQe0Q_400x400.jpg',
        description: "Explore punks colors.",
        categories: [],
        builders: [
            {
                name: 'Niftynaut',
                url: 'https://twitter.com/niftynaut'
            }
        ]
    },
    {
        name: "The Punk Animator",
        url: "https://thepunkanimator.xyz/",
        logo: 'https://pbs.twimg.com/profile_images/1639192482960535558/gsS6wLsG_400x400.jpg',
        description: "Build a punk.",
        categories: [],
        builders: [
            {
                name: 'The Punk Animator',
                url: 'https://twitter.com/ThePunkAnimator',
            }
        ]
    },
    {
        name: 'PunkList',
        url: 'https://www.punklist.xyz/',
        logo: 'https://pbs.twimg.com/profile_images/1697283234822758400/rX-XdbHc_400x400.jpg',
        description: 'The home of drops and whitelists for Punks',
        categories: [],
        builders: [
            {
                name: 'Arkaydeus',
                url: 'https://twitter.com/arkaydeus'
            }
        ]
    },
    {
        name: 'NFT Meme Generator',
        url: 'https://www.nftmeme.pics/punks',
        logo: 'https://pbs.twimg.com/profile_images/1697283234822758400/rX-XdbHc_400x400.jpg',
        description: 'Create memes with your punks.',
        categories: [],
        builders: [
            {
                name: 'Arkaydeus',
                url: 'https://twitter.com/arkaydeus'
            }
        ]
    },
    {
        name: 'Are Punks Ded?',
        url: 'https://arepunksded.com',
        logo: 'https://pbs.twimg.com/profile_images/1712093315795972097/ebLlmr2M_400x400.jpg',
        description: 'Are punks ded?',
        categories: [],
        builders: [
            {
                name: 'Gwendall',
                url: 'https://twitter.com/gwendall'
            }
        ]
    },
    {
        name: 'IttyBits',
        url: 'https://ittybits.xyz/',
        logo: 'https://ittybits.xyz/ittybits.png',
        description: 'Each Cryptopunk, constrained to 12x12 pixels, while retaining their original ID #s and traits.',
        categories: [],
        builders: [
            {
                name: 'Jeremy.eth',
                url: 'https://twitter.com/posvar'
            }
        ]
    },
    {
        name: 'CryptoPunks V1',
        url: 'https://v1punks.io/',
        logo: 'https://i.seadn.io/s/raw/files/1984fbf016de75b723672c077ed3276c.png?auto=format&dpr=1&w=3840',
        description: 'The CryptoPunks from the initial buggy contract, wrapped in ERC721 tokens.',
        categories: [],
        builders: [
            {
                name: 'FrankNFT',
                url: 'https://twitter.com/frankNFT_eth'
            }
        ]
    },
    {
        name: "Punks As Told By CryptoPunks",
        url: "https://nftnow.com/punks-as-told-by-cryptopunks/",
        logo: 'https://nftnow.com/wp-content/uploads/2023/09/cryptopunks-thumbnail.jpg',
        description: "Dive deep into the heart of the CryptoPunks revolution with exclusive interviews of the pioneers and influencers who shaped its history.",
        categories: ["Entertainment", "Documentary", "Cryptopunk"],
        builders: [
            {
                name: 'NFT Now',
                url: 'https://twitter.com/nftnow'
            },
            {
                name: 'Yuga Labs',
                url: 'https://twitter.com/yugalabs'
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
        logo: 'https://pbs.twimg.com/profile_images/1755582763745292288/APKWetyO_400x400.jpg',
        description: "A little guide than explore the wild phenomenon of CryptoPunks.",
        categories: ["Guide", "Education", "Cryptopunk"],
        builders: [
            {
                name: "Jalil",
                url: 'https://twitter.com/jalil_eth',
                picture: 'https://pbs.twimg.com/profile_images/1755582763745292288/APKWetyO_400x400.jpg',
            }
        ]
    },
    {
        name: "Burned Punks",
        url: "https://burnedpunks.com",
        logo: 'https://pbs.twimg.com/profile_images/1719568886130245632/jjwZHHAm_400x400.jpg',
        description: "There were 10,000 Cryptopunks. 9,988 remain.",
        categories: ["Cryptopunk", "Community"],
        builders: [
            {
                name: 'Sean Bonner',
                url: 'https://twitter.com/seanbonner'
            }
        ]
    },
    {
        name: 'CryptoPunks Origins',
        url: 'https://cryptopunksorigins.com/',
        logo: 'https://pbs.twimg.com/profile_images/1661814409537224713/T1Rl7eyd_400x400.jpg',
        description: '"CryptoPunks Origins" chronicles the life and evolution of the CryptoPunks project.',
        categories: ['movie'],
        builders: [
            {
                name: 'Sherone.eth',
                url: 'https://twitter.com/Sherone33'
            },
        ]
    },
    {
        name: 'What The Punk',
        url: 'https://twitter.com/WTP_Movie',
        logo: 'https://pbs.twimg.com/profile_images/1728116867191934976/OKnCNSFT_400x400.jpg',
        description: 'Independant documentary on the amazing destiny of the Cryptopunks collection and the vivid Cryptoart scene.',
        categories: ['movie'],
        builders: [
            {
                name: 'WTP',
                url: 'https://twitter.com/WTP_Movie'
            },
            {
                name: 'Hervé Martin-Delpierre',
                url: 'https://twitter.com/MartinDelpierre'
            }
        ]
    },
    {
        name: 'Punk Secrets',
        url: 'https://punksecrets.art/',
        logo: 'https://pbs.twimg.com/profile_images/1661814409537224713/T1Rl7eyd_400x400.jpg',
        description: 'Find out what your punk is hiding.',
        categories: ['movie'],
        builders: [
            {
                name: 'Sherone.eth',
                url: 'https://twitter.com/Sherone33'
            }
        ]
    },
];

export default PROJECTS;