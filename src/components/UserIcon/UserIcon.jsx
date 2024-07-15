import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, Menu, MenuItem } from "@mui/material";
import { jwtDecode } from "jwt-decode";

const UserIconMenu = () => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const user = localStorage.getItem("user");
    const userDecoded = jwtDecode(user).user;
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const viewProfile = () => {
        navigate("/editProfile");
    };
    const logout = () => {
        navigate("/login");
        localStorage.clear();
    };
    const getInitials = (name) => {
        const initials = name
            .split(" ")
            .map((n) => n[0])
            .join("");
        return initials.toUpperCase();
    };

    return (
        <div>
            <Avatar
                onClick={handleClick}
                style={{ cursor: "pointer", backgroundColor: "#FFD700", color: "#000" }}
            >
                {getInitials(userDecoded.name)}
            </Avatar>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                <MenuItem
                    onClick={() => {
                        viewProfile();
                    }}
                >
                    Ver perfil
                </MenuItem>
                <MenuItem
                    onClick={() => {
                        logout();
                    }}
                >
                    Cerrar sesión
                </MenuItem>
            </Menu>
        </div>
    );
};

export default UserIconMenu;
