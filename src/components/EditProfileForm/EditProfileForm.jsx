import React, { useState, useEffect } from 'react';
import { jwtDecode } from "jwt-decode";
import style from './editProfileForm.module.css';
import { useNavigate } from 'react-router-dom';
import constants from '../../utils/constants';

const EditProfileForm = () => {

    const navigate = useNavigate()

    const [profile, setProfile] = useState({
        _id: '',
        name: '',
        nickname: '',
        cel: '',
        email: '',
        password: '',
        confirm_password: ''
    });

    useEffect(() => {
        const token = localStorage.getItem('user');
        const token_decoded = jwtDecode(token);
        console.log(token_decoded.user);
        const {
            _id,
            name,
            nickname,
            cel
        } = token_decoded.user;
        setProfile(prevState => ({
            ...prevState,
            _id,
            name,
            nickname,
            cel
        }));
    }, []);

    const getUserData = () => {
        const token = localStorage.getItem('user');
        const token_decoded = jwtDecode(token);
        delete (profile.score);

        const currentUser = token_decoded.user;
        const changedData = {};
        Object.keys(profile).forEach(key => {
            if (currentUser[key] !== profile[key]) {
                changedData[key] = profile[key];
            }
        });

        return changedData;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('user');
            const userData = getUserData();

            const update = await fetch(`${constants.apiUrl}/api/user/update/${profile._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${token}`
                },
                body: JSON.stringify(userData)
            });

            if (!update.ok) return alert('Error en la peticion al servidor')

            const response = await update.json()

            if (!response.process) return alert('Error al editar el usuario')

            alert('Perfil actualizado exitosamente');

            navigate('/')

        } catch (error) {
            console.error('Hubo un error actualizando el perfil', error);
        }
    };

    return (
        <div className={style.cardContainer}>
            <div className={style.card}>
                <h2 className={style.titleForm}>Modificar Perfil</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className={style.labelForm}>Nombre</label>
                        <input className={style.inputForm}
                            type="text"
                            name="name"
                            value={profile.name}
                            onChange={handleChange}
                            placeholder="Nombre"
                        />
                    </div>
                    <div>
                        <label className={style.labelForm}>Nickname</label>
                        <input className={style.inputForm}
                            type="text"
                            name="nickname"
                            value={profile.nickname}
                            onChange={handleChange}
                            placeholder="Nickname"
                        />
                    </div>
                    <div>
                        <label className={style.labelForm}>Celular</label>
                        <input className={style.inputForm}
                            type="text"
                            name="cel"
                            value={profile.cel}
                            onChange={handleChange}
                            placeholder="Celular"
                        />
                    </div>
                    <div>
                        <label className={style.labelForm}>Email</label>
                        <input className={style.inputForm}
                            type="email"
                            name="email"
                            value={profile.email}
                            onChange={handleChange}
                            placeholder="Email"
                        />
                    </div>
                    <div>
                        <label className={style.labelForm}>Contraseña</label>
                        <input className={style.inputForm}
                            type="password"
                            name="password"
                            value={profile.password}
                            onChange={handleChange}
                            placeholder="Contraseña"
                        />
                    </div>
                    <div>
                        <label className={style.labelForm}>Confirmar Contraseña</label>
                        <input className={style.inputForm}
                            type="password"
                            name="confirm_password"
                            value={profile.confirm_password}
                            onChange={handleChange}
                            placeholder="Confirmar Contraseña"
                        />
                    </div>
                    <button className={style.buttonForm} type="submit">
                        Guardar Cambios
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditProfileForm;
