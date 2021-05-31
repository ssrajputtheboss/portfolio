import jsonData from '../data/data.json';
import { ProjectData } from '../Models';
const data = jsonData;

export const filterData : Function = ( lang : string ) : Array<ProjectData> => {
    return data.filter( ( v : ProjectData) => {
        return v.langs.map(({ name })=>{return name;}).includes(lang.toLocaleLowerCase());
    } );
}

export const changeDirectory: Function = ( pname : string ) : Array<ProjectData> => {
    return data.filter( ( v : ProjectData) => {
        return v.header.toLowerCase() === pname.toLowerCase() ;
    } );
}

export const searchData : Function = ( word : string ) : Array<ProjectData> => {
    return data.filter( ( v : ProjectData) => {
        return v.langs.map(({name})=>{return name;}).join('').toLowerCase().includes( word.toLowerCase() ) || v.url.toLowerCase().includes( word.toLowerCase() ) || v.header.toLowerCase().includes( word.toLowerCase() ) || v.description.toLowerCase().includes( word.toLowerCase() );
    } );
}

export const sortData : Function = ( sType : string ) : Array<ProjectData> => {
    return data.sort( ( x : ProjectData , y: ProjectData ) => {
        return sType === 'increasing' ?
        ( x.header > y.header ? 1: -1 ) : ( x.header < y.header ? 1: -1 );
    } );
}