import { 
    Box , 
    Flex , 
    Text ,
    Icon ,
} from '@chakra-ui/react';
import { AiFillCloseCircle , AiOutlineInfoCircle } from 'react-icons/ai';
import { BsTerminal } from 'react-icons/bs';

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
            <Flex
            flexDir="row"
            alignItems="center"
            >
                <Icon ml="5" as={ BsTerminal } h="5" w="5" color="black" />
                <Text ml="1" fontSize="sm" fontWeight="bold">S_Terminal</Text>
            </Flex>
            <Flex
            flexDir="row"
            alignItems="center"
            mr="5">
                <Box
                onClick = { (e)=>{
                    alert('commands are: xyz')
                }}
                >
                    <Icon as={ AiOutlineInfoCircle } h="5" w="5" color="blue" />
                </Box>
                <Box
                onClick = { (e)=>{
                    onClose();
                }}
                >
                    <Icon as={ AiFillCloseCircle } h="5" w="5" color="red" />
                </Box>
            </Flex>
        </Flex>
    </Box>;
}