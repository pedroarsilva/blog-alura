import './Post.css';
import style from './Post.module.css';
import { Route, Routes, useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModelo from "componente/PostModelo";
import ReactMarkdown from "react-markdown";
import NaoEncontrada from 'paginas/NaoEncontrada';
import PaginaPadrao from 'componente/PaginaPadrao';
import PostCard from 'componente/PostCard';

export default function Post() {

  const parametros = useParams();

  const post = posts.find((post) => {
    return post.id === Number(parametros.id);
  })

  if (!post) {
    return <NaoEncontrada />
  }

  const postsRecomendados = posts
    .filter((post) => post.id !== Number(parametros.id))
    .sort((a, b) => b.id - a.id)
    .slice(0, 4)

  return (

    <PaginaPadrao>
      <PostModelo
        fotoCapa={`/assets/post/${post.id}/capa.png`}
        titulo={post.titulo}
      >
        <div className='post-markdown-container'>
          <ReactMarkdown>
            {post.texto}
          </ReactMarkdown>
        </div>

        <h2 className={style.titulosOutrosPosts}>
          Outros posts que você pode gostar:
        </h2>

        <ul className={style.postsRecomendados}>
          {postsRecomendados.map((post) => (
            <li key={post.id}>
              <PostCard post={post} />
            </li>
          ))}
        </ul>

      </PostModelo>
    </PaginaPadrao >
    // <Routes>
    //   <Route path='*' element={<PaginaPadrao />}>
    //     <Route index element={
    //       <PostModelo
    //         fotoCapa={`/assets/posts/${post.id}/capa.png`}
    //         titulo={post.titulo}
    //       >
    //         <div className="post-markdown-container">
    //           <ReactMarkdown>
    //             {post.texto}
    //           </ReactMarkdown>
    //         </div>

    //       </PostModelo>
    //     } />
    //   </Route>
    // </Routes>
  )
}