import wave from "../asset/wave.png";
import unlock from "../asset/unlock.svg";
import avatar from "../asset/avatar.svg";

function SigninPage() {
  const handleLogin = () => {
    window.location.href = "http://localhost:5000/auth/google";
  };

  return (
    <div>
      <img
        src={wave}
        className="fixed hidden lg:block inset-0 h-full"
        style={{ zIndex: -1 }}
      />

      <div className="w-screen h-screen flex flex-col justify-center items-center lg:grid lg:grid-cols-2">
        <img src={unlock} className="hidden ml-48 lg:block w-56" />
        <form className="flex flex-col justify-center items-center bg-orange-200 border border-gray-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative w-full max-w-md">
          <img src={avatar} className="w-32" />
          <h1 className="my-8 font-bold font-serif text-gray-400 text-3xl text-center ">
            Welcome to you
          </h1>
          <button
            className=" w-60 mb-4 text-[18px] mt-6 rounded-full bg-orange-400 text-white hover:bg-orange-500 hover:text-white py-2 transition-colors"
            onClick={handleLogin}
          >
            Login with Google
          </button>
        </form>
      </div>
    </div>
  );
}

export default SigninPage;
