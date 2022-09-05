import React from 'react';
import * as Profile from './style';
import avatar from '../../assets/avatar_1.png';

const PostCommentCard: React.FC = () => {


    return (
        <Profile.Container>
            <img src={avatar} />
            <Profile.ProfileContent>
                <h4>Usuário Silvan </h4>
                <span>ap 101</span>
                <span>teste@email.com</span>
                <span>0 publicações</span>
            </Profile.ProfileContent>
            <Profile.EditProfileButton size='sm'>editar perfil</Profile.EditProfileButton>
        </Profile.Container>
    )
}


export default PostCommentCard;