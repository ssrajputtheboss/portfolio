import { IconType } from "react-icons/lib";

export interface LiveProjectData{
    projectLink : string,
    isLive : boolean
}

export interface ProjectData extends LiveProjectData{
    header : string ,
    url : string ,
    description : string ,
    langs : Array<LangData>,
    stack : Array<string>
}

export interface LangData{
    name : string,
    data : number
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
    iconColor: string,
    isActiveSkill: boolean
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
    langs : Array<LangData>
}

export interface PieData{
    series : Array<number> ,
    labels : Array<string>
}