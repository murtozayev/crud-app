import { useState } from "react";

const TodoForm = () => {

    const [text, setText] = useState("")

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const req = await fetch("https://crudapi-woad.vercel.app/add", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({text: text})
            })

            await req.json()

            window.location.reload()
        } catch (error) {
            throw new Error(error)
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <input value={text} onChange={(e) => setText(e.target.value)} type="text" placeholder="Write some text" />
            <button className="add">Add</button>
        </form>
    )
}

export default TodoForm
