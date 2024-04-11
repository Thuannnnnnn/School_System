function SigninPage() {
  const handleLogin = () => {
    window.location.href = "http://localhost:5000/auth/google";
  };

  return (
    <div className="App">
      <h1>Login with Google</h1>
      <div className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative w-full max-w-md">
        <button onClick={handleLogin}>Login with Google</button>
      </div>
    </div>
  );
}

export default SigninPage;
