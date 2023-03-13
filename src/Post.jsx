// objeto -> props(parametros da função): { author: "", content: ""} <- variáveis do objeto
// para exibir valores de uma variavel dentro do hatml no react usamos as chaves como no : {props.content}

export function Post(props) {
    // para exibir valores de uma variavel dentro do hatml no react usamos as chaves como no : {props.content}
    return (
        <div>
            <strong>{props.author}</strong>
            <p>{props.content}</p>
        </div>
    )
}

