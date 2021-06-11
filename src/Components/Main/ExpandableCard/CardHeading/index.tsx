import { 
    Box ,
    Flex ,
    Text ,
    Tag
} from '@chakra-ui/react';
import React from 'react';
import { CardHead } from '../../../../Models';

export default function CardHeader( { title , langs } : CardHead ) :React.ReactElement{
    return <Box
    w="full"
    p="4"
    >
        <Flex
        flexDir="column"
        justifyContent="space-between"
        alignItems="start"
        >
            <Text fontSize="xl" fontWeight="bold">{title}</Text>
            <Box>
                {langs.map(({name})=>{
                    return <Tag
                    bgColor="teal.100"
                    mx="1"
                    >
                        <Text textColor="green.900" fontSize="sm">{ name }</Text>
                    </Tag>;
                })}
            </Box>
        </Flex>
    </Box>
}