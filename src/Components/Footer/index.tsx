import React from 'react';
import { Flex } from '@chakra-ui/layout';
import { SiGithub, SiTwitter, SiLinkedin, SiDocker } from 'react-icons/si';
import Icon from '@chakra-ui/icon';

export const Footer = (): React.ReactElement => {
  /*const profiles = [
        'https://github.com/ssrajputtheboss',
        'http://twitter.com/ssrajputtheboss',
    ];
    const icons = [
        SiGithub,
        SiTwitter,
        SiLinkedin
    ]
    const colors = [
        'white',
        'twitter.500',
        'blue.800'
    ]*/
  return (
    <footer style={{ height: 'fit-content', width: '100vw' }}>
      <Flex
        flexDir='row'
        justifyContent='space-around'
        alignItems='center'
        w='full'
        h='32'
        bgColor='black'>
        <a href='https://github.com/ssrajputtheboss'>
          <Icon as={SiGithub} color='white' />
        </a>
        <a href='http://twitter.com/ssrajputtheboss'>
          <Icon as={SiTwitter} color='twitter.500' />
        </a>
        <a href='https://www.linkedin.com/in/shashank-singh-0aaab8208/'>
          <Icon as={SiLinkedin} color='blue.800' />
        </a>
        <a href='https://hub.docker.com/u/ssrajputtheboss'>
          <Icon as={SiDocker} color='blue.500' />
        </a>
      </Flex>
    </footer>
  );
};
//             {profiles.map((url:string,i:number)=><ProfileLinkExpandable color={colors[i]} icon={icons[i]} url={url} />)}
