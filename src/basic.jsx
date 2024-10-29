import { useState } from "react"


export const Basic = ()=>{
    // const [scooty,setScooty]=useState({
    //     color:"green",
    //     Brand: "Tata",
    //     Year: "2024",
    //     model: "nano"
    // })

    //     function updateColor(){
    //         setScooty((previous)=>{
    //             return{...previous, color: "Orange" ,model: "NANO"}
    //         })
    //     }
        
    // return(
    //     <>
    //     <h1>Scooty</h1>
    //     <p>color: {scooty.color} </p>
    //     <p>Brand: {scooty.Brand}</p>
    //     <p>Year: {scooty.Year} </p>
    //     <p>model: {scooty.model} </p>

    //     <button onClick={updateColor}>  Change color</button>
    //     </>
    // )

    const [car,setcar]=useState({
        color:"Red",
        Brand:"GT",
        year:1980})

    function color(){
        setcar(previous =>{
            return { ...previous,color:"Green"}
        })
    }    
    return(
        
        <>
        <p>This is{car.Brand}</p>
        <p> It is a {car.color} {car.Brand} from {car.year}.</p>
        <button onClick={color}>Click !</button>
        </>
    )

}