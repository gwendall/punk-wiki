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

export default [
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
    }

] as Project[];