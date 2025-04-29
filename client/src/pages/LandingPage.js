import React from 'react'
import DefaultLayout from '../components/DefaultLayout'
import templateimg from '../resources/templates/template1.png'
import template2img from '../resources/templates/template2.png'
import '../resources/templates.css'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

function LandingPage() {
    const templates = [
        {
            title: 'Sample template-1',
            image: templateimg
        },
        {
            title: 'Sample template-2',
            image: template2img
        }
    ]
    const navigate = useNavigate();
    return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="px-6 py-4 flex justify-between items-center shadow-md bg-white">
        <h1 className="text-2xl font-bold text-blue-600">ResumeCraft</h1>
        <div>
          <button onClick={() => navigate(`/login`)} className="mr-4 text-gray-700 hover:text-blue-600">Login</button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
            Get Started
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center flex-1 text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
          Build Your Resume in Minutes
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Choose a template, customize your content, and download your professional resume.
        </p>
        <button  onClick={() => navigate(`/login`)} className="px-6 py-3 bg-blue-600 text-white text-lg rounded-xl hover:bg-blue-700 transition">
          Create Your Resume
        </button>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white px-6 md:px-16">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">Modern Templates</h3>
            <p className="text-gray-600">Professionally designed templates that are easy to customize.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Real-Time Editing</h3>
            <p className="text-gray-600">See your changes as you type with live preview.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">One-Click Export</h3>
            <p className="text-gray-600">Export to PDF or share a link instantly.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-4 bg-gray-100">
        © 2025 ResumeCraft. All rights reserved.
      </footer>
    </div>
  
    )
}

export default LandingPage