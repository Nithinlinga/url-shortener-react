import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import TextField from './TextField';
import Api from '../api/NewAPI';
import toast from 'react-hot-toast';
import { useStoreContext } from '../contextapi/ContextApi';

const Login = () => {
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const { setToken } = useStoreContext();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
    mode: 'onTouched',
  });

  const loginHandler = async (data) => {
    setLoader(true);
    try {
      const { data: response } = await Api.post('/api/auth/public/login', data);
      toast.success('Login successful!');
      reset();
      setToken(response.token);
      localStorage.setItem('JWT_TOKEN', JSON.stringify(response.token));
      navigate('/dashboard');
    } catch (error) {
      console.error(error.message);
      if (error.response && error.response.status === 400) {
        toast.error('Username or password is incorrect!');
      } else if (error.response && error.response.status === 500) {
        toast.error('Server error! Please try again later.');
      } else {
        toast.error('An unexpected error occurred!');
      }
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex justify-center items-center bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-100 px-4 py-10">
      <form
        onSubmit={handleSubmit(loginHandler)}
        className="w-full max-w-md bg-white shadow-2xl rounded-3xl p-8 sm:p-10 transition-all duration-300 border border-gray-200"
      >
        <h1 className="text-center text-3xl font-extrabold text-indigo-600 mb-6 tracking-tight">
          Welcome Back 👋
        </h1>

        <div className="flex flex-col gap-5">
          <TextField
            label="Username"
            required
            id="username"
            type="text"
            message="*Username is required"
            register={register}
            placeholder="Enter your username"
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
          className={`mt-6 w-full py-3 rounded-lg cursor-pointer text-white font-bold text-lg transition-all duration-200 ${
            loader
              ? 'bg-indigo-300 cursor-not-allowed'
              : 'bg-indigo-500 hover:bg-indigo-600'
          }`}
        >
          {loader ? 'Logging In...' : 'Login'}
        </button>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account?{' '}
          <Link
            to="/register"
            className="text-indigo-600 font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
