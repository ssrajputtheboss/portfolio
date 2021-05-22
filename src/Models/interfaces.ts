import { IconType } from "react-icons/lib";

export interface ProjectData{
    header : string ,
    url : string ,
    description : string ,
    lang : string
}

export interface ReadMeProps{
    src: string , 
};

export interface ReadMeKey{
    type : string ,
    info : string ,
    index : number
}

export interface ReadMeValue{
    title : string,
    content : string
}

export interface ReturnValue{
    text: string ,
    list: Array<string>
}

export interface Skill {
    name: string ,
    icon: IconType,
    iconColor: string
}


export interface CommandJSON{
    main : string ,
    args : Array<string>
}

export interface Command{
    func : string ,
    subFunc : string | null
}

export interface CardHead{
    title : string ,
    lang : string ,
}