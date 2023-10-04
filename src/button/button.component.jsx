import './button.styles.css';

const Button = ({value,color,ButtonStyle}) => {
    const BtnStyle = {
        width: '53%',
        marginTop: '10px',
        borderRadius: '10px',
        padding: '15px'
    }
    return(
        <button style={ButtonStyle ? BtnStyle : {}} className={`rounded-button ${color}`}>{value}</button>
    );
}

export default Button;