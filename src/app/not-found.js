
import Link from 'next/link'
import React from 'react'

function NotFound() {
  return (
    <div>
        <h1>Oops!!! This page cannot be found</h1>
        <Link href={'/'}>Go to Homepage</Link>
    </div>
  )
}

export default NotFound