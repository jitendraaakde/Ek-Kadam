import React, { useState } from 'react';
import { FaGraduationCap, FaGlobe, FaHeart, FaBook, FaTree, FaUsers } from 'react-icons/fa';

export default function DonatePage() {
  const [donationAmount, setDonationAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');

  const handleDonationChange = (value) => {
    setDonationAmount(value);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setDonationAmount('custom');
  };

  return (
    <div className="container mx-auto px-4 py-8 md:py-16 mt-14">
      <h1 className="text-2xl md:text-xl font-bold text-center mb-8">हमारे उद्देश्य का समर्थन करें</h1>
      
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-8"> 
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">योगदान के लिए संपर्क करे</h2>
            <ul className="space-y-4">
              <li>
                <p className="text-xl text-gray-600 font-bold">दान कारने के लिए इस नंबर पर Whatsapp करे :- +91 9174648471</p>
              </li>
              
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">आपका योगदान</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-500 text-white rounded-full p-3">
                  <FaGraduationCap size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">2000+</h3>
                  <p className="text-sm text-gray-600">बच्चों को शिक्षा मिली</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-500 text-white rounded-full p-3">
                  <FaGlobe size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">100+</h3>
                  <p className="text-sm text-gray-600">समुदायों की सहायता की</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-500 text-white rounded-full p-3">
                  <FaHeart size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">20,000+</h3>
                  <p className="text-sm text-gray-600">जीवन बदले</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">दान करने के लिए हमसे संपर्क करें</h2>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">पूरा नाम</label>
              <input
                type="text"
                id="name"
                className="mt-1 outline-none p-1 px-2 border-none block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                placeholder="अपना नाम दर्ज करें"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">ईमेल पता</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full p-1 px-2 outline-none border-none rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                placeholder="अपना ईमेल पता दर्ज करें"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">फ़ोन नंबर</label>
              <input
                type="tel"
                id="phone"
                className="mt-1 block w-full p-1 px-2 rounded-md outline-none border-none border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                placeholder="अपना फ़ोन नंबर दर्ज करें"
              />
            </div>
    
            <div>
              <label htmlFor="message" className="block  text-sm font-medium text-gray-700">व्यक्तिगत संदेश (वैकल्पिक)</label>
              <textarea
                id="message"
                rows={3}
                className="mt-1 p-1 px-2 block w-full rounded-md outline-none border-none border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                placeholder="दान का कारण साझा करें"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              हमसे संपर्क करें
            </button>
          </form>
        </div>
      </div>
      
    </div>
  );
}
