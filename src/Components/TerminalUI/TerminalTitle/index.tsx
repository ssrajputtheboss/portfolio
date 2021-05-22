import { 
    Box , 
    Flex , 
    Text ,
    Icon
} from '@chakra-ui/react';
import { AiFillCloseCircle } from 'react-icons/ai';

export default function TerminalTitle( { onClose } : { onClose: Function} ) : React.ReactElement{
    return <Box
    bgColor="grey"
    borderTopRadius="3xl"
    >
        <Flex
        flexDir="row"
        justifyContent="space-between"
        alignItems="center"
        w="full"
        >
            <Text mx="8" fontSize="sm" fontWeight="bold">S_Terminal</Text>
            <Box
            mr="5"
            onClick = { (e)=>{
                onClose();
            }}
            >
                <Icon as={ AiFillCloseCircle } h="5" w="5" color="red" />
            </Box>
        </Flex>
    </Box>;
}