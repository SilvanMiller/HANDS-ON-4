import React from "react";
import NavbarParrot from "../../components/Header";
import CardPostFeed from "../../components/CardPostFeed";
import PostCommentCard from "../../components/PostCommentCard";
import usePosts from "../../hooks/posts";

const Feed: React.FC = () => {
    const { postList, handleAddPost } = usePosts();

    return (
        <>
            <NavbarParrot />
            <PostCommentCard postMessage={handleAddPost} />
            <CardPostFeed posts={postList} />
        </>
    );
};

export default Feed;
