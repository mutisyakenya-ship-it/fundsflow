import axios from 'axios';

// Base API URL 
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

// Create axios instance
const api = axios.create({ 
  baseURL: API_URL,
});

// Attach JWT to every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle 401 Unauthorized
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("isAuthenticated");
      window.location.href = "/login"; // force re-login
    }
    return Promise.reject(error);
  }
);

// ---------------- AUTH ----------------
export const signup = async (formData) => {
  const res = await api.post('/auth/signup', formData);
  return res.data;
};

export const login = async (credentials) => {
  const res = await api.post('/auth/login', credentials);
  if (res.data.token) {
    localStorage.setItem('token', res.data.token);
  }
  return res.data;
};

// USER
export const getProfile = async () => {
  const res = await api.get('/users/me');
  return res.data;
};

export const updateProfile = async (updates) => {
  const res = await api.put('/users/me', updates);
  return res.data;
};

// PROPOSALS
export const getProposals = async () => {
  const res = await api.get('/proposals');
  return res.data;
};

export const createProposal = async (proposalData) => {
  const res = await api.post('/proposals', proposalData);
  return res.data;
};

export const invest = async (investmentData) => {
  const res = await api.post('/investments', investmentData);
  return res.data;
};

// WALLET
export const linkWallet = async (walletAddress) => {
  const res = await api.post('/users/wallet', { walletAddress });
  return res.data;
};

export const getWallet = async () => {
  const res = await api.get('/users/wallet');
  return res.data;
};

export const unlinkWallet = async () => {
  const res = await api.delete('/users/wallet');
  return res.data;
};

// ENTREPRENEUR
export const entrepreneurDashboard = async () => {
  const res = await api.get('/entrepreneur/dashboard');
  return res.data;
};

export const entrepreneurAnalytics = async () => {
  const res = await api.get('/entrepreneur/analytics');
  return res.data;
};

export const entrepreneurProfile = async () => {
  const res = await api.get('/entrepreneur/profile');
  return res.data;
};

export const MyProposal = async () => {
  const res = await api.get('/entrepreneur/my-proposals');
  return res.data;
};

export const entrepreneurWallet = async () => {
  const res = await api.get('/entrepreneur/wallet');
  return res.data;
};

// INVESTOR
export const investorDashboard = async () => {
  const res = await api.get('/investor/dashboard');
  return res.data;
};

export const browseProposals = async () => {
  const res = await api.get('/investor/proposals');
  return res.data;
};

export const investment = async () => { 
  // This endpoint looks wrong: '/investor/invest, my-investment'
  // It should be a valid path like '/investor/investments' or '/investor/my-investments'
  const res = await api.get('/investor/investments');
  return res.data;
};

export const investorAnalytics = async () => {
  const res = await api.get('/investor/analytics');
  return res.data;
};

export const investorWallet = async () => {
  const res = await api.get('/investor/wallet');
  return res.data;
};

export const investorProfile = async () => {
  const res = await api.get('/investor/profile');
  return res.data;
};
export default api;

