

function Card(props) {
    // console.log(props.user);
    return (
        <div className="card">
            <h1>Hello! {props.user}</h1>
            <h2>you are {props.age} years old</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, consequatur ratione. Temporibus corporis unde officiis iste id illum labore perspiciatis deleniti, ipsam minima iure laudantium velit eum assumenda, obcaecati repellat!</p>
        </div>
    )
}

export default Card