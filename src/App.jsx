// import reactLogo from './assets/react.svg'

import { Header } from "./components/Header";


import style from './App.module.css'

import './global.css'

import { Post } from "./components/Post";
import { Sidebar } from "./components/SIdebar";

export function App() {
    return (
        <div>
            <Header />

            <div className={style.wrapper}>
                <aside>
                    <Sidebar />
                </aside>

                <main>

                    <Post />
                    <Post />
                </main>

            </div>



        </div>


    )

}

