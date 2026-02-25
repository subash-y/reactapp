import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

function Login() {

    const [pwd1, setPwd1] = useState("");
    const [pwd2, setPwd2] = useState("");
    const [same, setSame] = useState(false)

    useEffect(() => {
        setSame(pwd1 !== "" && pwd1 === pwd2);
    }, [pwd1, pwd2]);

    function handlePwd1Change(event) {
        setPwd1(event.target.value);

    }

    function handlePwd2Change(event) {
        setPwd2(event.target.value);
    }
    return (
        <>
            <Link className="btn btn-success mt-3" to="/">Home</Link>
            <form className="my-5" style={{ width: "50%", margin: "auto" }}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input value={pwd1} onChange={handlePwd1Change} type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword2" className="form-label">Re-enter Password</label>
                    <input value={pwd2} onChange={handlePwd2Change} type="password" className="form-control" id="exampleInputPassword2" />
                </div>
                {same && (
                    <div className="mb3 form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="exampleCheck1"
                        >
                            I Agree
                        </label>
                    </div>
                )}
                {same && <p>Password Matched</p>}
                {!same && <p>Password Not Matched</p>}
                <button type="submit" className="btn btn-primary">Create Account</button>
            </form>
        </>
    );

}

export default Login;