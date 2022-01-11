import React,{useState} from 'react';
import { Input } from '@chakra-ui/react'

const SearchBox =()=>{
    const [searchText,setSearchText]=useState('');
    return(
        <>
            <Input
                placeholder='Basic usage'
                value={searchText}
                onChange={(e)=>setSearchText(e.target.value)}
                
            />
        </>
    )
}

export default SearchBox;