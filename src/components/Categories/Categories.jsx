import React from "react";
import "./Categories.css";

const categories = [
  {name:"Dog", img:"/images/Ellipse 1.png"},
  {name:"Cat", img:"/images/Ellipse 2.png"},
  {name:"Fish", img:"/images/Ellipse 3.png"},
  {name:"Rabbit", img:"/images/Ellipse 4.png"},
  {name:"Birds", img:"/images/Ellipse 5.png"},
  {name:"Hamsters", img:"/images/Ellipse 6.png"},
  {name:"Turtles", img:"/images/Ellipse 7.png"}
];

function Categories(){
  return (  
    <section className="categories">
      <h1 className="center">Category</h1>
      <div className="cats-row">
        {categories.map((c) => (
          <div className="cat-item card" key={c.name}>
            <img src={c.img} alt={c.name} />
            <span>{c.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
