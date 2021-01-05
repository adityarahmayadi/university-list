import React from 'react'
import { Box, Image, Text } from 'goods-core'
import { getRandomImage } from '@xendit/utils/helpers'

const Card = () => (
  <Box w='420px' radius='8px' shadow='5px 8px 24px 5px rgba(208, 216, 243, 0.6)' overflow='hidden'>
    <Box w bg='red20' h='240px' fAlign='center' fJustify='center'>
      <Image w h='240px' src={getRandomImage()} objectFit='cover' />
    </Box>
    <Box fDir='row' fAlign='center' fJustify='space-between' p='16px'>
      <Box>
        <Text as='h1' fSize='16px' weight='500'>
          University Name
        </Text>
        <Text fSize='14px' mb='8px'>
          Country
        </Text>
        <Text fSize='14px' weight='300' fontStyle='italic'>
          Website
        </Text>
      </Box>
      <Box w='48px' h='48px' radius='24px' b='2px dashed grey' fAlign='center' fJustify='center'>
        <Text fSize='16px' weight='600'>
          KW
        </Text>
      </Box>
    </Box>
  </Box>
)

export default Card
