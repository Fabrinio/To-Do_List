import styled from "styled-components";

export const Container = styled.div`
    background-color: #003B36;
    border-radius: 8px;
    padding: 2.5rem;
    margin-bottom: 30px;
    gap: 1rem;

    header {
        display: flex;
        align-items: center;

        img {
            width: 3rem;
            height: 3rem;
            border-radius: 8px;
            border: 4px solid #202024;
            outline: 2px solid #00875f;
            
        }

        strong {
            line-height: 1.6;
            color: #9FFFCB;
            margin-left: 1rem;
        }
    }
`;

export const Content = styled.div`
    margin-top: 1.5rem;
    line-height: 1.6;
    color: #c4c4cc;

`;

export const Form = styled.form`
    width: 100%;
    margin-top: 1.5rem;
    padding: 1.5rem 0;
    border-top: 1px solid #25A18E;

    strong {
        line-height: 1.6;
        color: #e1e1e6
    }

    textarea {
        width: 100%;
        resize: none;
        background-color: #012622;
        border: 0;
        border-radius: 8px;
        height: 6rem;
        padding: 1rem;
        margin-top: 1rem;
        color: #e1e1e6;
        line-height: 1.4;
    }

    button {
        padding: 1rem 1.5rem;
        margin-top: 1rem;
        border-radius: 8px;
        border: 0;
        background-color: #00875f;
        color: white;
        transition: background-color 0.5s;
    }

    button[type=submit]:not(:disabled):hover{
        background: #00b37E;
    }

`;

export const CommentList = styled.div`
    margin-top: 2rem;

`;