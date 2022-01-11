import React from 'react'
import { Box, IconButton } from '@chakra-ui/react'
import {DeleteIcon,EditIcon,ExternalLinkIcon} from '@chakra-ui/icons'

function MainButtons() {
    return (
        <div>
            <Box display="flex" alignItems="center" justifyContent="space-between">
                <IconButton
                    bg={'yellow.300'}
                    aria-label='TRASH'
                    icon={<DeleteIcon/>}
                    borderRadius='100%'
                    _hover={{
                        opacity: 0.9,
                    }}
                />
                <IconButton
                    bg={'pink.300'}
                    aria-label='DRAFT'
                    icon={<EditIcon/>}
                    borderRadius='100%'
                    _hover={{
                        opacity: 0.9,
                    }}
                />
                <IconButton
                    bg={'green.300'}
                    aria-label='NEW'
                    icon={<ExternalLinkIcon/>}
                    borderRadius='100%'
                    _hover={{
                        opacity: 0.9,
                    }}
                />
            </Box>
        </div>
    )
}

export default MainButtons
