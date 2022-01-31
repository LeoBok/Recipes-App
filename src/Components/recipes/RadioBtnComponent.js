const RadioBtnComponent = ({ label, value, onChange, checked }) => {
    
    return (
        <label>
            <input
                type='radio'
                value={value}
                checked={checked}
                onChange={onChange}
            /> {label}
        </label>
    )
}

export default RadioBtnComponent