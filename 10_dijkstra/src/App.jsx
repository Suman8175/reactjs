import NodeContainer from './components/NodeContainer'

function App() {
  return (
    <>
   <div className="flex flex-col w-full h-screen ">
   <div className='flex flex-row w-screen pb-2 bg-red-400 h-1/5'>

</div>
<div className="flex items-center justify-center flex-grow w-screen h-max ">
<NodeContainer />
</div>
   </div>
  </>
  )
}

export default App
