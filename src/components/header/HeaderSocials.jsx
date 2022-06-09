import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiLeetcode} from 'react-icons/si'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="linkedin.com/in/anastasiia-b-20954b1a0" target="_blank"><BsLinkedin/></a>
        <a href="github.com/AnastasiiaBoryslavska" target="_blank"><FaGithub/></a>
        <a href="leetcode.com/AnastasiiaBoryslavska/" target="_blank"><SiLeetcode/></a>
    </div>
  )
}

export default HeaderSocials