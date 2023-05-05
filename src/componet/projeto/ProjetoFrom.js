function ProjetoFrom(){
    return(
        <from>
            <div> <input type="text" placeholder="Nome do Projeto"></input></div>
            <div><input type="number" placeholder="Orçamento"></input></div>
            <div><select name="category_id"><option disebled selected>Selecione a categoria</option></select></div>
        </from>
    )
}
export default ProjetoFrom