import React from 'react';
import style from "./aboutPage.module.css"
const AboutPage = (props) => {
    return (
        <div className={style.center}>
            <h1 className={style.main_text}>Задание 2 </h1>
            <h1>1.{props.pageContend.title}</h1>
            <h1>2.{props.pageContend.description}</h1>
        </div>
    );
};

export default AboutPage;