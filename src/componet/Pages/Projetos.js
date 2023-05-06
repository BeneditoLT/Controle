import ProjetoFrom from '../projeto/ProjetoFrom'
import styless from './projeto.module.css'

function Projetos() {
    return(
        <div className={styless.projeto_conteiner}>
         <h1>Criar Projetos</h1>
         <p>crie seu projeto para depois adicionar os serviços</p>
         <ProjetoFrom btnText="Criar Projeto"/>

        </div>
    )
}
export default Projetos 