// type Props = {
//     title: string;
// }

// interface Props {
//     title: string;
// }

type A = {
    title: string;
}
type B = {
    description: string;
}
type Props = A & B;

// interface Props {
//     title: string;
// }
//
// interface Props {
//     description: string;
// }

const ArrowFunctionComponentWithProps = ({title, description}: Props) => {
    return (
        <>
            <h1 className="text-center mt-12 text-x1 font-bold">{title}</h1>;
            <p className="text-center text-gray-800">{description}</p>
        </>
    )
}
export default ArrowFunctionComponentWithProps