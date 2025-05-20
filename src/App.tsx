import ArrowFunctionComponent from "./components/ArrowFunctionComponent.tsx";
import ClassComponent from "./components/ClassComponent.tsx";
import FuncionalComponent from "./components/FuncionalComponent.tsx";
import ArrowFunctionComponentWithProps from "./components/ArrowFunctionComponentWithProps.tsx";
import ArrowFunctionComponentWithPropsType from "./components/ArrowFunctionComponentWithPropsType.tsx";


function App() {


  return (
    <>
        <ClassComponent/>
        <FuncionalComponent/>
        <ArrowFunctionComponent/>
        <ArrowFunctionComponentWithProps title="Is a Arrow Function Component With Props"/>
        <ArrowFunctionComponentWithPropsType title="Is a Arrow Function Component With Props" description="It has a discription"/>
    </>
  )
}

export default App
