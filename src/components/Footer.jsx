import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa"
import { Link } from "react-router-dom"

const Footer =()=>{
return <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/profile.php?id=100084362934941&mibextid=ZbWKwL" className="hover:text-primary"><FaFacebook size={24} /></a>
                <a href="https://www.instagram.com/ek_kadam_21?igsh=MTY1NmNhbzg0djF5YQ==" className="hover:text-primary"><FaInstagram size={24} /></a>
                <a href="https://wa.me/9174648471" className="hover:text-primary"><FaWhatsapp size={24} /></a>
              </div>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Quick Links</h3>
              <ul>
                <li><Link to="/" className="hover:text-primary">Home</Link></li>
                <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
                <li><Link to="/journey" className="hover:text-primary">Journey</Link></li>
                <li><Link to="/donate" className="hover:text-primary">Donate</Link></li>
                {/* <li><Link to="/contact" className="hover:text-primary">Contact</Link></li> */}
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h3 className="text-xl font-bold mb-2">Newsletter</h3>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-grow px-3 py-2 text-gray-700 rounded-l"
                />
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-r"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            <p>&copy; 2023 EK Kadam. All rights reserved.</p>
            <p>Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
}
export default  Footer