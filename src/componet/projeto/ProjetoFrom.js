import Input from "../form/Input"
import Select from "../form/Select"
import SubmitButton from "../form/SubmitButton"

function ProjetoFrom({btnText}){
    return(
        <from>
            <Input type="text" text="Nome do Projeto" name="name" placeholder="Incira o nome do Projeto"/>
            <Input type="number" text="Orçamento do Projeto" name="budget" placeholder="Incira o orçamento total"/>
            <Select name="category_id" text="Selecione uma categoria"/>
            <SubmitButton text={btnText}/>
            
        </from>
    )
}
export default ProjetoFrom