

function gerarLista(final = 10) {
    let lista = []

    for (let i = 0; i <= final; i++) {

        lista.push(<span>{i}, </span>)

    }

    return lista


}

export default function lista() {
    return (

        <div>
            <div>
            {gerarLista(20)}
        </div>
        <div>
            {gerarLista(3)}
        </div>
        </div>
    )

}
























// export default function lista() {
