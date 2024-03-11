import {FC, useState} from "react";


export type ManType = {
    name: string,
    age: number,
    lessons: LessonsType[],
    address: AddressType
}
type AddressType = {
    street: StreetType
}
type LessonsType = {
    title: string
    name?:string
}
type StreetType = {
    title: string
}
type ManComponentsType = {
    title: string
    man: ManType
    food: string[]
    car:{model:string }

}

function useDimychState(m:string) {
    return [m , function (){}]
}
function useDimychState2(m:string) {
    return {message: m , setMessage:  function (){}}
}

const ManComponents: FC<ManComponentsType> = (props) => {
    const {title, man, ...restProps} = props

   const [message, setMesasage] = useState<string>('hello')
    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>
                {man.name}
                {restProps.car.model}
            </div>
        </div>
    )
}