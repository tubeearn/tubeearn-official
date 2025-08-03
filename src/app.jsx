// App.jsx import React from "react"; import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; import Sidebar from "./components/Sidebar"; import Topbar from "./components/Topbar"; import Dashboard from "./pages/Dashboard"; import Wallet from "./pages/Wallet"; import VideoUpload from "./pages/VideoUpload"; import Settings from "./pages/Settings";

function App() { return ( <Router> <div className="flex h-screen"> <Sidebar /> <div className="flex-1 flex flex-col"> <Topbar /> <main className="p-4 overflow-y-auto flex-1"> <Routes> <Route path="/" element={<Dashboard />} /> <Route path="/wallet" element={<Wallet />} /> <Route path="/upload" element={<VideoUpload />} /> <Route path="/settings" element={<Settings />} /> </Routes> </main> </div> </div> </Router> ); }

export default App;

