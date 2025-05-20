type Props = {
    title: string;
}

const ArrowFunctionComponentWithProps = ({title}: Props) => {
    return <h1 className="text-center mt-12 text-x1 font-bold">{title}</h1>
}
export default ArrowFunctionComponentWithProps