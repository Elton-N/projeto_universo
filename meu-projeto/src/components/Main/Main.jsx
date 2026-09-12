import React from 'react';
import './Main.css';
import sistema_solar from '../../assets/sistema_solar_2.png';
import estrela_e_galaxias from '../../assets/estrelas_e_galáxias.png';
import buraco_negro from '../../assets/buraco_negro.png';


export default function Main() {
  return (
    <main>
      <section id="inicio">
        <h2>Curiosidades do Universo</h2>
        <p>
          Esta página é dedicada a apresentar algumas das mais fascinantes 
          curiosidades e descobertas sobre o nosso cosmos e o espaço sideral.
        </p>
      </section>

      <section id="curiosidades" aria-label="Cards sobre o espaço">
        <article>
          <img src= {sistema_solar} alt="" />
          <h3>O Sistema Solar</h3>
          <p>Nosso sistema é composto por oito planetas principais e milhares de corpos menores.</p>
        </article>

        <article>
          <img src= {estrela_e_galaxias} alt="" />
          <h3>Buracos Negros</h3>
          <p>Regiões do espaço onde a gravidade é tão forte que nem mesmo a luz consegue escapar.</p>
        </article>

        <article>
          <img src= {buraco_negro} alt="" />
          <h3>Estrelas e Galáxias</h3>
          <p>Existem mais estrelas no universo observável do que grãos de areia em todas as praias da Terra.</p>
        </article>
      </section>
    </main>
  );
}