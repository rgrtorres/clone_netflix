import React from 'react';
import './FilmeDestaque.css';

export default ({item}) => {

    let firstDate = new Date(item.first_air_date);
    let generos = [];
    for(let i in item.genres) {
        generos.push(item.genres[i].name)
    }

    let descricao = item.overview;

    if(descricao.length > 200) {
        descricao = descricao.substring(0,200) + '...';
    }

    return (
        <section className="featured" style={{backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`}}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{item.original_name}</div>
                    <div className="featured--info">
                        <div className="featured--points">{item.vote_average} pontos</div>
                        <div className="featured--year">{firstDate.getFullYear()}</div>
                        <div className="featured--seasons">{item.number_of_seasons} temporada{item.number_of_seasons > 1 ? 's' : ''}</div>
                    </div>

                    <div className="featured--description">{descricao}</div>

                    <div className="featured--buttons">
                        <a href={`/watch/${item.id}`} className="featured--watchbutton">► Assistir</a>
                        <a href={`/lista/add/${item.id}`} className="featured--mylistbutton"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                        </svg> Mais informações</a>
                    </div>

                    <div className="featured--genres">
                        <strong>Gêneros:</strong> {generos.join(', ')}
                    </div>
                </div>
            </div>
        </section>
    )
}