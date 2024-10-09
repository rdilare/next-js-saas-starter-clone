import { Button } from '@/components/ui/button';
import { ArrowRight, CreditCard, Database } from 'lucide-react';
import { Terminal } from './terminal';

export default function HomePage() {
  return (
    <main>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl md:text-6xl">
            AI-Based Image Generation
            <span className="block text-orange-500">For Your Products</span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            Enhance your product listings with AI-generated images. Create stunning visuals in no time with our cutting-edge technology.
          </p>
          <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
            <a
          href="https://vercel.com/templates/next.js/next-js-saas-starter"
          target="_blank"
            >
          <Button className="bg-white hover:bg-gray-100 text-black border border-gray-200 rounded-full text-lg px-8 py-4 inline-flex items-center justify-center">
            Try it now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
            </a>
          </div>
        </div>
        <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
          <img
            src="https://cdn.prod.website-files.com/5ee0a01b09389eebf4c09b45/6616b2e12e0d213577375c5a_AI-Product-Photo-Hero-EN.webp"
            alt="AI generated product image"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Ready to get started?
              </h2>
                <p className="mt-3 max-w-3xl text-lg text-gray-500">
                Our AI-powered tools help you create stunning images for your products effortlessly. 
                Enhance your product listings with high-quality visuals that attract and engage customers.
                </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
        <div className="lg:col-span-1">
          <h3 className="text-lg font-medium text-white">About Us</h3>
          <p className="mt-4 text-base text-gray-400">
            We are dedicated to providing the best AI-based image generation solutions for your products. Enhance your listings with stunning visuals.
          </p>
        </div>
        <div className="mt-12 lg:mt-0 lg:col-span-1">
          <h3 className="text-lg font-medium text-white">Quick Links</h3>
          <ul className="mt-4 space-y-4">
            <li>
          <a href="#" className="text-base text-gray-400 hover:text-white">
            Home
          </a>
            </li>
            <li>
          <a href="#" className="text-base text-gray-400 hover:text-white">
            Features
          </a>
            </li>
            <li>
          <a href="#" className="text-base text-gray-400 hover:text-white">
            Pricing
          </a>
            </li>
            <li>
          <a href="#" className="text-base text-gray-400 hover:text-white">
            Contact
          </a>
            </li>
          </ul>
        </div>
        <div className="mt-12 lg:mt-0 lg:col-span-1">
          <h3 className="text-lg font-medium text-white">Follow Us</h3>
          <div className="mt-4 flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white">
          <span className="sr-only">Facebook</span>
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .733.592 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.504 0-1.794.715-1.794 1.763v2.313h3.587l-.467 3.622h-3.12v9.294h6.116c.733 0 1.325-.591 1.325-1.324v-21.351c0-.733-.592-1.325-1.325-1.325z"/>
          </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
          <span className="sr-only">Twitter</span>
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.608 1.794-1.574 2.163-2.723-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.087-.205-7.713-2.165-10.141-5.144-.423.722-.666 1.561-.666 2.457 0 1.69.861 3.179 2.169 4.055-.8-.026-1.555-.245-2.213-.612v.061c0 2.362 1.679 4.337 3.911 4.779-.409.111-.84.171-1.285.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.376 4.604 3.415-1.68 1.319-3.809 2.105-6.102 2.105-.396 0-.787-.023-1.175-.067 2.179 1.397 4.768 2.213 7.548 2.213 9.054 0 14.002-7.496 14.002-13.986 0-.21 0-.423-.015-.635.961-.695 1.8-1.562 2.46-2.549z"/>
          </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
          <span className="sr-only">LinkedIn</span>
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.998 3h-16c-1.104 0-2 .896-2 2v14c0 1.104.896 2 2 2h16c1.104 0 2-.896 2-2v-14c0-1.104-.896-2-2-2zm-11.998 16h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.498 11.268h-3v-5.5c0-1.104-.896-2-2-2s-2 .896-2 2v5.5h-3v-10h3v1.268c.586-.586 1.354-.768 2.5-.768 2.206 0 4 1.794 4 4v5.5z"/>
          </svg>
            </a>
          </div>
        </div>
          </div>
          <div className="mt-12 border-t border-gray-700 pt-8">
        <p className="text-base text-gray-400 text-center">
          &copy; 2023 Your Company. All rights reserved.
        </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
