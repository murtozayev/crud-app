import { useState } from "react"

const TodoItem = ({ text, time, id, array }) => {

    const [update, setUpdate] = useState(false)
    const [textchange, setText] = useState("")

    async function onDelete(id) {
        try {
            const req = await fetch("https://crudapi-woad.vercel.app/" + id, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" }
            })

            await req.json()
            window.location.reload()
        } catch (error) {
            throw new Error(error)
        }
    }

    function onUpdate(prop, id) {
        prop.filter(item => {
            if (item._id === id) {
                setUpdate(true)
                fetch("https://crudapi-woad.vercel.app/" + item._id, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ text: textchange })
                }).then(res => res.json())
                    .then(() => {
                        setUpdate(false)
                        window.location.reload()
                    })
            }
        })
    }

    return (
        <div className="todo">
            {!update ? (
                <>
                    <h2>{text}</h2>
                    <div className="todo-second">
                        <p>{time}</p>
                        <div>
                            <button onClick={() => onDelete(id)} className="fas fa-trash" />
                            <button onClick={() => setUpdate(true)} className="fas fa-pen" />
                        </div>
                    </div>
                </>
            ) : <div className="container">
                <input value={textchange} onChange={(e) => setText(e.target.value)} type="text" id="update" placeholder="Set your changes" />
                <button onClick={() => onUpdate(array, id)} id="touch">Update</button>
            </div>}
        </div >
    )
}

export default TodoItem
