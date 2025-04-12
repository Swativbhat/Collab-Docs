import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const GoogleSignIn = () => {
  const navigate = useNavigate();

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <GoogleLogin
        onSuccess={async (credentialResponse) => {
          try {
            const response = await axios.post(
              "http://localhost:3000/api/login",
              {
                token: credentialResponse.credential,
              }
            );

            localStorage.setItem("token", response.data.token);
            navigate("/dashboard");
            console.log("successfull");
          } catch (error) {
            console.error("Login failed:", error);
          }
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleSignIn;
