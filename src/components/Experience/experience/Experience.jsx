import React, { useState } from "react";
import style from "./Experience.module.css";
import { Header } from "../../common";
import { expList } from "../../../data/data";

const Experience = () => {
  const [currentExp, setCurrentExp] = useState(expList[0]);

  const handleExpChange = (exp) => {
    setCurrentExp(exp);
  };
  return (
    <main className={style.container}>
      <Header title="Experience" />
      <div className={style.expContainer}>
        <div className={style.expBox}>
          <ul className={style.expTop}>
            {expList.map((exp) => {
              return (
                <li
                  key={exp.title}
                  className={style.expTitle}
                  onClick={() => handleExpChange(exp)}
                >
                  {exp.title}
                </li>
              );
            })}
          </ul>
          <div className={style.expBottom}>
            <h3>{currentExp.position}</h3>
            {currentExp.data.map((item) => {
              return <li>{item}</li>;
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Experience;
