import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb';
import './App.css';
import MovieRow from './components/MovieRow';
import FilmeDestaque from './components/FilmeDestaque';
import Header from './components/Header';

export default () => {

  const [filmeLista, setfilmeLista] = useState([]);
  const [FilmeDestaqueDados, setFilmeDestaqueDados] = useState(null);
  const [blackHeader, setBlackHeader] = useState()

  /* Mostra depois que a tela for carregada */
  useEffect(() => {
    const loadAll = async () => {
      //Pegando a lista Total
      let listaCategorias = await Tmdb.getHomeList();
      setfilmeLista(listaCategorias);

      //Pegando filme destaque
      let originalsNetflix = listaCategorias.filter(i=>i.slug === 'originals');
      let numeroAleatorio = Math.floor(Math.random() * (originalsNetflix[0].items.results.length -1));
      let filmeEscolhido = originalsNetflix[0].items.results[numeroAleatorio];
      let informacao = await Tmdb.getMovieInfo(filmeEscolhido.id, 'tv');
      setFilmeDestaqueDados(informacao);
    }

    loadAll();
  }, []);

  useEffect(()=>{
    const scrollListener = () => {
      if (window.scrollY > 30) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);

  return (
    <div className="page">

      <Header black={blackHeader} />


      {FilmeDestaqueDados &&
        <FilmeDestaque item={FilmeDestaqueDados} />
      }

      <section className="lists">
        {filmeLista.map((item, key)=>
          <MovieRow key={key} title={item.title} items={item.items} />
        )}
      </section>

      <footer>
        Clone Netflix desenvolvido por Renan Torres
      </footer>



      {filmeLista.length <= 0 &&
      <div className="loading">
        <img src="netflix.gif" alt=""></img>
      </div>
      }
    </div>
  );
}