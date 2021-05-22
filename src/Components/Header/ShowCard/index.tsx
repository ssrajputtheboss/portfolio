import { 
    Box ,
    Flex , 
    Divider ,
    Text ,
    IconButton,
    Icon , 
    Grid
} from '@chakra-ui/react';

import { CgOrganisation } from 'react-icons/cg';
import { RiFlutterFill } from 'react-icons/ri';
import { DiPostgresql } from 'react-icons/di';
import { 
    SiAndroidstudio ,
    SiReact ,
    SiNodeDotJs ,
    SiMongodb ,
    SiPython
} from 'react-icons/si';
import SkillTag from './SkillTag';

interface Props{
    isVisible:boolean
}

export default function ShowCard(props: Props): React.ReactElement{
    return <Box
    w="fit-content"
    maxW={{ base: "100%" , lg:"3xl" }}
    style={{ display: props.isVisible ? 'block':'none' }}
    borderRadius="xl"
    borderWidth="medium"
    borderColor="teal.900"
    bgColor="teal.100"
    >
        <Flex
            flexDir="column"
            alignItems="start"
            justifyContent="start"
            p="4"
            >
            <Text fontSize="xl" fontWeight="extrabold" > SHASHANK SINGH </Text>
            <Flex
            w="full"
            flexDir="row"
            justifyContent="start"
            alignItems="center"
            p="2"
            >
                <Text fontSize="sm"  mx="2">Currently B.Tech CSE 3rd year student at</Text>
                <a href="https://www.iiitkottayam.ac.in/#!/home" >
                    <Flex
                    w="fit-content"
                    flexDir="row"
                    justifyContent="end"
                    alignItems="center"
                    >
                        <IconButton
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
            <Text fontSize="sm" fontWeight="bold" color="green.900">Skills</Text>
            <Divider color="lime" orientation="horizontal"/>
            <Grid 
            templateColumns={{lg:'repeat(5, 1fr)' , base: 'repeat(3,1fr)'}}
            gap={2}
            p={2}>
                <SkillTag icon={ RiFlutterFill } name="Flutter" iconColor="blue.400" />
                <SkillTag icon={ SiAndroidstudio } name="Android" iconColor="green.500" />
                <SkillTag icon={ SiReact } name="React" iconColor="blue.700" />
                <SkillTag icon={ SiNodeDotJs } name="NodeJS" iconColor="green.400" />
                <SkillTag icon={ SiMongodb } name="MongoDB" iconColor="green.600" />
                <SkillTag icon={ DiPostgresql } name="PostgreSQL" iconColor="blue.400" />
                <SkillTag icon={ SiPython } name="Python" iconColor="blue.400" />
            </Grid>
        </Flex>
    </Box>
}