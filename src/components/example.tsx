import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

const Example: React.FC = async () => {
  const payload = await getPayload({ config: configPromise })
  const collectionNames = Object.keys(payload.collections)

  return <div>Available collections: <i>{collectionNames.join(', ')}</i></div>
}

export default Example