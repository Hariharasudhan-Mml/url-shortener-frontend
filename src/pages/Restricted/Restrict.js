import { Link } from "react-router-dom";


const Restricted = () => {
    return <div className="error">
        <h2> You're UnAuthorized to this Page. </h2>
        <br />
        <h3>Please login, <Link to='/login'>Click here to login </Link> </h3>
    </div>
}


export default Restricted;