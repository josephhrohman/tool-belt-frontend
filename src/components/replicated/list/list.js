import React from 'react';
import './list.css';


function List() {

  const data = {
    img_url: "https://cdn.shopify.com/s/files/1/0978/7942/products/318288_1000x.jpg?v=1497014690",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam labore delectus rem consequuntur ut consequatur assumenda vel saepe ex, itaque, aperiam distinctio facilis, nesciunt ipsa voluptatibus iste odio nulla alias."
  }

  console.log(data);
  console.log(data.img_url);

  return(
    <>
      <div className="list-body">
        <p className="content"> {data.content} </p>
        <img className="list-img" src={data.img_url} alt="list-img" />
      </div>
      <hr />
    </>
  )
}

export default List;

// <div className="list-body">
    //   <img src="#" alt="list-img" />
    //   <p class="content"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, 
    //     natus! Adipisci porro culpa vel placeat, facilis minima nesciunt voluptatibus aliquam 
    //     tempora vitae fuga. Numquam perferendis, ipsum eos nulla nobis libero! </p>
    // </div>