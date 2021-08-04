import React, { useState } from "react";
import { LinkPreview } from "@dhaiwat10/react-link-preview";
import { IconType } from "react-icons/lib";
import { Icon } from "@chakra-ui/react";

export const ProfileLinkExpandable = ({color,url,icon}:{color:string,url:string,icon:IconType}):React.ReactElement=>{
    const [isExpanded,setExpanded] = useState<boolean>(false);
    const preview = <LinkPreview showLoader={false} url={url} height="10rem" width="20rem" />;
    if(!isExpanded)
        return <Icon 
        as={icon} 
        color={color}
        w="6" 
        h="6" 
        onMouseEnter={()=>{
            setExpanded(true);
        }}
        onMouseLeave={()=>{
            setExpanded(false);
        }}
        />
    return <div onMouseLeave={()=>{
        setExpanded(false);
    }}>
        {preview}
    </div>;
}