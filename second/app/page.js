// 'use client'
// import { useEffect, useState } from 'react';
import Navbar from "@/components/Navbar"

export default function Home() {
  // const [count, setcount] = useState(0)
  return (
    <div>
      <Navbar />
      I am a component 
      {/* {count}
      <button onClick={() => setcount(count+1)}>Increment</button>  */}
    </div>
  )
}
