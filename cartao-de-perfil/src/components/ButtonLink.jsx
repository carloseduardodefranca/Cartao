function ButtonLink({text,href,variante}){
    return(
        <a className={`button-link ${variante}`} href={href} target="_blank" rel="noreferrer">{text}</a>
    )
}

export default ButtonLink