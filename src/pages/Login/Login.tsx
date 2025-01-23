import Navigator from "../../components/Navigator/Navigator";

import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { TChildren } from "../../Types/randomTypes";
import { useLoginUserMutation } from "../../redux/api/userApi";
import { FormEvent } from "react";
import { setEmail, setPassword } from "../../redux/features/loginSlice";
import {
  setCredentials,
  TUserLocalState,
} from "../../redux/features/authSlice";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { verifyToken } from "../../utils/verifyToken";
import { toast } from "sonner";
import ReduxInput from "../../components/ReduxInput/ReduxInput";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const children: TChildren = {
    page: "Login",
    pageName: "Login Page",
  };

  const dispatch = useAppDispatch();
  const { email, password } = useAppSelector((state) => state.login);

  const [login] = useLoginUserMutation();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const redirectTo = location.state?.from || "/";
      const response = await login({ email, password });
      const { data } = response;

      if (data?.token) {
        const token = data.token;
        const user = verifyToken(token) as TUserLocalState;

        dispatch(setCredentials({ token, user }));
        toast.success("logged in successfully", {
          duration: 2000,
        });

        if (user.role === "admin") {
          navigate("/admin");
        } else {
          navigate(redirectTo, { replace: true });
        }
      }
    } catch (error) {
      console.error("login Failed:", error);
      toast.error("Login Failed", { description: 2000 });
    }
  };
  return (
    <div>
      <Navigator page={children.page} pageName={children.pageName}></Navigator>
      <div className="flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="border-[1px] mt-20 border-[#eee] rounded-2xl w-full lg:w-1/3"
        >
          {/* Header */}
          <div className="text-center my-10">
            <h1 className="text-[25px] font-bold">
              Log <span className="text-primary">In</span>
            </h1>
            <p className="text-[14px] my-2 ">
              Best place to buy and sell digital products
            </p>
          </div>
          {/* Form inputs */}
          <div className="grid grid-cols-1 gap-6 mx-10">
            <ReduxInput
              placeholder="Enter Your Email"
              type="text"
              label="Email"
              req={true}
              layout="col-span-2 lg:col-span-1"
              value={email}
              onChange={(e) => dispatch(setEmail(e.target.value))}
            ></ReduxInput>
            <ReduxInput
              placeholder="Enter your password"
              type="password"
              label="Password"
              req={true}
              layout="col-span-2 lg:col-span-1"
              value={password}
              onChange={(e) => dispatch(setPassword(e.target.value))}
            ></ReduxInput>
            <p className="my-2 text-lighttext font-medium">
              Haven't any account yet!{" "}
              <Link to="/register">
                {" "}
                <span className="text-primary">Register</span>
              </Link>
            </p>
          </div>
          <div className="my-10 flex justify-center items-center">
            <button
              type="submit"
              className="px-3 bg-primary text-white text-l font-semibold rounded-lg py-2 "
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
