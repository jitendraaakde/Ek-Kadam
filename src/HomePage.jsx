import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebook, FaTwitter, FaInstagram, FaLinkedin,
  FaBars, FaTimes, FaArrowLeft, FaArrowRight,
  FaEnvelope,
  FaUsers,
  FaHospital,
  FaGraduationCap,
  FaHandHoldingHeart
} from 'react-icons/fa';

// Import images for the Hero Section
import slider1 from '../public/journey1.png';
import slider2 from '../public/journey2.jpg';
import slider3 from '../public/journey3.jpg';
import slider4 from '../public/journey4.jpg';



// Image and caption arrays for the Hero Section
const images = [slider1, slider2, slider3, slider4];

const captions = [
  'एक छोटा कदम, किसी के जीवन में बड़ा बदलाव ला सकता है!',
  'हर कदम पर ज्ञान का दीप जलाएं',
  'शिक्षा की शक्ति, हर बच्चे का सपना पूरा करें',
  'सपनों को हकीकत में बदलने के लिए शिक्षा आवश्यक है',
];



// Main HomePage Component
export default function HomePage() {
  const [currentImage, setCurrentImage] = useState(0);

  // Automatic image carousel effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(timer);
  }, []);

  // Handlers to navigate images manually
  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen flex flex-col mt-14">

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 overflow-hidden">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === currentImage ? 'opacity-100' : 'opacity-0'
                }`}
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-3xl md:text-5xl font-bold text-white mb-10 mx-2">
                    {captions[currentImage]}
                  </h1>
                  <Link
                    to="/donate"
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300"
                  >
                    Donate Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition duration-300"
          aria-label="Previous image"
        >
          <FaArrowLeft size={24} />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition duration-300"
          aria-label="Next image"
        >
          <FaArrowRight size={24} />
        </button>
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${index === currentImage ? 'bg-white' : 'bg-gray-400'
                }`}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow">
        <OurImpactSection />
        <EducationInitiativesSection />
        <HealthcareProgramsSection />
        <ContactFormSection />
      </main>



      {/* Floating Donate Button */}
      <Link
        to="/donate"
        className="fixed bottom-4 right-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300"
      >
        Donate
      </Link>
    </div>
  );
}

// NavLink Component using Link from react-router-dom
function NavLink({ to, children, mobile = false }) {
  return (
    <Link
      to={to}
      className={`${mobile
        ? 'block py-2 px-4 hover:bg-gray-100'
        : 'text-gray-600 hover:text-primary'
        } transition duration-300`}
    >
      {children}
    </Link>
  );
}


// OurImpactSection Component
// Import statements for images
// Import statements for images
import impact1 from '../public/impact1.jpg'
import impact2 from '../public/impact3.jpg'
import impact3 from '../public/impact4.jpg'
import impactMahila from '../public/impactMahila2.jpg'
import impactBlood from '../public/Blood3.jpg'
import impact6 from '../public/Mahila1.jpg'

const impactStories = [
  {
    title: "50 विद्यार्थियों की शिक्षा में सहायता",
    description: `
      'एक कदम' ने जलकोटा गांव के 50 जरूरतमंद विद्यार्थियों को शिक्षा सामग्री प्रदान की 
      और कई परिवारों को राशन वितरित किया। इस पहल का उद्देश्य बच्चों में शिक्षा के प्रति रुचि बढ़ाना 
      और उन्हें आवश्यक सहायता प्रदान करना था।
    `,
    image: impact1,
  },
  {
    title: "250 विद्यार्थियों को स्टेशनरी वितरण",
    description: `
      'एक कदम' ने 250 विद्यार्थियों को कॉपी, किताबें, पेन, बैग और पानी की बोतलें वितरित की। 
      इसके साथ ही, बच्चों को ट्यूशन सहायता भी प्रदान की गई, जिससे उन्हें शिक्षा प्राप्त करने का प्रोत्साहन मिला।
    `,
    image: impact2,
  },
  {
    title: "600 से अधिक बच्चों की शिक्षा में योगदान",
    description: `
      संस्था ने 600-700 जरूरतमंद विद्यार्थियों को शिक्षा सामग्री प्रदान की, 
      जिसमें किताबें, कॉपी, और स्टेशनरी शामिल थी। इस पहल ने बच्चों को शिक्षा के प्रति प्रेरित किया और उनका भविष्य उज्ज्वल बनाया।
    `,
    image: impact3,
  },
  {
    title: "लड़कियों को सेनेटरी पैड वितरण और जागरूकता",
    description: `
      'एक कदम' ने कई गांवों में जाकर लड़कियों को सेनेटरी पैड वितरित किए और 
      माहवारी से जुड़ी जागरूकता कार्यक्रम आयोजित किए, जिससे महिलाओं को महत्वपूर्ण स्वास्थ्य जानकारी दी गई।
    `,
    image: impactMahila,
  },
  {
    title: "जरूरतमंदों को रक्तदान",
    description: `
      संस्था के सदस्यों ने 50 से अधिक मरीजों को रक्तदान किया और रक्तदान शिविरों का आयोजन किया। 
      इसके साथ ही, रक्तदान के महत्व के बारे में जागरूकता कार्यक्रम भी चलाए गए।
    `,
    image: impactBlood,
  },
  {
    title: "स्वास्थ्य जागरूकता कार्यक्रम",
    description: `
      'एक कदम' ने कई स्वास्थ्य संबंधी जागरूकता कार्यक्रम आयोजित किए, जिनमें ग्रामीण और शहरी समुदायों को 
      स्वास्थ्य से संबंधित महत्वपूर्ण जानकारियाँ प्रदान की गईं और जरूरतमंदों की सहायता की गई।
    `,
    image: impact6,
  }
];

