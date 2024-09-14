import React, { useState } from 'react'

const Login = () => {

      const [state, setState] = useState('Sign Up');
      const [email, setEmail] = useState('');
      const [name, setName] = useState('');
      const [password, setPassword] = useState('');

      const onSubmitHandler = async (event) => {
            event.preventDefault();

      }

      return (
            <form className='flex min-h-[80vh] items-center'>
                  <div className='flex flex-col m-auto items-start gap-3  p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg '>
                        <p className='text-2xl font-semibold'>{state === 'Sign Up' ? "Sign Up" : "Login"}</p>
                        <p>Please {state === 'Sign Up' ? "Sign Up" : "Login"} to book appointment</p>
                        {
                              state === "Sign Up" && <div className='w-full '>
                                    <p>Full Name</p>
                                    <input className='border border-zinc-300 rounded w-full p-2 mt-1 outline-none' type='text' onChange={(e) => setName(e.target.name)} value={name} required></input>
                              </div>
                        }


                        <div className='w-full '>
                              <p>Email</p>
                              <input className='border border-zinc-300 rounded w-full p-2 mt-1 outline-none' type='email' onChange={(e) => setEmail(e.target.name)} value={email} required></input>
                        </div>

                        <div className='w-full '>
                              <p>Password</p>
                              <input className='border border-zinc-300 rounded w-full p-2 mt-1 outline-none' type='password' onChange={(e) => setPassword(e.target.name)} value={password} required></input>
                        </div>
                        <button className='bg-primary w-full py-2 rounded-md text-base text-white'>{state === 'Sign Up' ? "Create Account" : "Login"} </button>

                        {
                              state === 'Sign Up' ? <p>Already have an account ? <span onClick={() => setState('Login')} className='text-primary underline cursor-pointer' >Login here</span> </p> :
                                    <p>Create an new account ? <span onClick={() => setState('Sign Up')} className='text-primary underline cursor-pointer' >click here</span> </p>
                        }

                  </div>
            </form>
      )
}

export default Login
