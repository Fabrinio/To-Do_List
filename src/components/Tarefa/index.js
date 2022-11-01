import { CheckSquare, Trash } from 'phosphor-react'
import { useState } from "react";
import { Container} from "./styled";

export function Comment({ comment, onDeleteComment, checkedTask }) {


    const [isChecked, setIsChecked] = useState(false)
    function handleTarefasConcluidas(){
       
        setIsChecked(current => !current);
     }

    function handleDeletarTask() {
        onDeleteComment(comment.id)
    }
    

    return (
        <Container>  
            <div className={ isChecked ? "tarefa-concluida" : "tarefa" }>
                {comment.content}
            </div>
              <button className='Check' onClick={handleTarefasConcluidas}>  
              <CheckSquare size={24}
                    className={ isChecked ? "btn-concluido-checked" : "btn-concluido" }
                    />
            </button>
            <button onClick={handleDeletarTask} title="Deletar comentario">
                <Trash size={24} />
            </button>
        </Container>
    )
}