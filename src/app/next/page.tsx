import { getStores } from './api';
import StoreList from './storelist';

type Props = {};


export default async function Page({ }: Props) {
    const data = await getStores()
    return (
        <StoreList data={data} />
    )
}