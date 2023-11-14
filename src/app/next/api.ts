export async function getStores(page: number = 1) {
    const url = `https://godev.nham24.com/api/v1/explore/store/1?serviceId=1&sort=distance&latitude=11.567873470758&longitude=104.92607641965&page=${page}&per_page=12`
    return fetch(url)
        .then(resp => resp.json())
        .then(resp => resp.data);
}
