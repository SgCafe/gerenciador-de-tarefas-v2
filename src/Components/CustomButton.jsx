import './CustomButton.scss'

const CustomButton = ({ onClick, children }) => {
  return (
    <div className="custom-button-container" onClick={onclick}>
      {children}
    </div>
  )
}

export default CustomButton
