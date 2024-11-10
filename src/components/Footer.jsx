import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#8C8C8C] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Campus Cloud</h3>
            <p className="text-sm">Empowering you with life-changing tips and tricks to enhance your daily life.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Categories</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Verbal Skills</a></li>
              <li><a href="#" className="hover:underline">Soft Skills</a></li>
              <li><a href="#" className="hover:underline">Health</a></li>
              <li><a href="#" className="hover:underline">Wisdom</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#594545] transition-colors"><Facebook /></a>
              <a href="#" className="hover:text-[#594545] transition-colors"><Twitter /></a>
              <a href="#" className="hover:text-[#594545] transition-colors"><Instagram /></a>
              <a href="#" className="hover:text-[#594545] transition-colors"><Linkedin /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <p>&copy; 2024 Campus Cloud. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}