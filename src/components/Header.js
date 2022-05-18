
import UserContext from "../context/UserContext";

const Header = () => {

    return (
        <>
        <UserContext.Consumer>
            {({name}) => {return <h1>Hello {name} 👋 </h1>}}
        </UserContext.Consumer>
        </>
    )
}

export default Header;

