import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { RootStore } from '../../store';
import * as parrotNav from './style';

import nvLogo from '../../assets/logo horizontal colorido.png';
import nvLogoMobile from '../../assets/avatar_1.png';

import { useSelector, useDispatch } from 'react-redux';


const NavbarParrot = () => {
    const dispatch = useDispatch();
    const userLogout = () => {
        dispatch(logOut());
    };
    const user = useSelector((store: RootStore) => store.usersSlice);

    return (
        <parrotNav.StyledNavbar bg="light">
            <Container>
                <Navbar.Brand href="#home">
                    <picture>
                        <source media="(min-width: 465px)" srcSet={nvLogo} />
                        <img src={nvLogoMobile} style={{ width: "80%" }} />
                    </picture>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <parrotNav.StyledNavbarText>
                        <span>Olá, {user.nome}</span>
                        <span className="separator"> | </span>{" "}
                        <parrotNav.StyledLink onClick={userLogout} href="/">
                            sair
                        </parrotNav.StyledLink>
                    </parrotNav.StyledNavbarText>
                </Navbar.Collapse>
            </Container>
        </parrotNav.StyledNavbar>
    );
};

export default NavbarParrot;

