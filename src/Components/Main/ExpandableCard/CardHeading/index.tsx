import { 
    Box ,
    Flex ,
    Text ,
    Tag
} from '@chakra-ui/react';
import React from 'react';
import { CardHead } from '../../../../Models';

export default function CardHeader( { title , lang } : CardHead ) :React.ReactElement{
    return <Box
    w="full"
    p="4"
    >
        <Flex
        justifyContent="space-between"
        alignItems="center"
        >
            <Text fontSize="xl" fontWeight="bold">{title}</Text>
            <Tag
            color="teal.400"
            >
                <Text fontSize="sm">{lang}</Text>
            </Tag>
        </Flex>
    </Box>
}