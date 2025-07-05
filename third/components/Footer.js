import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer>
    <div>Footer</div>
    <ul>
      <Link href="/"><li>Home</li></Link>
      <Link href="/about"><li>About</li></Link>
      <Link href="/contact"><li>Contact</li></Link>
    </ul>
    </footer>
  )
}

export default Footer