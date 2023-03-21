// Code your solution here

function findMatching(array,string){
return array.filter((element)=>{
    let varString=string;
    let varElement=element;
    return (varElement.toLowerCase()===varString.toLowerCase());})
}

function fuzzyMatch(array,string){
 return array.filter((element)=>{
    let compare=element.substring(0,string.length);
    return (compare==string);
 })
}


function matchName(array,string){
    return array.filter((element)=>{
        return element.name===string})
}

