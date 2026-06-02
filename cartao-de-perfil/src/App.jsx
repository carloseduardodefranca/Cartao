import ProfileCard from "./components/ProfileCard"
import './App.css'


function App() {
  const profile ={
    initiala:"CF",
    name:"carlos frança",
    role:"estudante",
    location:"São Paulo-São Paulo",
    bio:"Louco por Jogos",
    experience:"",
    projetos:"+10",
    skills:["Figma","HTML5","css3","JavaScript","BootStrap","ReactJS","NodeJS","MySQL"],
    links:{gitHub:"https://github.com/carloseduardodefranca"}

  }

  return(
    <>
    <main className="app">
      <section className="page-intro">
        <span className="tag">Projeto ReactJS</span>
        <h1>Cartão de perfil profissional</h1>
        <p>um projeto simples,bonito e ideal para apendermos componentes,props, listas e estilização com ReactJS</p>
      </section>
        <ProfileCard profile={profile}/>
    </main>
    </>
  )
}

export default App