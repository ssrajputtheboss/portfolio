import _ from "lodash";
import { ReadMeKey , ReadMeValue , ReturnValue } from "../Models";

export const fetchReadMeFromURL : Function = async( url : string) : Promise<string> => {
    const res : string | Response | (() => Promise<string>) = await fetch(url).then(res => res.text());
    if( _.isString( res ) ){
        return res;
    }
    return '';
}

/*
possible types are :
#+.*?\n
\s*?\n
[\w\s\n\.]+?
```.*?``` =>extract first
!?[.*?](.*?)\n => extract first
*/

export const getHeaderSize : Function = ( c: string ): string => {
    if( c === '1')
        return 'xl';
    return 'lg';
}

export const extractCodeAndLinkFromReadMe : Function = ( text : string ) : ReturnValue=> {
    let re = /(```(.|\n)*?```)|(!?\[.*?\]\(.*?\))/g ;
    let list : Array< string > = [];
    let codes : null| RegExpMatchArray = text.match( re );
    if( !_.isNull(codes) ){
        for(let i=0;i<codes.length;++i){
            list.push( codes[i].toString() );
            text = text.replace( codes[i].toString() , '\0' );
        }
    }
    return {
        text: text,
        list: list
    };
}

export const getReadMeJSON : Function = ( data : string ) :  Map< ReadMeKey , ReadMeValue > =>{
    const reCode = /```(.|\n)*?```/g;
    let obj : Map< ReadMeKey , ReadMeValue > = new Map();
    const { text , list } : ReturnValue = extractCodeAndLinkFromReadMe( data );
    const lines = text.split('\n');
    let k:number=0 , i:number=0;
    let lastHeader :ReadMeKey = {
        type:'',
        info : '' ,
        index: -1
    }; 
    for( let line of lines ){
        if( line === '\0' ){
            if( list[k].match( reCode ) ){
                let lang : RegExpExecArray|null = /```(\w+)/.exec( list[k] );
                if( !_.isNull(lang)){
                    obj.set( {
                        type: 'code' ,
                        info: lang[0].toString(),
                        index : i
                    } , {
                        title:'',
                        content : list[k].replace(/```(\w+)|```/g , '')
                    } );
                }
            }else{
                let link : string = list[k].replace(/\[|!|\)/g , '').replace(/\]\s*\(/g , '\0').trim();
                let [title , url] = link.split('\0'); 
                if(list[k].includes( '.png' ) || list[k].includes( '.jpg' ) || list[k].includes( '.jpeg' )){
                    obj.set( {
                        type: 'link',
                        info: 'image',
                        index: i
                    } , {
                        title: title,
                        content: url
                    } );
                }else{
                    obj.set(  {
                        type: 'link',
                        info: 'normal',
                        index: i
                    } , {
                        title: title,
                        content: url
                    } );
                }
            }
            k++;
        }else{
            if( line.startsWith('#')){
                const hashes : RegExpMatchArray|null = line.match(/#+/g);
                const count:number = _.isNull( hashes ) ? 1: hashes[0].toString().length;
                const title : string = line.replace( /#/g , '' ).trim();
                lastHeader = {
                    type: 'header',
                    info: `${count}`,
                    index: i
                } ;
                obj.set( lastHeader , {
                    title : title,
                    content : ''
                } )
            }else{
                obj.set( lastHeader , {
                    title : obj.get(lastHeader)?.title || '' ,
                    content: obj.get( lastHeader)?.content+line || line
                });
            }
        }
        ++i;
    }
    return obj;
}