function OurImpactSection() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <FaHandHoldingHeart className="text-blue-500 mx-auto" size={48} />
          <h2 className="text-3xl font-bold mt-4">अब तक की यात्रा</h2>
          <p className="text-gray-600 mt-2">
            "हमने मिलकर बच्चों की शिक्षा में बड़ा बदलाव लाने का प्रयास किया है।
            यह यात्रा सिर्फ संख्या नहीं है, बल्कि उन चेहरों की कहानी है जिन्हें हमने
            आशा और सपनों का एक नया रास्ता दिखाया।"
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {impactStories.map((story, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2">{story.title}</h3>
                <p className="text-gray-600 mb-4">{story.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}





import journey1 from '../public/journey1.png';
import journey2 from '../public/journey2.jpg';
import journey3 from '../public/journey3.jpg';
import journey4 from '../public/journey4.jpg';

// EducationInitiativesSection Component
const journeyDetails = [
  {
    year: 'प्रथम वर्ष (2021)',
    description: 'संस्था एक कदम की स्थापना 01/11/2021 को हुई। पहले वर्ष में, सदस्यों ने जलकोटा गांव में 50 विद्यार्थियों को शैक्षणिक सामग्री जैसे कि कॉपी, पेन, और स्कूल बैग प्रदान किए। इसके साथ ही, जरूरतमंद परिवारों को राशन वितरित किया गया। यह पहल गरीब और असहाय परिवारों के लिए शिक्षा की पहुंच को बढ़ाने का प्रयास थी।',
    image: journey1,
  },
  {
    year: 'द्वितीय वर्ष (2022)',
    description: 'द्वितीय वर्ष में, संस्था ने खरगोन जिले और महेश्वर शहर के करीब के गांवों में जाकर लगभग 250 विद्यार्थियों को शैक्षणिक सामग्री वितरित की। जैसे कि कॉपी, पेन, किताबें, और पानी की बोतलें। इस वर्ष का उद्देश्य अधिक से अधिक बच्चों तक पहुँच बनाना और उन्हें शिक्षा की ओर प्रोत्साहित करना था।',
    image: journey2,
  },
  {
    year: 'तृतीय वर्ष (2023)',
    description: 'तृतीय वर्ष में, संस्था ने 600-700 विद्यार्थियों को आवश्यक शैक्षणिक सामग्री दी और उन्हें शिक्षा के प्रति प्रेरित किया। इसके साथ ही, गाँवों में जाकर बच्चों के साथ दिवाली का त्योहार मनाया गया, जिससे बच्चों में खुशी और उम्मीद जगाई जा सके। इस साल, संस्था ने 1 लाख से अधिक रुपये की सामग्री जरूरतमंद विद्यार्थियों को पहुंचाई।',
    image: journey3,
  },
  {
    year: 'नवीनतम वर्ष (2024)',
    description: 'नवीनतम वर्ष में, संस्था ने 50 से अधिक मरीजों को रक्तदान किया और जरूरतमंद लोगों की मदद की। यह पहल समाज के प्रति हमारी जिम्मेदारी को दर्शाती है। संस्था ने यह सुनिश्चित किया कि जो लोग आर्थिक रूप से कमजोर हैं, उन्हें आवश्यक सहायता मिले।',
    image: journey4,
  },
];

function EducationInitiativesSection() {
  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <FaGraduationCap className="text-green-500 mx-auto" size={48} />
          <h2 className="text-3xl font-bold mt-4">हमारी यात्रा</h2>
          <p className="text-gray-600 mt-2">
            "यह यात्रा सिर्फ संख्या नहीं है, बल्कि उन चेहरों की कहानी है जिन्हें हमने आशा और सपनों का एक नया रास्ता दिखाया।"
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {journeyDetails.map((journey, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
              <img
                src={journey.image}
                alt={`Journey Year ${journey.year}`}
                className="w-full md:w-1/2 h-48 object-cover"
              />
              <div className="p-4 md:w-1/2">
                <h3 className="font-bold text-xl mb-2">{journey.year}</h3>
                <p className="text-gray-600 mb-4">{journey.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



import grid1 from '../public/grid1.jpg';
import grid2 from '../public/grid2.jpg';
import grid3 from '../public/grid3.jpg';
import grid4 from '../public/grid4.jpg';
import grid5 from '../public/grid5.jpg';
import grid6 from '../public/impact1.jpg';
import grid7 from '../public/grid7.jpg';
import grid8 from '../public/impact6.jpg';
import grid9 from '../public/journey1.png';
import grid10 from '../public/journey2.jpg';
import grid11 from '../public/journey3.jpg';
import grid12 from '../public/journey4.jpg';



function HealthcareProgramsSection() {
  const images = [
    grid1, grid2, grid3, grid4, grid5, grid6, grid7, grid8, grid9, grid10, grid11, grid12
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">पिछला वर्ष 2023</h1>
        <p className="text-center text-gray-600 mb-8">
          "हर बच्चे को शिक्षा का अधिकार है, और हम इसे साकार करने के लिए प्रयासरत हैं।"
        </p>
        <p className="text-center text-gray-600 mb-8">
          संस्था उन गरीब और असहाय परिवारों तक पहुंचने का कार्य करती है जिनकी आर्थिक स्थिति स्थिर नहीं है। "एक कदम" की स्थापना 01/11/2021 को कुछ विद्यार्थियों और युवाओं द्वारा की गई थी, जिन्होंने जरूरतमंद बच्चों और परिवारों की आर्थिक सहायता करने का संकल्प लिया।
        </p>
        <p className="text-center text-gray-600 mb-8">
          मुख्य उद्देश्य: असहाय बच्चों और परिवारों की आर्थिक सहायता करना और उन्हें पढ़ने के लिए आवश्यक शैक्षण सामग्री और मार्गदर्शन प्रदान करना।
        </p>
        <p className="text-center text-gray-600 mb-8">
          कार्यशैली: स्कूली छात्र, कॉलेज छात्र, और अन्य व्यवसाय से जुड़े लोग शामिल हैं, जो अपने जेब खर्च का एक हिस्सा निकालकर संस्था को योगदान देते हैं। इसके कुछ सदस्य गाँवों में नि:शुल्क कोचिंग चलाते हैं और विद्यार्थियों के आगे बढ़ने में मार्गदर्शक का कार्य करते हैं।
        </p>
        <p className="text-center text-gray-600 mb-8">
          प्रति वर्ष, संस्था ग्रामीण इलाकों में आवश्यक शैक्षणिक सामग्री वितरित करती है, साथ ही मिठाइयाँ और पटाखे देकर दीपावली का उत्सव मनाती है।
        </p>
        <p className="text-center text-gray-600 mb-8">
          उद्देश्य और लक्ष्य: "एक कदम" उन बच्चों तक पहुँचने का माध्यम है जो शिक्षा के क्षेत्र में आगे बढ़ना चाहते हैं लेकिन सही मार्गदर्शन और पैसे की कमी के कारण पीछे रह जाते हैं।
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full h-48 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


// CommunityEmpowermentSection Component


// ContactFormSection Component
function ContactFormSection() {
  return (
    <section className="py-16 bg-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <FaEnvelope className="text-purple-500 mx-auto" size={48} />
          <h2 className="text-3xl font-bold mt-4">Contact Us</h2>
        </div>
        <div className="max-w-2xl mx-auto">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                placeholder="Your Message"
                rows={6}
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

