const KEY = '4ed03e49'

export function loadMovie() {
    fetch(`http://www.omdbapi.com/?s=marvel&apikey=${KEY}&page=1`)
        .then((e) => {
            console.log(e);
        })
}