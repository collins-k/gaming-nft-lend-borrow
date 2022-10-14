
import { create as ipfsHttpClient } from 'ipfs-http-client';

const client = ipfsHttpClient({url: 'https://ipfs.infura.io:5001/api/v0'});

export async function pimImageToIPFS(
    publicAddressOfUser: string,
    image: File
): Promise<string> {
    /* first, upload to IPFS */
    const IPFSUploadResult = await client.add(image, {
        progress: (prog) => console.log(`received: ${prog}`),
    });
    const data = JSON.stringify({
        name: `ndob-avdressatar-${publicAddressOfUser}`,
        image: IPFSUploadResult,
    });
    const added = await client.add(data);
    const url = `https://ipfs.infura.io/ipfs/${added.path}`;
    /* after file is uploaded to IPFS, return the URL to use it in the transaction */
    return url;
}