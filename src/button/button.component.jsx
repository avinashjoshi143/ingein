import './button.styles.css';

const Button = ({value,color}) => {
    return(
        <button className={`rounded-button ${color}`}>{value}</button>
    );
}

export default Button;