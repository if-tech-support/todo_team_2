import React from 'react'
import { Flex, Spacer, IconButton } from '@chakra-ui/react'
import {DeleteIcon, EditIcon, ExternalLinkIcon} from '@chakra-ui/icons'

function MainButtons() {
    return (
            <Flex>
                <IconButton
                    bg={'yellow.300'}
                    aria-label='TRASH'
                    icon={<DeleteIcon/>}
                    borderRadius='100%'
                    _hover={{
                        opacity: 0.9,
                    }}
                />
                <Spacer/>
                <IconButton
                    bg={'pink.300'}
                    aria-label='DRAFT'
                    icon={<EditIcon/>}
                    borderRadius='100%'
                    _hover={{
                        opacity: 0.9,
                    }}
                />
                <Spacer/>
                <IconButton
                    bg={'green.300'}
                    aria-label='NEW'
                    icon={<ExternalLinkIcon/>}
                    borderRadius='100%'
                    _hover={{
                        opacity: 0.9,
                    }}
                />
            </Flex>
    )
}

export default MainButtons
