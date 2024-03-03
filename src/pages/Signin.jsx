import { Link, useNavigate } from "react-router-dom";
import image from "../assets/bg-image.jpg";
import { useForm } from "react-hook-form";
import { Axios } from "../service/auth";
import toast from "react-hot-toast";

export default function Signin() {
  const { register, watch, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = handleSubmit(async () => {
    try {
      const res = await Axios.post(`/api/users/signup`, watch());

      if (res.status === 201) {
        navigate("/login");
        return toast.success(res.data.message);
      }
    } catch (error) {
      // console.error("Error:", error);
      toast.error(error.response.data.message);
    }
  });

  return (
    <div
      className="w-full h-screen border border-black flex items-center justify-center md:p-2 md:py-3 p-3  "
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className=" w-[500px] md:w-full  h-[550px]  border rounded-xl flex flex-col items-center justify-evenly  bg-white">
        <div className="mt-11 ">
          <h4 className="text-3xl font-bold ">Sign up</h4>
        </div>
        <div className="flex h-full flex-col w-full items-center justify-center gap-y-2 mb-14">
          <form
            action=""
            className=" flex h-full flex-col w-full items-center justify-center gap-y-2"
            onSubmit={onSubmit}
          >
            <input
              type="text"
              name=""
              id=""
              placeholder="Name"
              required
              className="w-3/4 h-14 bg-transparent rounded-xl border-[1px] border-black p-4 "
              {...register("name")}
            />
            <input
              type="email"
              name=""
              id=""
              required
              placeholder="Email"
              className="w-3/4 h-14 bg-transparent rounded-xl border-[1px] border-black p-4  "
              {...register("email")}
            />
            <input
              type="password"
              name=""
              id=""
              required
              placeholder="Password"
              className="w-3/4 h-14 bg-transparent rounded-xl border-[1px] border-black p-4 "
              {...register("password")}
            />
            <input
              type="password"
              name=""
              id=""
              required
              placeholder="Confirm"
              className="w-3/4 h-14 bg-transparent rounded-xl border-[1px] border-black p-4  "
              {...register("password")}
            />
            <input
              type="submit"
              value={"Sign Up"}
              name=""
              id=""
              className="w-3/4 h-14 bg-[#ECA64E] hover:bg-[#f6c384] rounded-xl text-white "
            />
          </form>
          <span className="text-sm">
            Allredy have an account ?{" "}
            <Link to={"/login"} className="font-bold hover:text-slate-800   ">
              Log in
            </Link>{" "}
          </span>
        </div>
      </div>
    </div>
  );
}
