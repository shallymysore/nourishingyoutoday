import React,{useState,useEffect} from 'react';
import '../../App.css';
import {GoogleLogin} from 'react-google-login'
import {gapi} from 'gapi-script'

const clientId="216648858306-oo29ileir60p9tjd4f06gi68domf8bup.apps.googleusercontent.com"

export default function Signup() {
    const [email, setEmail] = useState('');
    const [userInfo, setUserInfo] = useState([]);

    useEffect(()=>{
        function start(){
          gapi.client.init({
            clientId:clientId,
            scope:""
          })
        };
        gapi.load('client:auth2',start)
      })
    
      const handlesuccess =(response) =>{
        console.log("Success",response.profileObj);
      }
      const handlefailure =(response) =>{
        console.log("Failure",response);
      }

  return (
    <div className='sign-up'>
    <GoogleLogin
        clientId={clientId}
        buttonText='Login'
        onSuccess={handlesuccess}
        onFailure={handlefailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}/>
    </div>
  );
}