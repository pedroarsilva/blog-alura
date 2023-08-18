import Banner from "componente/Banner";
import style from './Inicio.module.css';

import posts from 'json/posts.json';
import Post from "componente/Post";

export default function Inicio() {
  return (
    <main>
      <Banner />
      <ul className={style.posts}>
        {posts.map((post) => (
          <li key={post.id}>
            <Post post={post}/>
          </li>
        ))}
      </ul>
    </main>
  )
}