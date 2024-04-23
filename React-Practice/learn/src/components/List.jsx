import React from 'react'

function List() {

    const fruits=["apple", "Mango", "Banana","Pineapple"];
    //This will give this output: appleMangoBananaPineapple




    //array of abjects
    const fruits1=[
        {id:1,name:"apple", calories:100},
        {id:2,name:"Mango", calories:101},
        {id:3,name:"Banana", calories:200},
        {id:4,name:"Grapes", calories:110},
        {id:5,name:"Pineapple", calories:105},
]
fruits1.sort((a,b)=>a.name.localeCompare(b.name))



    const listItem=fruits.map(fruits=><li>{fruits}</li>)
    //apple
    //Banana
    //Mango
    //Pineapple
    const listItem1=fruits1.map(fruits1=><li>{fruits1.name}</li>)
        
   
    
  return (
    <div>
        {/* {fruits}
        {listItem} */}
        {listItem1}
        
    </div>
  )
}

export default List;