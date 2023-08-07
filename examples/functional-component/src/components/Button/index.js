import '../../style/components/button.css';

const Button = ({ children, handle }) => {
    return (
        <button className='button' onClick={handle}>
            {children}
        </button>
    )
}

export default Button;