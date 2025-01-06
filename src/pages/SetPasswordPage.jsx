import myaxios from "../utils/myaxios"
import { useNavigate } from "react-router";
const SetPasswordPage = () => {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault(); 

        const formdata = new FormData(e.target);
        const data = Object.fromEntries(formdata);
        data.email = localStorage.getItem("email");
        console.log(data)
        myaxios.post(
            "/reset-password",
            data,
            
        ).then((response) => {
            if (response.data.status === "success"){
           
            navigate("/dashboard/index/");
            }
            else {
                alert(response.data.message);
            }
        }).catch((error) =>{
            console.log(error);
        })
    }

    
    return (
        <div>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-7 col-lg-6 center-screen">
                    <div className="card animated fadeIn w-90  p-4">
                        <div className="card-body">
                            <h4>NEW PASSWORD</h4>
                            <br/>
                            <form onSubmit = { handleSubmit }>
                            <label>Your new password</label>
                            <input id="password" placeholder="New password" className="form-control" type="password" name="password"/>
                            <br/>
                            <button  type="submit" className="btn w-100 float-end bg-gradient-primary">Next</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default SetPasswordPage;