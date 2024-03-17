import React from 'react';
import  style from "./userPage.module.css"

const UsersPage = ({ usersData }) => {
    return (
        <div className={style.center}>
            <h1>Задание 3    =>    :</h1>
            <ul>
                {usersData.map((user, index) => (
                    <li className={style.text} key={index}>
                        <span>Name:</span> {user.name}, <span>Age:</span> {user.age}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UsersPage;