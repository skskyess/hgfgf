const getRes = async(url) => {
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(`status: ${res.status}`);
    }

    return await res.json();
}

getRes('https://github.com/skskyess/web/blob/main/index.js')
.then(data => {
    console.log(data);
    // for (let key in data) {
    //     console.log(key);
    //}
})