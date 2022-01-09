import React from 'react'
// import { Select } from '@chakra-ui/react'
import Head from 'next/head'
import { SearchPriority } from '../src/components/atoms/search/SearchPriority'
export default function test () {
    return (
        <div>

            <Head>
            </Head>

            <main>
            {/* <Select
                placeholder="- - - - -"
                color='#E5E5E5'
                border='1px solid #E5E5E5'
            >
                <option value="option1">Low</option>
                <option value="option2">Middle</option>
                <option value="option3">High</option>
            </Select> */}
                <SearchPriority />
            </main>

        </div>
    )
}