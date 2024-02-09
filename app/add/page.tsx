import { defaultMetadata } from "~/lib/metadata";

export default function AddPage() {
    return (
        <div>DM <a href="https://twitter.com/gwendall" target="_blank" rel="noreferrer">@gwendall</a></div>
    )
}

export const metadata = {
    ...defaultMetadata,
    title: 'Punk.wiki - Add a resource',
};