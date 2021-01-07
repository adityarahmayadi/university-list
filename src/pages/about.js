import React from 'react'
import { Box, Text } from 'goods-core'

const AboutPage = () => (
  <Box w fAlign='center' fJustify='center' h='80vh'>
    <Box
      w='320px'
      heigth='400px'
      fAlign='center'
      fJustify='center'
      shadow='5px 8px 24px 5px rgba(208, 216, 243, 0.6)'
      p='32px'
      radius='8px'
    >
      <Box
        w='140px'
        h='140px'
        radius='70px'
        b='2px dashed grey'
        fAlign='center'
        fJustify='center'
        mb='16px'
      >
        <Text fSize='56px' weight='600'>
          AR
        </Text>
      </Box>
      <Text>Aditya Rahmayadi</Text>
      <Text mb='16px'>Software Engineer - Frontend</Text>
      <Text as='a' href='https://github.com/adityarahmayadi' target='_blank'>
        Github - adityarahmayadi
      </Text>
      <Text as='a' href='https://www.linkedin.com/in/adityarahamayadi/' target='_blank'>
        LinkedIn - adityarahmayadi
      </Text>
    </Box>
  </Box>
)

export default AboutPage
