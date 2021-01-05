import React from 'react'
import { Box, Text, Icon } from 'goods-core'

const Navbar = () => (
  <Box
    w
    p='16px'
    fDir='row'
    fJustify='space-between'
    as='nav'
    shadow='5px 8px 24px 5px rgba(208, 216, 243, 0.6)'
  >
    <Box fDir='row' fAlign='center' fJustify='flex-start'>
      <Icon name='note' c='blue60' mr='12px' />
      <Text fSize='24px' as='h1'>
        University List App
      </Text>
    </Box>

    <Box fDir='row' fAlign='center' fJustify='center' as='ul'>
      <Box as='li' mr='24px' cursor='pointer' hoverProps={{ c: 'blue60' }}>
        Home
      </Box>
      <Box as='li' mr='24px' cursor='pointer' hoverProps={{ c: 'blue60' }}>
        Newsletter
      </Box>
      <Box as='li' mr='24px' cursor='pointer' hoverProps={{ c: 'blue60' }}>
        Setting
      </Box>
    </Box>
  </Box>
)

export default Navbar
