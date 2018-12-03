import React from 'react'

const Footer = () => (
  <footer>
    <p>ohh wait, its another movie database search</p>
    <p className="hidden">Powered by <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">TMDb</a></p>
    <div className="poweredbyTMDB">
    <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">
    <img src="https://www.themoviedb.org/assets/1/v4/logos/powered-by-rectangle-green-dcada16968ed648d5eb3b36bbcfdd8cdf804f723dcca775c8f2bf4cea025aad6.svg" alt="the movie database logo" rel="noopener noreferrer"/>
    </a>
    </div>
  </footer>
)

export default Footer
