
// ? Are all the elements known when i amke the function

interface Animal{
    name: string;
}
interface Human{
    firstName: string;
    lastName:string
}

export const getDisplayName = <Titem extends Animal | Human>(item:Titem)
:Titem extends Human? {humanName:string}: {
    animalName: string
}
{displayName: string} =>{
   if("name" in item){
    return{
        displayName:item.name
    }
   }
   
}


// Principle of Distributivity

export type Letters = "a" | "b" |"c";
type RemoveC <TType> = TType extends 'c'? never :TType;

type WowWithoutC = RemoveC<Letters>;



// Autocomplete but not total autocomplete