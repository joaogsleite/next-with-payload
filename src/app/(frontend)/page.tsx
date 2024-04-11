import Example from '@/components/example'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <article className="mt-10 container mx-auto">
      <h1 className="text-xl">Payload 3.0</h1>

      <div className="p-4"></div>

      <ul className="list-disc px-4">
        <li>
          <Link className="text-blue-500" href="/admin">
            /admin
          </Link>{' '}
          contains the Admin panel
        </li>
        <li>
          <Link className="text-blue-500" href="/my-route" target="_blank">
            /my-route
          </Link>{' '}
          contains an example of a custom route running the Local API
        </li>
      </ul>

      <div className="p-4"></div>

      <Example />

    </article>
  )
}

export default Page
