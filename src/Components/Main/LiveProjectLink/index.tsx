import { LiveProjectData } from '../../../Models';
import { Box, Flex, Text, Link, Icon } from '@chakra-ui/react';
import { FiArrowRight } from 'react-icons/fi';

export const LiveProjectLink = ({ projectLink, isLive }: LiveProjectData): React.ReactElement => {
  if (!isLive) return <></>;
  return (
    <Box
      as={Flex}
      alignItems='center'
      bgColor='green.400'
      borderColor='whiteAlpha.200'
      borderWidth='medium'
      h='fit-content'
      w='full'
      p='2'
      rounded='md'>
      <Text mx='4' fontWeight='bold'>
        This project is live!
      </Text>
      <Link
        target='_blank'
        fontWeight='bold'
        bgColor='blue.400'
        rounded='lg'
        p='2'
        mx='6'
        href={projectLink}>
        Click Here
        <Icon as={FiArrowRight} />
      </Link>
    </Box>
  );
};
