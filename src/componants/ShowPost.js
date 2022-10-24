import "./App.css"

export default function ShowPost(props) {
    return (
        <div>
            <ul>
                {props.add.map((item, index) => {
                    return (
                        <li key={index}>
                            {item.Title}
                        </li>
                    )
                })}

            </ul>

        </div>
    )
}