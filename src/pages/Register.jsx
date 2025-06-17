import React, { useContext, useEffect } from 'react';
import Navbar2 from '../Components/Navbar2';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import toast from 'react-hot-toast';
import Footer from '../Components/Footer';

const Register = () => {
    const { CreateUserWithEmailAndPassword, UpdateUserPhotoAndName } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
            document.title = "Register Page | B2B Wholesale Platform";
        }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const UserName = form.name.value;
        const UserEmail = form.email.value;
        const UserPhotoURL = form.photoURL.value;
        const UserPassword = form.password.value;

        if (UserName == "") {
            toast.error("Username doesn't empty");
        }

        // firebase auth call 
        CreateUserWithEmailAndPassword(UserEmail, UserPassword)
            .then(() => {
                // update name & photo 
                UpdateUserPhotoAndName(UserName, UserPhotoURL)
                    .then(() => {
                        toast.success("Account Create Successfully");
                        navigate(location.state || "/");
                    })
                    .catch((err) => {
                        toast.error("Account Create Unsuccessfully");
                        console.log(err);
                    })
            })
            .catch(err => {
                toast.error("Account Create Unsuccessfully");
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

                    {/* right div  */}
                    <div>

                        {/* heading  */}
                        <div>
                            <h2 className='text-5xl font-semibold text-center text-[#449843]'>Register Now!</h2>
                        </div>

                        {/* input fields  */}
                        <div className='mx-auto text-center space-y-1 mt-10'>


                            <form onSubmit={handleSubmit}>
                                {/* name input  */}
                                <div>
                                    <legend className="fieldset-legend">Username:</legend>
                                    <input type="text" placeholder="Type here" className="input" name='name' />
                                </div>


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


                                {/* photo url input  */}
                                <div>
                                    <legend className="fieldset-legend">Photo URL:</legend>
                                    <label className="input validator">
                                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <g
                                                strokeLinejoin="round"
                                                strokeLinecap="round"
                                                strokeWidth="2.5"
                                                fill="none"
                                                stroke="currentColor"
                                            >
                                                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                                                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                                            </g>
                                        </svg>
                                        <input
                                            type="url"
                                            required
                                            placeholder="https://"
                                            pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$"
                                            title="Must be valid URL"
                                            name='photoURL'
                                        />
                                    </label>
                                    <p className="validator-hint">Must be valid URL</p>
                                </div>



                                {/* password input  */}
                                <div className='-mt-8'>
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

                                {/* register btn  */}
                                <div className='mt-10 mb-5'>
                                    <button
                                        className="font-bold border cursor-pointer text-lg uppercase w-80 h-10 text-[#000000] justify-center transition-colors duration-300 hover:bg-[#449843]"
                                    >
                                        Register
                                    </button>
                                </div>
                            </form>

                            {/* login route  */}
                            <div>
                                <span>Already have an account? </span>
                                <Link to='/login'>
                                    <span className='underline text-[#3892E4] cursor-pointer hover:text-[#383be4]'>Login</span>
                                </Link>
                            </div>

                        </div>


                    </div>

                    {/* right div  */}
                    <div>
                        <img src="/src/assets/img/register.png" alt="Login" className='w-120' />
                    </div>

                </div>
            </main>
            <footer>
                <Footer/>
            </footer>


        </div>
    );
};

export default Register;