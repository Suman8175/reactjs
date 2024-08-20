
import Cards from "./component/Cards"

function App() {

  const myObj = {
    name: "Suman",
    role:"Developer",
  }
  const myObj2 = {
    name: "Hitesh",
    role:"Tester",
  }

  return (
    <>
      <h1 className="text-4xl text-red-700 bg-green-400 mb-4">Hello Suman</h1>
      <Cards Obj={myObj} />
      <Cards Obj={myObj2} />
    </>
  )
}

export default App
