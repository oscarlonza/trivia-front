import style from './editProfile.module.css'
import EditProfileForm from '../../components/EditProfileForm'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const EditProfile = () => {
    return (
        <div className={style.container}>
            <Header />
            <EditProfileForm />
            <Footer />
        </div>
    )
}


export default EditProfile