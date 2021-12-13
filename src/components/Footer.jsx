import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="py-6 text-white text-xs gap-2 flex flex-col items-center bg-gray-800">
        <h1>Copyright © The Ðogecoin Project 2021</h1>
        <p>
          Created by{' '}
          <a href="https://ummjackson.com/" className="footer__link">
            Jackson Palmer
          </a>{' '}
          &{' '}
          <a className="footer__link" href="https://twitter.com/BillyM2k">
            Shibetoshi Nakamoto.
          </a>{' '}
          Website Design by{' '}
          <a className="footer__link" href="https://www.reddit.com/user/edswf1">
            /u/edswf1
          </a>
          . Logo by{' '}
          <a className="footer__link" href="http://christinemix.com/">
            Christine Ricks
          </a>
          .
        </p>
      </footer>
    </>
  )
}

export default Footer
