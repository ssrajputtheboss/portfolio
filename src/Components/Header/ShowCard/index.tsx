import { 
    Box ,
    Flex , 
    Text ,
    IconButton,
    Icon , 
} from '@chakra-ui/react';
import { CgOrganisation } from 'react-icons/cg';
import SkillMenu from './SkillMenu';
import DatabaseMenu from './DatabaseMenu';
import LangMenu from './LangMenu';

interface Props{
    isVisible:boolean
}

export default function ShowCard(props: Props): React.ReactElement{
    return <Box
    w="fit-content"
    maxW={{ base: "300px" , lg:"3xl" }}
    style={{ display: props.isVisible ? 'block':'none' }}
    borderRadius="xl"
                borderWidth="medium"
                borderColor="teal.900"  
                bgColor="gray.100"
    >
        <Flex
        flexDir={{ base:'column' , lg: 'row' }}
        alignItems={{ base:'start' , lg:'center' }}
        justifyContent="space-between"
        p="1"
        >
            <Flex 
            h="full" 
            w="min"
            >
                <Text
                textColor="black" 
                fontSize="xl" 
                fontWeight="bold" 
                transform={{ base:'rotate(0deg)' , lg:'rotate(-90deg)'}} 
                p="2"
                > SHASHANK SINGH </Text>
            </Flex>
            <Flex
                flexDir="column"
                alignItems="start"
                justifyContent="start"
                p="2"
                >
                <Flex
                w="full"
                flexDir="row"
                justifyContent="start"
                alignItems="center"
                p="2"
                >
                    <Text textColor="black" fontSize="sm"  mx="2">Currently B.Tech CSE 3rd year student at</Text>
                    <a href="https://www.iiitkottayam.ac.in/#!/home" >
                        <Flex
                        w="fit-content"
                        flexDir="row"
                        justifyContent="end"
                        alignItems="center"
                        >
                            <IconButton
                            bgColor="black"
                            aria-label="icon"
                            h="7"
                            w="7"
                            mx="2"
                            >
                                <Icon as={ CgOrganisation } h="5" w="5" color="grey.400" />
                            </IconButton>
                           <Text fontSize="sm" fontWeight="medium" color="green.900"> IIIT Kottayam </Text> 
                        </Flex>
                    </a>
                </Flex>
                <LangMenu/>
                <SkillMenu/>
                <DatabaseMenu/>
            </Flex>
        </Flex>
    </Box>
}