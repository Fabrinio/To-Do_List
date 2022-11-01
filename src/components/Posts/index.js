import { useState } from "react";
import { Comment } from "../Tarefa";
import { ListChecks } from 'phosphor-react'

import { CommentList, Container, Content, Form } from "./styled";

export function Posts({ info }) {
    const [comments, setComments] = useState([
        {
            id: Math.random(),
            content: "Lavar a louça" // -> newCommentTxt
        }
    ])

    const [newCommentTxt, setNewCommentTxt] = useState('');

    function handleNewComment(event) { // PASSA A INFORMACAO QUE E DIGITADA PARA O STATE 
        setNewCommentTxt(event.target.value)
    }


    function handleCreateNewComment(event) { //CRIA UM NOVO COMENTARIO COM A INFORMACAO QUE FOI DIGITADA
        event.preventDefault();

        const NewComment = {
            id: Math.random(),
            content: newCommentTxt,
        }

        setComments([...comments, NewComment]);
        setNewCommentTxt('')

    }

    function deleteComment(id) {
        const commentWithoutDeletedOne = comments.filter((comment) => comment.id !== id)

        setComments(commentWithoutDeletedOne);
    }


    return (
        <Container>
            <header>
                <ListChecks size={32} />
                <strong>{info.author.name}</strong>
            </header>

            <Content>
                {
                    info.content.map(res => {
                        return (
                            <div key={res.id}>
                                <p>{res.post}</p>
                            </div>
                        )
                    })
                }
            </Content>

            <Form onSubmit={handleCreateNewComment}>
                <strong>Eu tenho que...</strong>
                <textarea
                    placeholder="Insire uma tarefa ai irmão..."
                    required
                    value={newCommentTxt}
                    onChange={handleNewComment}
                />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </Form>

            <CommentList>
                {comments.map(comment => {
                    return (
                    <Comment
                        key={comment.id}
                        comment={comment}
                        onDeleteComment={deleteComment} />
                            
                    )
                })}
            </CommentList>


        </Container>
    )
}