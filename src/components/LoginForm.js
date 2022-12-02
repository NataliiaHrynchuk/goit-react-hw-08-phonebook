

// import { useDispatch } from "react-redux";
export const LoginForm = () => {
    return (
        <form>
            <label>
                Email
                <input/>
            </label>
            <label>
                Password
                <input/>
            </label>
            <button type="submit">Log In</button>
        </form>
    )
}