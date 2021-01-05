import React from 'react'
import { Box, Text, Image } from 'goods-core'
import Navbar from '@xendit/components/navbar'
import Card from '@xendit/components/card'

const IndexPages = () => (
  <Box w>
    {/* navbar */}
    <Navbar />
    {/* content */}
    <Box w p='8px 16px'>
      {/* card */}
      <Card />
    </Box>
  </Box>
)

export default IndexPages
