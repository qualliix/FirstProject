import { useContext } from "react";
import { AlertContext } from "../Context/alert/alertContext";

function Alert() {
    const {alert,hide} = useContext(AlertContext)
    if (!alert.visible) {
        return null
    }
    return (
        <div class="alert alert-info alert-dismissible">
        <strong>Attention!</strong>{alert.text}
        <button onClick={hide} type="button" class="btn-close" aria-label="Close"></button>
      </div>     
    );
  }
  
  export default Alert;