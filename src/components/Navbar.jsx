import React, {useContext} from 'react';
import MyContext from '../MyContext';
const navbarStyle={
    backgroundColor: "#8c30c5",
    height: "150px",
    color: "white",
    padding: '10px 50px',
    textAlign: "right"
}
const Navbar = () => {
    const [user,] = useContext(MyContext);
    return (
        <div style={navbarStyle}>
            {user !== ""?<h2>Hi {user}!</h2>:<h2>Hi Who?</h2> }
        </div>
    );
};

export default Navbar;