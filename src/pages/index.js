import React, { useEffect, useState } from 'react'
import { useAppContext } from '@xendit/contexts/app.context'
import { useDebounce } from '@xendit/hooks/useDebounce'
import { Box, Text } from 'goods-core'
import { Field } from '@xendit/components'
import Card from '@xendit/components/card'

const IndexPages = () => {
  const [{ universities }, dispatch] = useAppContext()
  const [searchKey, setSearchKey] = useState('middle')
  const finalSearchKey = useDebounce(searchKey, 500)

  useEffect(() => {
    if (finalSearchKey) {
      fetch(`http://universities.hipolabs.com/search?name=${finalSearchKey}`)
        .then((res) => res.json())
        .then((result) => {
          dispatch({
            type: 'SET_UNIVERSITIES',
            payload: {
              universities: result,
            },
          })
        })
    } else {
      dispatch({
        type: 'SET_UNIVERSITIES',
        payload: {
          universities: [],
        },
      })
    }
  }, [finalSearchKey])

  return (
    <Box w>
      <Box cursor='pointer' fAlign='center' fJustify='center' mb='16px' p='0px 16px'>
        <Field
          onChange={({ target }) => setSearchKey(target.value)}
          placeholder='Search University...'
        />
      </Box>
      {universities.length > 0 ? (
        <Box
          w
          p='8px 16px'
          d='grid'
          gap='24px'
          gTempCol={{
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(2, 1fr)',
            xl: 'repeat(4, 1fr)',
          }}
        >
          {/* card */}
          {universities.map((item, index) => (
            <Card
              key={`university-index-${index}`}
              name={item.name}
              country={item.country}
              website={item.web_pages[0]}
              code={item.alpha_two_code}
            />
          ))}
        </Box>
      ) : (
        <Box w fAlign='center' fJustify='center'>
          <Text>No Result, Please type a keyword</Text>
        </Box>
      )}
    </Box>
  )
}

export default IndexPages
