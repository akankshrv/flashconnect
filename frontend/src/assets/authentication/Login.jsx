import { Field } from "@/components/ui/field";
import { Input, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { auth, provider } from "@/firebase";
import { signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { toaster } from "@/components/ui/toaster";
import { Button } from "@/components/ui/button";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const submitHandler = async () => {
    setLoading(true);
    if (!email || !password) {
      toaster.create({
        title: "Please Fill all the Feilds",
        type: "warning",
        duration: 3000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/user/login",
        { email, password },
        config
      );

      toaster.create({
        title: "Login Successful",
        type: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });

      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      history.push("/chats");
    } catch (error) {
      console.log(error);
      toaster.create({
        title: "Error Occured!",
        description: error.response?.data?.message || "Unkown Error Occured",
        type: "error",
        duration: 3000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    }
  };
  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Google User Info:", user);
    } catch (error) {
      console.error("Google Login Error:", error);
    }
  };
  return (
    <VStack spaceY="5px">
      <Field label="Email" required id="email">
        <Input
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </Field>
      <Field label="Password" required id="password">
        <Input
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Field>
      <Button
        bgColor="green.400"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        loading={loading}
        borderRadius="2xl"
      >
        Login
      </Button>
      <Button
        variant="solid"
        bgColor="black"
        color="green.100"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={() => {
          googleLogin();
        }}
        borderRadius="2xl"
      >
        Login with <FcGoogle />
      </Button>
    </VStack>
  );
};

export default Login;
