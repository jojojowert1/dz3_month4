import MainPage from "./components/pages/mainPage/MainPage";
import AboutPage from "./components/pages/aboutPage/AboutPage";
import UserPage from "./components/pages/userPage/UserPage";
import style from "./app.module.css"


function App(props) {
    const mainContend = "Main Contend"

    const AboutPageContend = {
        title: "Title",
        description: "text text text"
    }

    const userArray =  [{name: "Anna", age: 20}, {name: "Klara", age: 30}, {name: "Sofia", age: 25}]

  return (
    <div className={style.img}>
        <MainPage text={mainContend}/>
        <AboutPage pageContend={AboutPageContend}/>
        <UserPage usersData={userArray}/>
    </div>
  );
}

export default App;
