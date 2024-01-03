import {GoogleLogout} from 'react-google-login';

const clientId="215296016963-jqc46ptqhrronblln9mstf68998srjgm.apps.googleusercontent.com";

function Logout(){

    const onSuccess=()=>{
        console.log("Logout Successful!!!");
    }

    return(
        <div id="signOutButton">
            <GoogleLogout 
                clientId={clientId}
                buttonText={"Logout"}
                onLogoutSuccess={onSuccess}
            />
        </div>
    )

}

export default Logout;