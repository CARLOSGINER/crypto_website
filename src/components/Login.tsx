import {useRef, useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import login from '../styles/login.module.css';

export default function Login({getID,getToken,getFirstTimeUser,getDataBaseCoins}:{getID:any,getToken:any,getFirstTimeUser:any,getDataBaseCoins:any}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newUser, setNewUser] = useState(false);
  const [error, setError] = useState(false);
  const [subtitle, setSubtitle] = useState("Welcome!");
  const [authorized, setAuthorized] = useState(false);

  const inputEmailRef = useRef<HTMLInputElement>(null);

  let navigate = useNavigate();

  useEffect(() => {
    if (authorized) {
      navigate("/dashboard");
    }
  }, [authorized, navigate]);

  useEffect(()=>{
    if(inputEmailRef.current !== null){
        inputEmailRef.current.focus()
    }
  },[])

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
    setError(false);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
    setError(false);
  };

  const handleSubmit = () => {

    fetch("https://todgerapp.herokuapp.com/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then((response) => {
      if (response.status === 401) {
        setNewUser(true);
        setError(true);
        setSubtitle("Check again or Sign Up!");
        return;
      }

      response.json().then((body) => {
        const userToken = body.data.token;
        const userId = body.data.user._id;
        getID(userId);
        getToken(userToken);
        setSubtitle("Welcome back, come on in!");

        fetch(`https://todgerapp.herokuapp.com/getone/${userId}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: userToken,
          },
        })
          .then((resp) => resp.json())

          .then((body) => {
            if (body.data === null) {
              getFirstTimeUser(true);
              console.log(`new user detected`);
            } else if (body.data !== null) {
              getDataBaseCoins(body.data.coins);
              getFirstTimeUser(false);
            }
          });
        setTimeout(() => {
          setAuthorized(true);
        }, 1000);
      });
    });
  };

  const handleSignUp = (event: any) => {
    fetch("https://todgerapp.herokuapp.com/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then((response) => {
      response.json().then((body) => {
        if (body.message === "user with that email exists") {
          setSubtitle("Email already exists!");
          setError(false);
        } else if (body.message === "user created successfully") {
          setSubtitle("Success! Now Login");
          setError(false);
        } else if (body.message === "Password must be non-empty.") {
          setSubtitle("❌ Password is empty!");
          setError(true);
        }
      });
    });
  };

  const handleSignUp_anchor = (event: any) => {
    setNewUser(true);
  };

  const handleEnter = (e:any) =>{
    console.log(e.key)
    if (e.key === "Enter"){
        handleSubmit()        
    }
  }
 
  return (
    <section className={login.page}>
      <div className={login.loginDiv}>
        <div className={login.logo}></div>

        <div className={login.title}>My Stock App</div>

        <div className={login.subTitle}>{subtitle}</div>

        <div className={login.fields}>
          <div
            className={
              error ? login.email + " " + login.inputError : login.email
            }
          >
            <svg fill="#999" className="svg-icon" viewBox="0 0 20 20">
              <path d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"></path>
            </svg>
            <input
              ref={inputEmailRef}
              type="email"
              className={login.userInput}
              placeholder="username"
              onChange={handleEmailChange}
              value={email}
            />
          </div>

          <div
            className={
              error ? login.password + " " + login.inputError : login.password
            }
          >
            <svg fill="#999" className="svg-icon" viewBox="0 0 20 20">
              <path d="M17.308,7.564h-1.993c0-2.929-2.385-5.314-5.314-5.314S4.686,4.635,4.686,7.564H2.693c-0.244,0-0.443,0.2-0.443,0.443v9.3c0,0.243,0.199,0.442,0.443,0.442h14.615c0.243,0,0.442-0.199,0.442-0.442v-9.3C17.75,7.764,17.551,7.564,17.308,7.564 M10,3.136c2.442,0,4.43,1.986,4.43,4.428H5.571C5.571,5.122,7.558,3.136,10,3.136 M16.865,16.864H3.136V8.45h13.729V16.864z M10,10.664c-0.854,0-1.55,0.696-1.55,1.551c0,0.699,0.467,1.292,1.107,1.485v0.95c0,0.243,0.2,0.442,0.443,0.442s0.443-0.199,0.443-0.442V13.7c0.64-0.193,1.106-0.786,1.106-1.485C11.55,11.36,10.854,10.664,10,10.664 M10,12.878c-0.366,0-0.664-0.298-0.664-0.663c0-0.366,0.298-0.665,0.664-0.665c0.365,0,0.664,0.299,0.664,0.665C10.664,12.58,10.365,12.878,10,12.878"></path>
            </svg>
            <input
              onKeyDown={(e)=>handleEnter(e)}  
              type="password"
              className={login.passInput}
              placeholder="password"
              onChange={handlePasswordChange}
              value={password}
            />
          </div>
        </div>

        <button className={login.loginButton} onClick={handleSubmit}>
          Login
        </button>

        {newUser && (
          <button className={login.signinButton} onClick={handleSignUp}>
            Sign Up
          </button>
        )}

        {!newUser && (
          <div className={login.link}>
            <a href="/crypto_website">Forgot password?</a> or{" "}
            <span onClick={handleSignUp_anchor}>Sign Up</span>
          </div>
        )}
      </div>
    </section>
  );
}
