import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

export const Layout = ({children}) => {
  return (
    <div class="page-wrapper">
        <Navbar/>
        <main class="main">
            {children}
        </main>
        <Footer/>
    </div>
  )
}
