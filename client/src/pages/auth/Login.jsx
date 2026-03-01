import React, { useState } from 'react';
import Button from '../../components/ui/Button';
import { GraduationCap, Lock, User, Eye, EyeOff } from 'lucide-react';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState('Student'); // Default based on screenshot

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempted for role:", role);
    // TODO: Call API
  };

  return (
    <div className="min-h-screen bg-surface flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden">
        {/* Header Icon */}
        <div className="bg-surface p-6 flex flex-col items-center">
            <div className="h-16 w-16 bg-primary/10 rounded-xl flex items-center justify-center mb-2">
                <GraduationCap className="h-10 w-10 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-primary">IUMS Portal</h2>
            <p className="text-gray-500 text-sm">Integrated University Management System</p>
        </div>

        {/* Login Form */}
        <div className="p-8">
            <h3 className="text-xl font-semibold mb-1 text-gray-800">Sign In</h3>
            <p className="text-sm text-gray-500 mb-6">Enter your credentials to access your account</p>

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Role Selector */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">User Role</label>
                    <div className="relative">
                        <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <select 
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none appearance-none"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                        >
                            <option>Student</option>
                            <option>Faculty</option>
                            <option>Admin</option>
                        </select>
                    </div>
                </div>

                {/* Email Input */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email or Institutional ID</label>
                    <div className="relative">
                        <span className="absolute left-3 top-3 text-gray-400">@</span>
                        <input 
                            type="text" 
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
                            placeholder="e.g. j.doe@university.edu" 
                        />
                    </div>
                </div>

                {/* Password Input */}
                <div>
                    <div className="flex justify-between mb-1">
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <a href="#" className="text-xs text-primary font-medium hover:underline">Forgot Password?</a>
                    </div>
                    <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <input 
                            type={showPassword ? "text" : "password"} 
                            className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
                            placeholder="••••••••" 
                        />
                        <button 
                            type="button" 
                            className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>
                </div>

                {/* Keep logged in */}
                <div className="flex items-center">
                    <input type="checkbox" id="remember" className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
                    <label htmlFor="remember" className="ml-2 block text-sm text-gray-600">Keep me logged in</label>
                </div>

                {/* Action Button */}
                <Button variant="secondary" className="w-full uppercase font-bold text-sm tracking-wide">
                    Login to Portal →
                </Button>
            </form>
        </div>
        
        {/* Footer */}
        <div className="bg-gray-50 p-4 text-center border-t border-gray-100">
             <p className="text-xs text-gray-500">© 2024 University Education Systems.</p>
        </div>
      </div>
    </div>
  );
}