"use client";
import { useState } from "react";
import Link from "next/link";

export default function Login() {
  const [loadingRegister, setLoadingRegister] = useState<boolean>(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setError(null);
      setLoadingRegister(true);
    
      try {
        const response = await fetch("http://localhost/all-public-api/public/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json" // Tambahkan ini
          },
          body: JSON.stringify({ email, password }),
        });
        
        const data = await response.json();
        
        if (response.ok) {
          sessionStorage.setItem("token", data.data.token);
          sessionStorage.setItem("email", data.data.user.email);
          alert("Login successful");
          setLoadingRegister(false);
        } else {
          setError(data.data || "Login failed");
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
                <div className="bg-[#494740] absolute z-20 text-white px-2 py-0 -right-12 -bottom-6">or <Link className="underline underline-offset-4" href="/register">Register</Link></div>
                <span className="before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-[#E6E2D7] before:shadow-lg">
                <p className="text-[#3d3b34] font-bold text-5xl relative">Login</p>
                </span>
            </div>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <form onSubmit={handleLogin} className="relative">
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
                <div className="mb-4">
                    <label className="block text-gray-700">Password</label>
                    <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                  {loadingRegister ? 'Loading ...' : 'Login'}
                </button>
            </form>
        </div>
      </div>
    </div>
  );
}
