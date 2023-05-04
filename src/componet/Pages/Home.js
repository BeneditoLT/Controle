import savings from '../../img/savings.svg'
import Linkbutton from '../layout/LinkButton'
import styles from './home.module.css'
function Home() {

    return(
     <section className={styles.home_conteiner}>
        <h1 > 
            Bem Vindo ao <span>Cost</span>
        </h1>
        <p>Comece a gerenciar seus projetos</p>

        <Linkbutton to="/projetos" text="Criar Projetos"/>
        <img src={savings} alt="Cost"/>
       
     </section>
    )
}
export default Home