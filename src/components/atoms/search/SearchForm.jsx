import React　from 'react';
import { Input,InputGroup,InputRightElement,Text,IconButton } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

const SearchForm =()=>{
    return(
        <>
            <Text fontSize="18px" fontWeight="700" fontFamily="Gothic A1" pb={2}>SEARCH</Text>
            <InputGroup w={48}>
                <Input
                    placeholder='Text'
                    border="1px solid rgba(0, 0, 0, 0.8)" size="md" 
                    
                />
                <InputRightElement
                    children={
                        <IconButton
                            aria-label='Search database'
                            icon={<SearchIcon color='rgba(0, 0, 0, 0.2)'/>}
                            colorScheme='transparent'
                        />
                    } 
                />
            </InputGroup>
        </>
    )
}

export default SearchForm;