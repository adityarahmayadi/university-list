import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { Box, Text, Icon } from 'goods-core'

const Navbar = ({ title, menus = [] }) => {
  const history = useHistory()
  const goto = useCallback((uri) => () => {
    history.push(uri)
  })

  return (
    <Box
      w
      p='16px'
      fDir={{ xs: 'column', lg: 'row' }}
      fJustify='space-between'
      as='nav'
      posi='fixed'
      bg='white'
      shadow='5px 8px 24px 5px rgba(208, 216, 243, 0.6)'
    >
      <Box
        fDir='row'
        fAlign='center'
        fJustify={{ xs: 'center', lg: 'flex-start' }}
        mb={{ xs: '16px', lg: '0px' }}
      >
        <Icon name='note' c='blue60' mr='12px' />
        <Text fSize='24px' as='h1'>
          {title}
        </Text>
      </Box>

      <Box fDir='row' fAlign='center' fJustify={{ xs: 'space-around', lg: 'center' }} as='ul'>
        {menus.length > 0 &&
          menus.map((item, index) => (
            <Box
              as='li'
              mr={{ xs: '0px', lg: '24px' }}
              cursor='pointer'
              key={`menu-item-${index}`}
              onClick={goto(item.url)}
            >
              <Text>{item.name}</Text>
            </Box>
          ))}
      </Box>
    </Box>
  )
}
export default Navbar
