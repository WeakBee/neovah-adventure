"use client";
import { useState } from "react";
import Link from "next/link";

export default function Register() {
  const [loadingRegister, setLoadingRegister] = useState<boolean>(false);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [error, setError] = useState<string | null>(null);
  
    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setError(null);
      setLoadingRegister(true);
    
      try {
        const response = await fetch("http://localhost/all-public-api/public/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json" // Tambahkan ini
          },
          body: JSON.stringify({ username, email, password }),
        });
        
        const data = await response.json();
        
        if (response.ok) {
          sessionStorage.setItem("token", data.data.token);
          sessionStorage.setItem("email", data.data.user.email);
          alert("Register successful");
          setLoadingRegister(false);
        } else {
          setError(data.data || "Register failed");
          setLoadingRegister(false);
        }
      } catch (error) {
        setError("An error occurred. Please try again.");
        setLoadingRegister(false);
      }
    };

  return (
    <div
      className="relative z-10 h-screen overflow-hidden">
      <div className="h-full w-full flex justify-center container mx-auto">
        <div className="absolute w-full h-full bg-[#E6E2D7]/60 backdrop-blur-sm flex flex-col justify-center items-center">
            <img className="absolute w-full object-cover idlescale" src="/assets/circular-gradient.png" alt="Gradient" />
            <div className="relative mb-8">
                <div className="bg-[#494740] absolute z-20 text-white px-2 py-0 -right-12 -bottom-6">or <Link className="underline underline-offset-4" href="/login">Login</Link></div>
                <span className="before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-[#E6E2D7] before:shadow-lg">
                <p className="text-[#3d3b34] font-bold text-5xl relative">Register</p>
                </span>
            </div>
            {error && <div className="bg-red-500 text-white p-2 rounded-md shadow-lg text-sm mb-4">{error}</div>}
            <form onSubmit={handleRegister} className="relative">
                <div className="mb-1">
                    <label className="block text-gray-700">Username</label>
                    <input
                    type="username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                    />
                </div>
                <div className="mb-1">
                    <label className="block text-gray-700">Email</label>
                    <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                    />
                </div>
                <div className="">
                    <label className="block text-gray-700">Password</label>
                    <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Password Confirmation</label>
                    <input
                    type="password"
                    name="password_confirmation"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                    />
                </div>
                <button
                  type="submit"
                  className={`w-full text-white py-2 rounded hover:bg-[#58564e] ${
                    loadingRegister ? 'bg-[#acacac]' : 'bg-[#494740]'
                  }`}
                  disabled={loadingRegister}
                >
                  {loadingRegister ? 'Loading ...' : 'Register'}
                </button>

            </form>
        </div>
      </div>
    </div>
  );
}
