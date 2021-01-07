import React from 'react'
import { Box } from 'goods-core'
import Navbar from '@xendit/components/navbar'
import Card from '@xendit/components/card'

const IndexPages = () => (
  <Box w>
    {/* navbar */}
    <Navbar title='University List App' />
    {/* content */}
    <Box w p='8px 16px'>
      {/* card */}
      <Card
        name='Telkom University'
        country='Indonesia'
        website='https://telkomuniversity.ac.id/'
        code='ID'
      />
    </Box>
  </Box>
)

export default IndexPages
