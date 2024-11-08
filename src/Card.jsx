function Card({imgLink, name, description, btn, action = () => console.log("Clicked")}){


    const heading = {
        color: "red",
        fontWeight: "bold"
    }
    return (
        <div className="card">
            <img src={imgLink}/>
            <h1 style={heading}>{name}</h1>
            <p>{description}</p>
            <button onClick={action}>{btn}</button>
        </div>
    );
}

export default Card;