import { useContext } from 'react';
import Nav from 'react-bootstrap/Nav';
import { LoginContext } from '../Context/login/loginContext';
export const Account = () =>{
    const {hide, login} = useContext(LoginContext)
    if (!login.visible) {
        return null
    }
    return (
        <Nav> 
            <h3>{login.user}</h3>
            <Nav.Link href="/" onClickCapture={hide}>Logout</Nav.Link>
          </Nav>
    )
}