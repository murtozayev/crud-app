import { useAxios } from "./components/hook/useAxios"
import TodoForm from "./components/TodoForm"
import TodoItem from "./components/TodoItem"
import { ClockLoader } from "react-spinners"

const App = () => {

  const { data, loading } = useAxios("https://crudapi-woad.vercel.app/")

  return (
    <div className="app">
      <TodoForm />
      <br />
      {loading && <div id="loader"><ClockLoader size={30} color="blue" /></div>}
      <div id="item">
        {data.length > 0 ? data.map((item) => {
          return <TodoItem array={data} id={item._id} key={item._id} time={item.createdAt} text={item.text} />
        }) : <h3>There is no item yet</h3>}
      </div>
    </div>
  )
}

export default App