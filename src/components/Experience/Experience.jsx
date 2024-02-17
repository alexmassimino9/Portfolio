import React, { useState } from "react";
import style from "./Experience.module.css";
import { Header } from "../common";
import { expList } from "../../data/data";

const Experience = () => {
  const [currentExp, setCurrentExp] = useState(expList[0]);

  const handleExpChange = (exp) => {
    setCurrentExp(exp);
  };

  return (
    <main id="experience" className={style.container}>
      <Header title="Experience" />
      <div className={style.expContainer}>
        <div className={style.expBox}>
          <ul className={style.expTop}>
            {expList.map((exp) => (
              <li
                key={exp.title}
                className={`${style.expTitle} ${
                  exp.title === currentExp.title ? style.activeExp : ""
                }`}
                onClick={() => handleExpChange(exp)}
              >
                {exp.title}
              </li>
            ))}
          </ul>
          <div className={style.expBottom}>
            <h3>
              {currentExp.position}
              <span className={style.expCompany}> @ {currentExp.title}</span>
            </h3>
            <p> {currentExp.tenure}</p>
            {currentExp.data.map((item, index) => (
              <li key={index} className={style.expItem}>
                {item}
              </li>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Experience;
