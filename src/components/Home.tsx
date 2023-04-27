import { useState } from "react"

interface homeProp {
    name: string,
    age: number
}

interface useStateInterface {

}

export default function Home({name, age}: homeProp) {

    const [counter, setCounter]: any = useState(0)

    return(
        <>
        home page {name} {age} {counter}
        </>
    )
}