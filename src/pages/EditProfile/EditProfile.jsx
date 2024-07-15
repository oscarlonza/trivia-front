import { useEffect, useState } from 'react';
import style from './editProfile.module.css'
import EditProfileForm from '../../components/EditProfileForm'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { getRankingByNickname } from '../../services/ranking.service';
import isAuthenticated from '@/services/auth';
import { jwtDecode } from 'jwt-decode';

const EditProfile = () => {

    const [score, setScore] = useState(0)
    const [ranking, setRanking] = useState(0)

    useEffect(() => {
        if (isAuthenticated()) {
            const token = localStorage.getItem('user');
            const token_decoded = jwtDecode(token);
            setScore(token_decoded.user.score.score);
            getRankingByNickname(token_decoded.user.nickname)
                .then((value) => {
                    setRanking(value)
                })

        }
    }, [])

    return (
        <div className={style.container}>
            <Header score={score} ranking={ranking} />
            <EditProfileForm />
            <Footer />
        </div>
    )
}


export default EditProfile