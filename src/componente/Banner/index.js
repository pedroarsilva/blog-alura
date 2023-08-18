import style from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.png'

export default function Banner() {
  return (
    <div className={style.banner}>
      <div className={style.apresentacao}>
        <h1 className={style.titulo}>
          Olá, Mundo!
        </h1>

        <p className={style.paragrafo}>
          Então é isso, finalizamos o banner, e na próxima aula já vamos finalizar a primeira página mesmo, então vamos mostrar essa parte que mostra alguns cards que são os posts do nosso “Olá, Mundo!”, então te espero lá.
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