import './CustomButton.scss'

const CustomButton = ({onClick, children }) =>{
<div className="custom-button-container" onClick={onclick}>
    {children}
</div>
}

export default CustomButton