import React from 'react';
import * as PostFeed from './style';
import avatar from '../../assets/avatar_1.png';
import { Post } from '../../@types';

interface PostFeedProps {
    posts: Post[];
}


const CardPostFeed: React.FC<PostFeedProps> = ({ posts }) => {
    return (
        <>
            {posts.map(post => (
                <PostFeed.CardContainer key={post.id}>
                    <img src={avatar} />
                    <PostFeed.CardText>
                        <span className='username'>{post.nome} - ap {post.apartment}</span>
                        <span className='timestamp'>04/09/2022 18:00</span>
                        <p>{post.comentario}</p>
                    </PostFeed.CardText>
                </PostFeed.CardContainer>
            ))}
        </>
    )
}

export default CardPostFeed;