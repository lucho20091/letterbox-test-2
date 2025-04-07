import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { API } from '../constants/api';

function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    fetch(API === 'test' ? 'http://localhost:3000/api/register' : '/api/register', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include'
    })
    .then(response => {
      if (response.status === 400) {
        throw new Error('Username already exists');
      }
      return response.json();
    })
    .then(() => {
      setLoading(false);
      navigate('/login');
    })
    .catch(error => {
      setError(error.message);
      setLoading(false);
      toast.error(error.message);
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="grow grid place-items-center">
        <form 
            onSubmit={handleSubmit} 
            className="flex flex-col gap-3  md:p-12 p-4 rounded-lg shadow-2xl">
            <h1 className="text-2xl font-bold text-center">Sign Up</h1>
            <label htmlFor="username" className="">Username</label>
            <input 
                type="text" 
                name="username" 
                placeholder="Username" 
                value={formData.username} 
                onChange={handleChange} 
                className="rounded-md p-2"
                />
            <label htmlFor="password" className="">Password</label>
            <input 
                type="password" 
                name="password" 
                placeholder="Password" 
                value={formData.password} 
                onChange={handleChange} 
                className="rounded-md p-2"
                />
            <button 
                type="submit" 
                disabled={loading} 
                className="rounded-md p-2 bg-blue-500 text-white">Sign Up</button>  
            <div className="flex justify-center items-center gap-2">
                <p className="text-sm text-gray-500">Already have an account?</p>
                <Link to="/login" className="text-sm text-blue-500">Login</Link>
            </div>
            <ToastContainer />
        </form>
    </div>
  );
}

export default SignUp;
