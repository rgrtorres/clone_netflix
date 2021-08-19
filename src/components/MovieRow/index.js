import React, {useState} from 'react';
import './MovieRow.css';

export default ({title, items}) => {

    const [posicaoX, pegaPosicaoX] = useState(-400)
    
    let larguraTelaUser = window.innerWidth;

    const paginacaoVoltar = () => {
        let x = posicaoX + Math.round(larguraTelaUser / 2);
        if(x > 0) {
            x = 0;
        }

        pegaPosicaoX(x);
    }

    const paginacaoProximo = () => {
        let x = posicaoX - Math.round(larguraTelaUser / 2);
        let larguraLista = items.results.length * 150;

        if((larguraTelaUser - larguraLista) > x) {
            x = (larguraTelaUser - larguraLista) - 60;
        }

        pegaPosicaoX(x);
    }


    return (
        <div class="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--left" onClick={paginacaoVoltar}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                </svg>
            </div>

            <div className="movieRow--right" onClick={paginacaoProximo}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </div>

            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{marginLeft: posicaoX, width: items.results.length * 150}}>
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className="movieRow--item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}></img>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}