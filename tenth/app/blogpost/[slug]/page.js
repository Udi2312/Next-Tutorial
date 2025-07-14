"use client"
import React from 'react'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation'

const page = () => {
  const { slug } = useParams();
  const router = useRouter();
  return (
    <div>{slug}
        <button onClick={() => router.push('/about')}>Go to About</button>
        <button onClick={() => router.push('/')}>Go to Home</button>
    </div>
  )
}

export default page