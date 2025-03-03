


import Link from "next/link";
import { FaTwitter, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-6 w-1440px h-331px">
      {/* 4 Columns in 1 Row */}
      <div className="grid grid-cols-4 gap-8 w-1372px h-213px mt-40px ml-34px">
        {/* Column 1: Find a Store */}
        {/* <div className="grid grid-col-3 w-1029px h-213px"> */}
        <div>
          <h3 className="text-sm font-semibold mb-4">FIND A STORE</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/become link member" className="hover:underline">Become Link Member</Link></li>
            <li><Link href="/sign up" className="hover:underline">Sign Up for Email</Link></li>
            <li><Link href="/student discount" className="hover:underline">Student Discounts</Link></li>
          </ul>
        </div>

        {/* Column 2: Get Help */}
        <div>
          <h3 className="text-sm font-semibold mb-4">GET HELP</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="hover:underline">Order Status</Link></li>
            <li><Link href="#" className="hover:underline">Delivery</Link></li>
            <li><Link href="#" className="hover:underline">Returns</Link></li>
            <li><Link href="#" className="hover:underline">Payment Options</Link></li>
            <li><Link href="#" className="hover:underline">Contact Us on Nike.com</Link></li>
            <li><Link href="#" className="hover:underline">Contact Us on All Other Inquiries</Link></li>
          </ul>
        </div>

        {/* Column 3: About Nike */}
        <div>
          <h3 className="text-sm font-semibold mb-4">ABOUT NIKE</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="hover:underline">News</Link></li>
            <li><Link href="#" className="hover:underline">Careers</Link></li>
            <li><Link href="#" className="hover:underline">Investors</Link></li>
            <li><Link href="#" className="hover:underline">Sustainability</Link></li>
          </ul>
        </div>
        {/* </div> */}

        {/* Column 4: Social Media Icons */}
        <div className="flex gap-4 mt-4 lg:mt-0 w-337px h-37px ml-1029px">
          <FaTwitter className="text-lg cursor-pointer hover:text-gray-400" aria-label="Twitter" />
          <FaFacebook className="text-lg cursor-pointer hover:text-gray-400" aria-label="Facebook" />
          <FaYoutube className="text-lg cursor-pointer hover:text-gray-400" aria-label="YouTube" />
          <FaInstagram className="text-lg cursor-pointer hover:text-gray-400" aria-label="Instagram" />
        </div>
      </div>

      {/* Footer Information (below the 4 columns) */}
      <div className="mt-8 flex flex-wrap justify-between items-center text-xs text-gray-400">
        <div className="flex mb-4 md:mb-0 gap-2">
          <IoLocationOutline className="text-sm" />
          <p>India</p>
          <p>© 2023 Nike, Inc. All Rights Reserved</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="#" className="hover:underline">Guides</Link>
          <Link href="#" className="hover:underline">Terms of Sale</Link>
          <Link href="#" className="hover:underline">Terms of Use</Link>
          <Link href="#" className="hover:underline">Nike Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

