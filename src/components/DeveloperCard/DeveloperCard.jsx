import { useNavigate } from "react-router-dom"
import style from './developer-card.module.css';


const DeveloperCard = ({developer}) => {


  return (
    <section className={style.card}>
      <img  className={style.image} src={developer.image} alt="" />
      <div className={style.info}>
        <h2 className={style.title}>{developer.name} </h2>
        <p className={style.description}>{developer.description} </p>
        <a className={style.link} target="blank"  href={developer.linkedin} >Linkedin</a>
      </div>
    </section>
  )
}

export default DeveloperCard