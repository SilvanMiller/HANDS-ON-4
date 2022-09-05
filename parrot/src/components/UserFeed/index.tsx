import React from 'react';
import Logo from '../../assets/icone.png';
import * as UFeed from './style'

const UserFeed: React.FC = () => {
    return (
        <UFeed.StyledContainer>
            <h1>Você ainda não fez nenhuma publicação :&#40; </h1>
            <img src={Logo} />
        </UFeed.StyledContainer>
    )
}

export default UserFeed;