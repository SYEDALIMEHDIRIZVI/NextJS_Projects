'use client'

import { Button } from "@/components/ui/button"

import { title } from "process";

import React from "react";

 
function MyButton() {
  function handleClick() {
    alert('You clicked me!');
    }
      return (
          <Button variant="outline" onClick={handleClick}>I m a button</Button>
          
  );
 
}

export default function myApp() {
  return (
      <div >
          <h1 >Welcome to my app</h1>
      <MyButton/>
      </div>
  )
}



// const products=[
//   {title:'Cabbage',isFruit:false,id:1},
//   {title:'Garlic',isFruit:false,id:2},
//   {title:'Apple',isFruit:true,id:3},
//   {title:'Orange',isFruit:false,id:3},
//   {title:'Orange',isFruit:false,id:3},
  
// ];

// export default function ShoppingList(){
//   const listItems=products.map(product => 
//     <li
//     key={product.id}
//     style={{
//       color:product.isFruit?'magenta':'darkgreen'
//     }}

//     >
//     {product.title}
//   </li>
// );

// return (
//   <ul>{listItems}</ul>
// );
// }



// File: components/MyButton.js