import style from './SobreMim.module.css';

import PostModelo from "componente/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function SobreMim() {
  return (
    <PostModelo
      fotoCapa={fotoCapa}
      titulo="Sobre mim"
    >
      <h3 className={style.subtitulo}>
        Olá, eu sou Pedro Augusto!
      </h3>

      <img
        src={fotoSobreMim}
        alt='Foto do Pedro com logo'
        className={style.fotoSobreMim}
      />

      <p className={style.paragrafo}>
        Oi, tudo bem? Eu sou um programador web júnior especializado em React, uma biblioteca de ponta para criar interfaces de usuário incríveis.
      </p>
      <p className={style.paragrafo}>
        Desenvolvo soluções eficientes e inovadoras para problemas reais, usando as melhores práticas e ferramentas do mercado.
      </p>
      <p className={style.paragrafo}>
        Estou sempre em busca de novos conhecimentos e tecnologias, e me atualizo constantemente com as novidades e tendências da área.
      </p>
      <p className={style.paragrafo}>
        Tenho um portfólio de projetos que comprovam minha habilidade de criar aplicações web de alto padrão, responsivas e acessíveis.
      </p>
      <p className={style.paragrafo}>
        Também domino HTML, CSS, JavaScript, Git e outras ferramentas indispensáveis para o desenvolvimento web. Sou um profissional dedicado, proativo, colaborativo e comunicativo, que sabe trabalhar em equipe e se adaptar a diferentes cenários e desafios.
      </p>
      <p className={style.paragrafo}>
        Estou pronto para encarar novas oportunidades e crescer como programador web.
      </p>
      

    </PostModelo>
  )
}