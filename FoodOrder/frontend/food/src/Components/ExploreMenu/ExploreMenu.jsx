import React from 'react'
import "./ExploreMenu.css"
import { menu_list } from '../../Assests/Assets'

function ExploreMenu() {
  return (
   <>
   <div className='explore-menu' id='explore-menu'>
    <h1>Explore our Menu</h1>
    <p className='explore-menu'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio pariatur mollitia quibusdam alias iste sint doloribus beatae nihil illo similique eos tempore harum modi consectetur, odio cupiditate officia necessitatibus voluptatem?</p>
    <div className='explore-menu-list'>
        {
            menu_list.map((item,index)=>{
                return(<div className='explore-menu-list-item' >
                    <img src={item.Menu_Image} alt="img" />
                    
                </div>)
            })
        }


    </div>



   </div>
   
   </>
  )
}

export default ExploreMenu