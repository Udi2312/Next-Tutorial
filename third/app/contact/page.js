import React from 'react'
import Script from 'next/script'

const page = () => {
  return (
    <div>
        <Script>
            {`alert("This is contact page");`}
        </Script>
        I am contact page
        </div>
  )
}

export default page

export const metadata = {
  title: "This is the contact page",
  description: "Connect with the world",
};