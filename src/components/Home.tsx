interface homeProp {
    name: string,
    age: number
}

export default function Home({name, age}: homeProp) {
    return(
        <>
        home page {name} {age}
        </>
    )
}