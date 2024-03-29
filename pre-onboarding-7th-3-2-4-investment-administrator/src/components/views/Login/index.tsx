import { useMutation } from "@tanstack/react-query";
import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { AiOutlineLock, AiOutlineLogout, AiOutlineUser } from "react-icons/ai";
import Footer from "src/components/common/Footer";
import { logIn } from "src/components/views/Login/api";

const Login: NextPage = () => {
  const router = useRouter();
  const { mutate } = useMutation(logIn, {
    onSuccess: (data) => {
      router.push("/accounts");
      return data;
    },
    onError: (error) => {
      console.error(error);
      return error;
    }
  });

  const [state, setState] = useState({
    id: "",
    password: ""
  });

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({ email: state.id, password: state.password });
  };

  return (
    <div className="flex flex-wrap w-2/5 h-3/5 mx-auto relative top-20">
      <h1 className="flex w-1/2 mx-auto justify-evenly items-center text-4xl font-bold text-myDarkBlue">
        <Image
          src="/logo.png"
          alt="PREFACE Logo"
          width={50}
          height={50}
          className="rounded-md"
        />
        PREFACE
      </h1>

      <div className="flex justify-center flex-wrap w-full h-80 mt-12 bg-white shadow-md rounded-md">
        <h2 className="flex items-center pl-4 w-full h-12 bg-myBeige border-b-2 border-myLightGray">
          <AiOutlineUser className="mr-3" />
          로그인
        </h2>
        <form
          className="w-full flex flex-wrap justify-center"
          onSubmit={handleSubmit}
        >
          <label htmlFor="id" className="relative block w-4/5 mx-auto ">
            <AiOutlineUser className="mr-3 pointer-events-none absolute top-3 left-2" />
            <input
              type="text"
              id="id"
              name="id"
              placeholder="아이디를 입력하세요"
              onChange={onChangeInput}
              className="w-full h-10 mb-2 pl-8 border-2 border-myLightGray"
            />
          </label>
          <label htmlFor="password" className="relative block w-4/5 mx-auto">
            <AiOutlineLock className="mr-3 pointer-events-none absolute top-5 left-2" />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="비밀번호를 입력하세요"
              onChange={onChangeInput}
              className="w-full h-10 mt-2 mb-4 pl-8 border-2 border-myLightGray"
            />
          </label>
          <button className="flex w-4/5 h-12 mx-auto my-8 justify-center items-center bg-myBeigeGray border-2 border-myLightGray cursor-pointer">
            <AiOutlineLogout className="mr-3" />
            로그인
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
