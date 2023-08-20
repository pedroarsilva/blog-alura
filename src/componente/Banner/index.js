import style from './Banner.module.css';
import circuloColorido from 'assets/circulo_tech.png'
import minhaFoto from 'assets/minha_foto.png'

export default function Banner() {
  return (
    <div className={style.banner}>
      <div className={style.apresentacao}>
        <h1 className={style.titulo}>
          Olá, Mundo!
        </h1>

        <p className={style.paragrafo}>
          Bem vindo ao meu espaço pessoal! Eu sou Pedro Augusto,
          desenvolvedor Web Full Stak. Aqui compartilho vários conhecimentos de algumas tecnologias.
        </p>


      </div>

      <div className={style.imagens}>
        <img 
          className={style.circuloColorido}
          src={circuloColorido}
          aria-hidden={true}
        />
        <img 
          className={style.minhaFoto}
          src={minhaFoto}
          alt='Foto do Pedro'
        />

      </div>
    </div>
  )
}