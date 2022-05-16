import React, { useEffect } from "react";
import styles from "./style.module.css";
import { useSelector, useDispatch } from "react-redux";
import { GetPostsList } from "../../store/actions/post";
import Card from "../Card";

const Content = () => {
    const dispatch = useDispatch();

    const { PostListResult, PostListLoading, PostListError } = useSelector((state) => state.postReducer);

    useEffect(() => {
        dispatch(GetPostsList());
    }, []);

    return (
        <div>
            {PostListResult ? (
                PostListResult.map((post, idx) => {
                    const { id, title, body } = post;
                    return (
                        <Card key={id}>
                            <p className={styles.titleCard}>{title}</p>
                            <p>{body}</p>
                        </Card>
                    );
                })
            ) : PostListLoading ? (
                <div>Sedang loading ....</div>
            ) : PostListError ? (
                <div>{PostListError}</div>
            ) : (
                <div>Data Kosong</div>
            )}
        </div>
    );
};

export default Content;
