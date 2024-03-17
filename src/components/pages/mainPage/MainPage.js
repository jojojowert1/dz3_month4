import React from "react";
import style from "./mainPage.module.css"

class MainPage extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className={style.center}>
                <h1>Задание 1   =>    :</h1>
                <div>
                    <h1 className={style.text}>{this.props.text}</h1>
                </div>
            </div>

        )

    }
}

export default MainPage