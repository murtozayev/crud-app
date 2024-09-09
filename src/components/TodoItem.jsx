const TodoItem = ({ text, time, id }) => {

    async function onDelete(id) {
        try {
            const req = await fetch("https://crudapi-woad.vercel.app/" + id, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" }
            })

            await req.json
            window.location.reload()
        } catch (error) {
            throw new Error(error)
        }
    }

    return (
        <div className="todo">
            <h2>{text}</h2>
            <div className="todo-second">
                <p>{time}</p>
                <div>
                    <button onClick={() => onDelete(id)} className="fas fa-trash" />
                    <button className="fas fa-pen" />
                </div>
            </div>
        </div>
    )
}

export default TodoItem
