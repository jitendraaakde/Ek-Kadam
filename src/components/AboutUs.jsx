import React from 'react';
import img1 from '../../public/grid1.jpg';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { FiBook, FiUsers, FiHeart, FiDroplet } from 'react-icons/fi';

const achievements = [
  { year: 2021, description: 'Helped 50 students', icon: FiBook, image: `${img1}?height=200&width=200` },
  { year: 2022, description: 'Distributed educational materials to 250 students in rural areas', icon: FiUsers, image: `${img1}?height=200&width=200` },
  { year: 2023, description: 'Expanded help to 700 students, distributing more resources', icon: FiHeart, image: `${img1}?height=200&width=200` },
  { year: 2024, description: 'Over 50 successful blood donations', icon: FiDroplet, image: `${img1}?height=200&width=200` },
];

const galleryImages = [
  `${img1}?height=300&width=400`,
  `${img1}?height=300&width=400`,
  `${img1}?height=300&width=400`,
  `${img1}?height=300&width=400`,
  `${img1}?height=300&width=400`,
  `${img1}?height=300&width=400`,
];

const socialLinks = [
  { icon: FaInstagram, link: 'https://www.instagram.com/ek_kadam_21?igsh=MTY1NmNhbzg0djF5YQ==', label: 'Instagram' },
  { icon: FaFacebook, link: 'https://www.facebook.com/profile.php?id=100084362934941&mibextid=ZbWKwL', label: 'Facebook' },
  { icon: FaWhatsapp, link: 'https://wa.me/9174648471', label: 'WhatsApp' },
];

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="relative h-screen">
        <img
          src={`${img1}?height=1080&width=1920`}
          alt="NGO Event"
          className="absolute inset-0 h-full w-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">संस्था एक कदम</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            संस्था एक कदम का मुख्य लक्ष्य शि क्षा के प्रति जागरूकता फैलाना और ज़रूरतमंद बच्चों की आर्थिक सहायता करना है।
          </p>
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">
            Join Us
          </button>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-xl">
                एक कदम का उद्देश्य शि क्षा के क्षेत्र में आगे बढ़ने के लिए प्रेरित करना और आर्थिक सहायता प्रदान करना है।
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={`${img1}?height=200&width=200`}
                  alt={`NGO Activity ${i}`}
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* New Section: About Our NGO */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">About Our NGO</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-[70%]">
              <p className="text-lg mb-4">
                Ek Kadam is a non-governmental organization dedicated to empowering underprivileged children through education and support. Founded in 2020, our mission is to bridge the educational gap and provide opportunities for a brighter future.
              </p>
              <p className="text-lg mb-4">
                We believe that every child deserves access to quality education, regardless of their socio-economic background. Through our various programs and initiatives, we aim to:
              </p>
              <ul className="list-disc list-inside mb-4">
                <li>Provide educational materials and resources to students in need</li>
                <li>Organize tutoring and mentorship programs</li>
                <li>Conduct awareness campaigns on the importance of education</li>
                <li>Collaborate with schools and communities to improve educational infrastructure</li>
              </ul>
              <p className="text-lg">
                With the support of our dedicated volunteers and generous donors, we continue to make a positive impact on the lives of hundreds of children each year.
              </p>
            </div>
            <div className="md:w-[30%] flex justify-center items-center">
              <img
                src={`${img1}?height=400&width=300`}
                alt="Ek Kadam NGO Team"
                width={300}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-16 px-4 md:px-8 bg-gray-200">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Key Achievements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                <img
                  src={achievement.image}
                  alt={`Achievement ${achievement.year}`}
                  width={200}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <achievement.icon className="text-4xl text-green-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{achievement.year}</h3>
                <p className="text-center">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Photo Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Gallery Image ${index + 1}`}
                width={400}
                height={300}
                className="rounded-lg hover:opacity-75 transition duration-300"
              />
            ))}
          </div>
        </div>
      </section>


      {/* Social Media Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Connect With Us</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center group"
              >
                <div className="bg-white p-4 rounded-full shadow-md group-hover:shadow-lg transition duration-300">
                  <social.icon className="text-4xl text-gray-800 group-hover:text-red-500 transition duration-300" />
                </div>
                <span className="mt-2 text-sm font-medium">{social.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}