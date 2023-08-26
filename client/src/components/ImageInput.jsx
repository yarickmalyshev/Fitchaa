
import './ImageInput.css';

const ImageInput = ({cl, width, height, topTitle, label}) => {
  const root = {
    width: width,
    height: height,
  }
  
  return (
    <div className={`${cl} image-input-component`}>
      <h1>{ topTitle }</h1>
      <label style={root} htmlFor="file-input">
        <input  type="file" name="avatar" id="file-input" />
        <label>{label}</label>
      </label>
    </div>
  )
}

export default ImageInput;