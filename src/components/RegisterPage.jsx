import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import TextField from './TextField';
import Api from '../api/Api';
import toast from 'react-hot-toast';

const RegisterPage = () => {
  const [loader, setLoader] = useState(false);
    const navigate=useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
    mode: 'onTouched',
  });

  const registerHandler = async (data) => {
    setLoader(true);
    try {
        const {data:response}=await Api.post('/api/auth/public/register', data);
        console.log('Registration successful!',response);
        reset();
        navigate('/login');
        toast.success('Registration successful!');
    } catch (error) {
      console.error(error.message);
      if (error.response && error.response.status === 400) {
        toast.error('Username or email already exists!');
      } else if (error.response && error.response.status === 500) {
        toast.error('Server error! Please try again later.');
      } else {
        toast.error('An unexpected error occurred!');
      }
        
    }
    finally{
        setLoader(false);
    }
    console.log(data);
    try {
      const response = await fetch('https://api.example.com/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Registration failed!');
      }

      const result = await response.json();
      console.log(result);
      reset();
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex justify-center items-center bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#111] px-4 py-10">

      <form
        onSubmit={handleSubmit(registerHandler)}
        className="w-full max-w-md bg-[#121212] shadow-lg rounded-2xl p-8 sm:p-10 transition-all duration-300 border border-neutral-800"
>
        <h1 className="text-center text-3xl font-bold font-serif  text-neutral-300 mb-6 tracking-tight">
          Create an Account
        </h1>

        <div className="flex flex-col gap-5">
          <TextField
            label="Username"
            required
            id="username"
            type="text"
            message="*username is required"
            register={register}
            placeholder="Enter your username"
            errors={errors}
          />

          <TextField
            label="Email"
            required
            id="email"
            type="text"
            message="*email is required"
            register={register}
            placeholder="Enter your email"
            errors={errors}
          />

          <TextField
            label="Password"
            required
            id="password"
            type="password"
            message="*Password is required"
            register={register}
            placeholder="Enter your password"
            min={6}
            errors={errors}
          />
        </div>

        <button
          type="submit"
          disabled={loader}
          className={`mt-6 w-full py-2.5 rounded-md text-white font-medium transition-all duration-200 ${
            loader
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-black hover:bg-gray-900'
          }`}
        >
          {loader ? 'Registering...' : 'Register'}
        </button>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{' '}
          <Link
            to="/login"
            className="text-white font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
