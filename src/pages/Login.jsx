import React, { useContext, useEffect } from 'react';
import Navbar2 from '../Components/Navbar2';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import toast from 'react-hot-toast';
import Footer from '../Components/Footer';

const Login = () => {
    const { SignInWithGoogle, SignInEmailAndPass } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        document.title = "Login Page | B2B Wholesale Platform";
    }, []);


    // signIn with google 
    const handleGoogleLogin = () => {
        SignInWithGoogle()
            .then(() => {
                toast.success('Successfully Login!');
                navigate(location.state || "/");
            })
            .catch(err => {
                toast.error("Successfully Login Failed");
                console.log(err);
            })
    }

    // signIn with email and pass 
    const handleSignIn = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        SignInEmailAndPass(email, password)
            .then(() => {
                toast.success('Successfully Login!');
                navigate(location.state || "/");
            })
            .catch(err => {
                toast.error("Successfully Login Failed")
                console.log(err);
            })
    }


    return (
        <div>
            <header>
                <Navbar2 />
            </header>
            <main className='min-h-screen'>
                <div className='container mx-auto flex items-center justify-center py-45 space-x-30'>

                    {/* left div  */}
                    <div>
                        <img src="/src/assets/img/login.png" alt="Login" className='w-120' />
                    </div>



                    {/* right div  */}
                    <div>

                        {/* heading  */}
                        <div>
                            <h2 className='text-5xl font-semibold text-center text-[#3B93E5]'>Login Now!</h2>
                        </div>

                        {/* input fields  */}
                        <div className='mx-auto text-center  mt-10'>

                            {/* google login btn  */}
                            <div>
                                <button
                                    onClick={handleGoogleLogin}
                                    className="font-bold border cursor-pointer text-lg uppercase w-80 h-10 text-[#000000] justify-center transition-colors duration-300 hover:bg-[#E7AA3A]"
                                >
                                    <FaGoogle className='inline mr-2' size={15} />
                                    Login with Google
                                </button>
                                <div className="divider w-80 mx-auto my-10">Or</div>
                            </div>




                            <form
                                onSubmit={handleSignIn}
                            >
                                {/* email input  */}
                                <div>
                                    <legend className="fieldset-legend">Email:</legend>
                                    <label className="input validator">
                                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <g
                                                strokeLinejoin="round"
                                                strokeLinecap="round"
                                                strokeWidth="2.5"
                                                fill="none"
                                                stroke="currentColor"
                                            >
                                                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                            </g>
                                        </svg>
                                        <input type="email" placeholder="mail@site.com" required name='email' />
                                    </label>
                                    <div className="validator-hint hidden">Enter valid email address</div>
                                </div>


                                {/* password input  */}
                                <div>
                                    <legend className="fieldset-legend">Password:</legend>
                                    <label className="input validator">
                                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <g
                                                strokeLinejoin="round"
                                                strokeLinecap="round"
                                                strokeWidth="2.5"
                                                fill="none"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                                                ></path>
                                                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                        <input
                                            type="password"
                                            required
                                            placeholder="Password"
                                            minlength="8"
                                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                            title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                                            name='password'
                                        />
                                    </label>
                                    <p className="validator-hint hidden">
                                        Must be more than 8 characters, including
                                        <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
                                    </p>
                                </div>

                                {/* login btn  */}
                                <div>
                                    <button
                                        className="font-bold border cursor-pointer text-lg uppercase w-80 h-10 text-[#000000] justify-center transition-colors duration-300 hover:bg-[#E7AA3A] my-8"
                                    >
                                        Login
                                    </button>
                                </div>
                            </form>


                            {/* register route  */}
                            <div>
                                <span>New Here? </span>
                                <Link to='/register'>
                                    <span className='underline text-[#3892E4] cursor-pointer hover:text-[#383be4]'>Create an Account</span>
                                </Link>
                            </div>

                        </div>


                    </div>

                </div>
            </main>

            <footer>
                <Footer />
            </footer>


        </div>
    );
};

export default Login;