const API_KEY = '91cf00fd5559c14fffe1e65317099670';
const API_BASE = 'https://api.themoviedb.org/3';
const API_LANG = 'pt-BR';

/*
- Originais da netflix
- recomendados
- em alta (top rated)
- ação
-comédia
-romance
- terror
- documentário

*/

const basicFetch = async(endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();

    return json;
}

export default {
    getHomeList: async() => {
        return [
            {
                slug: 'originals',
                title: 'Originais da Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&language=${API_LANG}&api_key=${API_KEY}`)
            },

            {
                slug: 'treding',
                title: 'Recomendados para você',
                items: await basicFetch(`/trending/all/week?language=${API_LANG}&api_key=${API_KEY}`)
            },

            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await basicFetch(`/movie/top_rated?&language=${API_LANG}&api_key=${API_KEY}`)
            },

            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&language=${API_LANG}&api_key=${API_KEY}`)
            },

            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&language=${API_LANG}&api_key=${API_KEY}`)
            },

            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=${API_LANG}&api_key=${API_KEY}`)
            },

            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=${API_LANG}&api_key=${API_KEY}`)
            },

            {
                slug: 'documentary',
                title: 'Documentário',
                items: await basicFetch(`/discover/movie?with_genres=99&language=${API_LANG}&api_key=${API_KEY}`)
            },
        ];
    },

    getMovieInfo: async(movieId, type) => {
        let info = {}

        if (movieId) {
            switch(type) {
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?language=${API_LANG}&api_key=${API_KEY}`)
                break;

                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?language=${API_LANG}&api_key=${API_KEY}`)
                break;
                
                default:
                    info = null;
                break;
            }
        }

        return info;
    }
}