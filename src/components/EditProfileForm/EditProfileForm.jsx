import React, { useState, useEffect } from 'react';
import { jwtDecode } from "jwt-decode";
import style from './editProfileForm.module.css'

const EditProfileForm = () => {
    const [profile, setProfile] = useState({
        name: '',
        nickname: '',
        cel: '',
        email: '',
        password: '',
        confirm_password: ''
    });

    useEffect(() => {
        const fetchProfile = () => {
            const token = localStorage.getItem('user');
            const token_decoded = jwtDecode(token);
            setProfile(token_decoded.user);
        };

        fetchProfile();
    }, []);

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
            const response = await fetch('/api/user/profile', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(profile)
            });
            const data = await response.json();
            alert('Perfil actualizado exitosamente');
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
