import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { connect } from "react-redux";

import { GlobalProps, mapStateToProps } from "../../Util/props";

interface formData {
  email: string;
  password: string;
}

const Login: React.FC<GlobalProps> = (props) => {
  const { accessToken, refreshToken } = props.authReducer

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Email is required')
      .email('Email is invalid'),
    password: Yup.string()
  });

  const { register, handleSubmit } = useForm<formData>({
    resolver: yupResolver(validationSchema)
  })

  const onSubmit = (data: formData) => {

  }

  return <div className="w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
    {/* <LoadingModal isOpened={(status == "loading")} /> */}

    <div className="w-full sm:max-w-md p-5 mx-auto">
      <h2 className="mb-12 text-center text-5xl font-extrabold">Editin</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input {...register("email")} className="py-2 px-3 border border-gray-300 focus:border-teal-300 focus:outline-none focus:ring focus:ring-teal-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Password</label>
          <input {...register("password")} className="py-2 px-3 border border-gray-300 focus:border-teal-300 focus:outline-none focus:ring focus:ring-teal-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
        </div>
        {/* <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center">
            <input id="remember_me" type="checkbox" className="border border-gray-300 text-red-600 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50" />
            <label className="ml-2 block text-sm leading-5 text-gray-900"> Remember me </label>
          </div>
          <a href="#" className="text-sm"> Forgot your password? </a>
        </div> */}
        <div className="mt-6">
          <button type="submit" className="w-full inline-flex items-center justify-center px-4 py-2 bg-teal-500 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-teal-700 active:bg-teal-700 focus:outline-none focus:border-teal-700 focus:ring focus:ring-teal-200 disabled:opacity-25 transition">Sign In</button>
        </div>
        <div className="mt-6 text-center">
          <Link
            to={'register'}>
            Don't have account? Sign up
          </Link>
        </div>
      </form>
    </div>
  </div>
}

export default connect(mapStateToProps, {})(Login)