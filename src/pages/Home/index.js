import { Posts } from "../../components/Posts";
import { postArray } from "../../utils/posts"

import { Container, Content } from "./styled";

export function Home() {
    return (
        <Container>
            <h1>Minha To-Do List</h1>
            <Content>
                {postArray.map(post => {
                    return (
                        <Posts key={post.id}  info={post}/>
                    )
                })}
            </Content>
        </Container>
    )
}