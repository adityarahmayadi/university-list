import React from 'react'
import { Box, Text, Image } from 'goods-core'
import data from '@xendit/data/users.json'

const NewsPage = () => {
  return (
    <Box w p={{ xs: '0px 16px', lg: '0px 120px', xl: '0px 240px' }}>
      {data.data.map((item) => (
        <Box
          key={item.source.key}
          w
          p='16px'
          shadow='5px 8px 24px 5px rgba(208, 216, 243, 0.6)'
          radius='8px'
        >
          <Image src={item.urlToImage} objectFit='contain' mb='32px' />
          <Text as='h1' fSize={{ xs: '16px', lg: '32px' }}>
            {item.title}
          </Text>
          <Text mb='8px' fSize='12px'>
            {item.description}
          </Text>
          <Text>{item.content}</Text>
        </Box>
      ))}
    </Box>
  )
}
export default NewsPage
