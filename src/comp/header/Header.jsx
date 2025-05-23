import React, { useContext } from 'react'
import "./Header.scss"
import { UserContext } from '../../../Context'
const Header = ({title}) => {

  const {active} = useContext(UserContext);


  return (
    <>
      <div class={active ? "header active" : "header"}>
        <h3 class="name"> {title} </h3>
        <div class="logout"></div>
      </div>
    </>
  )
}

export default Header
