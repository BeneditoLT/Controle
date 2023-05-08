import { useEffect, useState } from "react"
import Input from "../form/Input"
import Select from "../form/Select"
import SubmitButton from "../form/SubmitButton"

function ProjetoFrom({btnText}){
    const [categories, setCategories] =useState([])

    useEffect(() =>{
        fetch('http://localhost:5000/categories', {
        method: "GET",
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then((resp) => resp.json())
        .then((data) => {
            setCategories(data)
        })
        .catch((err) => console.log(err))
    }, [])
    return(
        <from>
            <Input type="text" text="Nome do Projeto" name="name" placeholder="Incira o nome do Projeto"/>
            <Input type="number" text="Orçamento do Projeto" name="budget" placeholder="Incira o orçamento total"/>
            <Select name="category_id" text="Selecione uma categoria" options={categories}/>
            <SubmitButton text={btnText}/>
            
        </from>
    )
}
export default ProjetoFrom