import Link from "next/link";
import Image from "next/image";
import { IoIosArrowUp } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FiFilter } from "react-icons/fi";
import { Carousel } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

export default function Sale() {
  return (
    <main className="my-20 max-w-[1300px] mx-auto flex flex-col lg:flex-row gap-4 lg:gap-20">
  <section className="flex flex-col w-full lg:w-1/6">
    <h1 className="font-semibold text-sm md:text-2xl">New(500)</h1>
    <div className="font-medium text-[9px] lg:text-sm max-w-[150px] space-y-2 mt-6 flex flex-col">
      <Link href={"/women/men shoes"}>Shoes</Link>
      <Link href={""}>Sports Bras</Link>
      <Link href={""}>Tops & T-Shirts</Link>
      <Link href={""}>Hoodies & Sweatshirts</Link>
      <Link href={""}>Jackets</Link>
      <Link href={""}>Trousers & Tights</Link>
      <Link href={""}>Shorts</Link>
      <Link href={""}>Tracksuits</Link>
      <Link href={""}>Jumpsuits & Rompers</Link>
      <Link href={""}>Skirts & Dresses</Link>
      <Link href={""}>Socks</Link>
      <Link href={""}>Accessories & Equipment</Link>
    </div>

    {/* Gender Filters */}
    <div className="mt-10">
      <hr />
      <h1 className="font-semibold flex justify-start items-center gap-x-14 mt-1">
        Gender
        <span>
          <IoIosArrowUp />
        </span>
      </h1>
      <div className="mt-5 text-[9px] lg:text-sm">
        <h1 className="flex gap-2 items-center"><input type="checkbox" className="w-4 h-4" /> Men</h1>
        <h1 className="flex mt-2 gap-2 items-center"><input type="checkbox" className="w-4 h-4" /> Women</h1>
        <h1 className="flex mt-2 gap-2 items-center"><input type="checkbox" className="w-4 h-4" /> Unisex</h1>
      </div>
    </div>

    {/* Kids Filters */}
    <div className="mt-10">
      <hr />
      <h1 className="font-semibold flex justify-start items-center gap-x-14 mt-1">
        Kids
        <span>
          <IoIosArrowUp />
        </span>
      </h1>
      <div className="mt-5 text-[9px] lg:text-sm">
        <h1 className="flex gap-2 items-center"><input type="checkbox" className="w-4 h-4" /> Boys</h1>
        <h1 className="flex mt-2 gap-2 items-center"><input type="checkbox" className="w-4 h-4" /> Girls</h1>
      </div>
    </div>

    {/* Price Filters */}
    <div className="mt-10">
      <hr />
      <h1 className="font-semibold flex justify-start items-center gap-x-14 mt-1">
        Shop By Price
        <span>
          <IoIosArrowUp />
        </span>
      </h1>
      <div className="mt-5 text-[9px] lg:text-sm ">
        <h1 className="flex gap-2 items-center "><input type="checkbox" className="w-4 h-4" /> Under ₹ 2 500.00</h1>
        <h1 className="flex mt-2 gap-2 items-center"><input type="checkbox" className="w-4 h-4" /> ₹ 2 501.00 - ₹ 7 500.00</h1>
      </div>
    </div>
  </section>
  <section className="w-full lg:w-2/2 mx-auto overflow-hidden px-6 md:px-10">
  <div className="flex justify-end items-center gap-4">
    {/* Hide Filters Button */}
    <h1 className="flex items-center gap-2 font-semibold text-sm md:text-lg">
      Hide Filters
      <span>
        <FiFilter size={14} />
      </span>
    </h1>
    {/* Sort By Dropdown */}
    <h2 className="flex items-center gap-2 font-semibold text-sm md:text-lg">
      Sort By
      <span>
        <RiArrowDropDownLine size={25} />
      </span>
    </h2>
  </div>
  {/* Carousel */}
  <div className="mb-10">
    <Carousel />
  </div>
  <hr />
  <section>
  {/* Right side */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-10 justify-center">
    {/* Product Card */}
    <div className="w-full max-w-xs">
      <div className="bg-[#f5f5f5]">
        <Image
          src="/images/pimg1.png"
          alt="Men's shoe"
          width={348}
          height={348}
          className="object-contain"
        />
      </div>
      <p className="text-[#9E3500] font-semibold mt-4">Just In</p>
      <p className="text-black font-semibold mt-2">Nike Air Force 1 Mid '07</p>
      <p className="text-[#757575] font-semibold">Men's Shoes</p>
      <p className="text-[#757575] font-semibold mt-2">1 Colour</p>
      <p className="text-black font-semibold">MRP: ₹ 10 795.00</p>
    </div>

    <div className="w-full max-w-xs">
      <div className="bg-[#f5f5f5]">
        <Image
          src="/images/pimg2.png"
          alt="Men's shoe"
          width={348}
          height={348}
          className="object-contain"
        />
      </div>
      <p className="text-[#9E3500] font-semibold mt-4">Just In</p>
      <p className="text-black font-semibold mt-2">Nike Court Vision Low Next Nature</p>
      <p className="text-[#757575] font-semibold">Men's Shoes</p>
      <p className="text-[#757575] font-semibold mt-2">1 Colour</p>
      <p className="text-black font-semibold">MRP: ₹ 4 995.00</p>
    </div>
    <div className="w-full max-w-xs">
      <div className="bg-[#f5f5f5]">
        <Image
          src="/images/pimg3.png"
          alt="Women's shoe"
          width={348}
          height={348}
          className="object-contain"
        />
      </div>
      <p className="text-[#9E3500] font-semibold mt-4">Just In</p>
      <p className="text-black font-semibold mt-2">Nike Air Force 1 PLT.AF.ORM</p>
      <p className="text-[#757575] font-semibold">Women's Shoes</p>
      <p className="text-[#757575] font-semibold mt-2">1 Colour</p>
      <p className="text-black font-semibold">MRP: ₹ 8 695.00</p>
    </div>
    <div className="w-full max-w-xs">
      <div className="bg-[#f5f5f5]">
        <Image
          src="/images/pimg4.png"
          alt="Men's shoe"
          width={348}
          height={348}
          className="object-contain"
        />
      </div>
      <p className="text-[#9E3500] font-semibold mt-4">Just In</p>
      <p className="text-black font-semibold mt-2">Nike Air Force 1 React</p>
      <p className="text-[#757575] font-semibold">Men's Shoes</p>
      <p className="text-[#757575] font-semibold mt-2">1 Colour</p>
      <p className="text-black font-semibold">MRP: ₹ 13 295.00</p>
    </div>
    <div className="w-full max-w-xs">
      <div className="bg-[#f5f5f5]">
        <Image
          src="/images/pimg5.png"
          alt="Women's shoe"
          width={348}
          height={348}
          className="object-contain"
        />
      </div>
      <p className="text-[#9E3500] font-semibold mt-4">Promo Exclusion</p>
      <p className="text-black font-semibold mt-2">Air Jordan 1 Elevate Low</p>
      <p className="text-[#757575] font-semibold">Women's Shoes</p>
      <p className="text-[#757575] font-semibold mt-2">1 Colour</p>
      <p className="text-black font-semibold">MRP: ₹ 11 895.00</p>
    </div>
    <div className="w-full max-w-xs">
      <div className="bg-[#f5f5f5]">
        <Image
          src="/images/pimg6.png"
          alt="Women's shoe"
          width={348}
          height={348}
          className="object-contain"
        />
      </div>
      <p className="text-[#9E3500] font-semibold mt-4">Just In</p>
      <p className="text-black font-semibold mt-2">Nike Standard Issue</p>
      <p className="text-[#757575] font-semibold">Women's Shoes</p>
      <p className="text-[#757575] font-semibold mt-2">1 Colour</p>
      <p className="text-black font-semibold">MRP: ₹ 2 895.00</p>
    </div>
    <div className="w-full max-w-xs">
      <div className="bg-[#f5f5f5]">
        <Image
          src="/images/pimg7.png"
          alt="Women's shoe"
          width={348}
          height={348}
          className="object-contain"
        />
      </div>
      <p className="text-[#9E3500] font-semibold mt-4">Promo Exclusion</p>
      <p className="text-black font-semibold mt-2">Nike Dunk Low Retro SE</p>
      <p className="text-[#757575] font-semibold">Men's Shoes</p>
      <p className="text-[#757575] font-semibold mt-2">1 Colour</p>
      <p className="text-black font-semibold">MRP: ₹ 9 695.00</p>
    </div>
    <div className="w-full max-w-xs">
      <div className="bg-[#f5f5f5]">
        <Image
          src="/images/pimg8.png"
          alt="Women's shoe"
          width={348}
          height={348}
          className="object-contain"
        />
      </div>
      <p className="text-[#9E3500] font-semibold mt-4">Sustainable Materials</p>
      <p className="text-black font-semibold mt-2">Nike Dri-FIT UV Hyverse</p>
      <p className="text-[#757575] font-semibold">Men's Short-Sleeve Graphic Fitness Top</p>
      <p className="text-[#757575] font-semibold mt-2">1 Colour</p>
      <p className="text-black font-semibold">MRP: ₹ 2 495.00</p>
    </div>
    <div className="w-full max-w-xs">
      <div className="bg-[#f5f5f5]">
        <Image
          src="/images/pimg9.png"
          alt="Women's shoe"
          width={348}
          height={348}
          className="object-contain"
        />
      </div>
      <p className="text-[#9E3500] font-semibold mt-4">Just In</p>
      <p className="text-black font-semibold mt-2">Nike Court Vision Low</p>
      <p className="text-[#757575] font-semibold">Men's Shoes</p>
      <p className="text-[#757575] font-semibold mt-2">1 Colour</p>
      <p className="text-black font-semibold">MRP : ₹ 5 695.00</p>
    </div>
    <div className="w-full max-w-xs">
      <div className="bg-[#f5f5f5]">
        <Image
          src="/images/pimg10.png"
          alt="Women's shoe"
          width={348}
          height={348}
          className="object-contain"
        />
      </div>
      <p className="text-[#9E3500] font-semibold mt-4">Just In</p>
      <p className="text-black font-semibold mt-2">Nike Dri-FIT Ready</p>
      <p className="text-[#757575] font-semibold">Men's Short-Sleeve Fitness Top</p>
      <p className="text-[#757575] font-semibold mt-2">3 Colours</p>
      <p className="text-black font-semibold">MRP : ₹ 2 495.00</p>
    </div>
    <div className="w-full max-w-xs">
      <div className="bg-[#f5f5f5]">
        <Image
          src="/images/pimg11.png"
          alt="Women's shoe"
          width={348}
          height={348}
          className="object-contain"
        />
      </div>
      <p className="text-[#9E3500] font-semibold mt-4">Just In</p>
      <p className="text-black font-semibold mt-2">Nike One Leak Protection: Period</p>
      <p className="text-[#757575] font-semibold">Women's Mid-Rise 18cm (approx.) Biker Shorts</p>
      <p className="text-[#757575] font-semibold mt-2">2 Colour</p>
      <p className="text-black font-semibold">MRP : ₹ 3 395.00</p>
    </div>
    <div className="w-full max-w-xs">
      <div className="bg-[#f5f5f5]">
        <Image
          src="/images/pimg12.png"
          alt="Women's shoe"
          width={348}
          height={348}
          className="object-contain"
        />
      </div>
      <p className="text-[#9E3500] font-semibold mt-4">Just In</p>
      <p className="text-black font-semibold mt-2">Nike Air Force 1 LV8 3</p>
      <p className="text-[#757575] font-semibold">Older Kids' Shoe</p>
      <p className="text-[#757575] font-semibold mt-2">1 Colour</p>
      <p className="text-black font-semibold">MRP : ₹ 7 495.00</p>
    </div>
    <div className="w-full max-w-xs">
      <div className="bg-[#f5f5f5]">
        <Image
          src="/images/pimg13.png"
          alt="Women's shoe"
          width={348}
          height={348}
          className="object-contain"
        />
      </div>
      <p className="text-[#9E3500] font-semibold mt-4">Just In</p>
      <p className="text-black font-semibold mt-2">Nike Blazer Low Platform</p>
      <p className="text-[#757575] font-semibold">Women's Shoes</p>
      <p className="text-[#757575] font-semibold mt-2">1 Colour</p>
      <p className="text-black font-semibold">MRP : ₹ 8 195.00</p>
    </div>
    <div className="w-full max-w-xs">
      <div className="bg-[#f5f5f5]">
        <Image
          src="/images/pimg14.png"
          alt="Women's shoe"
          width={348}
          height={348}
          className="object-contain"
        />
      </div>
      <p className="text-[#9E3500] font-semibold mt-4">Just In</p>
      <p className="text-black font-semibold mt-2">Nike Air Force 1 '07</p>
      <p className="text-[#757575] font-semibold">Women's Shoes</p>
      <p className="text-[#757575] font-semibold mt-2">2 Colours</p>
      <p className="text-black font-semibold">MRP : ₹ 8 195.00</p>
    </div>
    <div className="w-full max-w-xs">
      <div className="bg-[#f5f5f5]">
        <Image
          src="/images/pimg15.png"
          alt="Women's shoe"
          width={348}
          height={348}
          className="object-contain"
        />
      </div>
      <p className="text-[#9E3500] font-semibold mt-4">Just In</p>
      <p className="text-black font-semibold mt-2">Nike Air Force 1 '07</p>
      <p className="text-[#757575] font-semibold">Men's Tight-Fit Sleeveless Top</p>
      <p className="text-[#757575] font-semibold mt-2">1 Colour</p>
      <p className="text-black font-semibold">MRP : ₹ 1 495.00</p>
    </div>
    <div className="w-full max-w-xs">
      <div className="bg-[#f5f5f5]">
        <Image
          src="/images/pimg16.png"
          alt="Men's shoe"
          width={348}
          height={348}
          className="object-contain"
        />
      </div>
      <p className="text-[#9E3500] font-semibold mt-4">Just In</p>
      <p className="text-black font-semibold mt-2">Nike Dunk Low Retro</p>
      <p className="text-[#757575] font-semibold">Men's Shoes</p>
      <p className="text-[#757575] font-semibold mt-2">1 Colour</p>
      <p className="text-black font-semibold">MRP: ₹ 8 695.00</p>
    </div>
    <div className="w-full max-w-xs">
      <div className="bg-[#f5f5f5]">
        <Image
          src="/images/pimg17.png"
          alt="Men's shoe"
          width={348}
          height={348}
          className="object-contain"
        />
      </div>
      <p className="text-[#9E3500] font-semibold mt-4">Just In</p>
      <p className="text-black font-semibold mt-2">Nike Dunk Low Retro</p>
      <p className="text-[#757575] font-semibold">Women's Shoes</p>
      <p className="text-[#757575] font-semibold mt-2">2 Colours</p>
      <p className="text-black font-semibold">MRP: ₹ 5 995.00</p>
    </div>
    <div className="w-full max-w-xs">
      <div className="bg-[#f5f5f5]">
        <Image
          src="/images/pimg18.png"
          alt="Men's shoe"
          width={348}
          height={348}
          className="object-contain"
        />
      </div>
      <p className="text-[#9E3500] font-semibold mt-4">Just In</p>
      <p className="text-black font-semibold mt-2">Nike Dri-FIT UV Miler</p>
      <p className="text-[#757575] font-semibold">Men's Short-Sleeve Running Top</p>
      <p className="text-[#757575] font-semibold mt-2">1 Colour</p>
      <p className="text-black font-semibold">MRP: ₹ 1 695.00</p>
    </div>
    <div className="w-full max-w-xs">
      <div className="bg-[#f5f5f5]">
        <Image
          src="/images/pimg19.png"
          alt="Men's shoe"
          width={348}
          height={348}
          className="object-contain"
        />
      </div>
      <p className="text-[#9E3500] font-semibold mt-4">Just In</p>
      <p className="text-black font-semibold mt-2">Nike Air Max SYSTM</p>
      <p className="text-[#757575] font-semibold">Older Kids' Shoes</p>
      <p className="text-[#757575] font-semibold mt-2">1 Colour</p>
      <p className="text-black font-semibold">MRP: ₹ 6 495.00</p>
    </div>
    <div className="w-full max-w-xs">
      <div className="bg-[#f5f5f5]">
        <Image
          src="/images/pimg20.png"
          alt="Men's shoe"
          width={348}
          height={348}
          className="object-contain"
        />
      </div>
      <p className="text-[#9E3500] font-semibold mt-4">Just In</p>
      <p className="text-black font-semibold mt-2">Nike Alate All U</p>
      <p className="text-[#757575] font-semibold">Women's Light-Support Lightly Lined U-Neck Printed Sports Bra</p>
      <p className="text-[#757575] font-semibold mt-2">1 Colour</p>
      <p className="text-black font-semibold">MRP: ₹ 2 195.00</p>
    </div>
    <div className="w-full max-w-xs">
      <div className="bg-[#f5f5f5]">
        <Image
          src="/images/pimg21.png"
          alt="Men's shoe"
          width={348}
          height={348}
          className="object-contain"
        />
      </div>
      <p className="text-[#9E3500] font-semibold mt-4">Just In</p>
      <p className="text-black font-semibold mt-2">Nike Court Legacy Lift</p>
      <p className="text-[#757575] font-semibold">Women's Shoes</p>
      <p className="text-[#757575] font-semibold mt-2">2 Colours</p>
      <p className="text-black font-semibold">MRP: ₹ 7 495.00</p>
    </div>
    <div className="w-full max-w-xs">
      <div className="bg-[#f5f5f5]">
        <Image
          src="/images/pimg22.png"
          alt="Men's shoe"
          width={348}
          height={348}
          className="object-contain"
        />
      </div>
      <p className="text-[#9E3500] font-semibold mt-4">Just In</p>
      <p className="text-black font-semibold mt-2">Nike Swoosh</p>
      <p className="text-[#757575] font-semibold">Women's Medium-support Padded Sports Bra Tank</p>
      <p className="text-[#757575] font-semibold mt-2">2 Colours</p>
      <p className="text-black font-semibold">MRP: ₹ 3 095.00</p>
    </div>
    <div className="w-full max-w-xs">
      <div className="bg-[#f5f5f5]">
        <Image
          src="/images/pimg23.png"
          alt="Men's shoe"
          width={348}
          height={348}
          className="object-contain"
        />
      </div>
      <p className="text-[#9E3500] font-semibold mt-4">Just In</p>
      <p className="text-black font-semibold mt-2">Nike SB Zoom Janoski OG+</p>
      <p className="text-[#757575] font-semibold">Shoes</p>
      <p className="text-[#757575] font-semibold mt-2">1 Colour</p>
      <p className="text-black font-semibold">MRP: ₹ 8 595.00</p>
    </div>
    <div className="w-full max-w-xs">
      <div className="bg-[#f5f5f5]">
        <Image
          src="/images/pimg24.png"
          alt="Men's shoe"
          width={348}
          height={348}
          className="object-contain"
        />
      </div>
      <p className="text-[#9E3500] font-semibold mt-4">Just In</p>
      <p className="text-black font-semibold mt-2">Nike Dri-FIT Run Division Rise 365</p>
      <p className="text-[#757575] font-semibold">Men's Running Tank</p>
      <p className="text-[#757575] font-semibold mt-2">2 Colours</p>
      <p className="text-black font-semibold">MRP: ₹ 3 495.00</p>
    </div>
    <div className="w-full max-w-xs">
      <div className="bg-[#f5f5f5]">
        <Image
          src="/images/pimg25.png"
          alt="Men's shoe"
          width={348}
          height={348}
          className="object-contain"
        />
      </div>
      <p className="text-[#9E3500] font-semibold mt-4">Just In</p>
      <p className="text-black font-semibold mt-2">Nike Dri-FIT Challenger</p>
      <p className="text-[#757575] font-semibold">Men's 18cm (approx.) 2-in-1 Versatile Shorts</p>
      <p className="text-[#757575] font-semibold mt-2">1 Colour</p>
      <p className="text-black font-semibold">MRP: ₹ 2 495.00</p>
    </div>
    <div className="w-full max-w-xs">
      <div className="bg-[#f5f5f5]">
        <Image
          src="/images/pimg26.png"
          alt="Men's shoe"
          width={348}
          height={348}
          className="object-contain"
        />
      </div>
      <p className="text-[#9E3500] font-semibold mt-4">Just In</p>
      <p className="text-black font-semibold mt-2">Jordan Series ES</p>
      <p className="text-[#757575] font-semibold">Men's Shoes</p>
      <p className="text-[#757575] font-semibold mt-2">2 Colours</p>
      <p className="text-black font-semibold">MRP: ₹ 7 495.00</p>
    </div>
    <div className="w-full max-w-xs">
      <div className="bg-[#f5f5f5]">
        <Image
          src="/images/pimg27.jpeg"
          alt="Men's shoe"
          width={348}
          height={348}
          className="object-contain"
        />
      </div>
      <p className="text-[#9E3500] font-semibold mt-4">Just In</p>
      <p className="text-black font-semibold mt-2">Nike Outdoor Play</p>
      <p className="text-[#757575] font-semibold">Older Kids' Oversized Woven Jacket</p>
      <p className="text-[#757575] font-semibold mt-2">1 Colour</p>
      <p className="text-black font-semibold">MRP: ₹ 3 895.00</p>
    </div>
    <div className="w-full max-w-xs">
      <div className="bg-[#f5f5f5]">
        <Image
          src="/images/pimg28.png"
          alt="Men's shoe"
          width={348}
          height={348}
          className="object-contain"
        />
      </div>
      <p className="text-[#9E3500] font-semibold mt-4">Just In</p>
      <p className="text-black font-semibold mt-2">Older Kids' Oversized Woven Jacket</p>
      <p className="text-[#757575] font-semibold">Older Kids' (Girls') High-waisted Woven Shorts</p>
      <p className="text-[#757575] font-semibold mt-2">2 Colours</p>
      <p className="text-black font-semibold">MRP: ₹ 2 495.00</p>
    </div>
    <div className="w-full max-w-xs">
      <div className="bg-[#f5f5f5]">
        <Image
          src="/images/pimg29.png"
          alt="Men's shoe"
          width={348}
          height={348}
          className="object-contain"
        />
      </div>
      <p className="text-[#9E3500] font-semibold mt-4">Just In</p>
      <p className="text-black font-semibold mt-2">Nike Blazer Low '77 Jumbo</p>
      <p className="text-[#757575] font-semibold">Women's Shoes</p>
      <p className="text-[#757575] font-semibold mt-2">1 Colour</p>
      <p className="text-black font-semibold">MRP: ₹ 8 595.00</p>
    </div>
    <div className="w-full max-w-xs">
      <div className="bg-[#f5f5f5]">
        <Image
          src="/images/pimg30.png"
          alt="Men's shoe"
          width={348}
          height={348}
          className="object-contain"
        />
      </div>
      <p className="text-[#9E3500] font-semibold mt-4">Just In</p>
      <p className="text-black font-semibold mt-2">Nike SB Force 58</p>
      <p className="text-[#757575] font-semibold">Skate Shoe</p>
      <p className="text-[#757575] font-semibold mt-2">1 Colour</p>
      <p className="text-black font-semibold">MRP: ₹ 5 995.00</p>
    </div>
  </div>
</section>

  <section className="my-10 mt-28">
  <h1 className="font-semibold text-xl text-center lg:text-left">
    Related Categories
  </h1>
  <div className="flex flex-wrap gap-2 mt-4">
    <Button className="bg-white text-black rounded-full border-[1px] shadow-none px-4 py-2">
      Best Selling Products
    </Button>
    <Button className="bg-white text-black rounded-full border-[1px] shadow-none px-4 py-2">
      Best Shoes
    </Button>
    <Button className="bg-white text-black rounded-full border-[1px] shadow-none px-4 py-2">
      New Basketball Shoes
    </Button>
    <Button className="bg-white text-black rounded-full border-[1px] shadow-none px-4 py-2">
      New Football Shoes
    </Button>
    <Button className="bg-white text-black rounded-full border-[1px] shadow-none px-4 py-2">
      New Men&apos;s Shoes
    </Button>
    <Button className="bg-white text-black rounded-full border-[1px] shadow-none px-4 py-2">
      New Running Shoes
    </Button>
    <Button className="bg-white text-black rounded-full border-[1px] shadow-none px-4 py-2">
      Best Men&apos;s Shoes
    </Button>
    <Button className="bg-white text-black rounded-full border-[1px] shadow-none px-4 py-2">
      New Jordan Shoes
    </Button>
    <Button className="bg-white text-black rounded-full border-[1px] shadow-none px-4 py-2">
      Best Women&apos;s Shoes
    </Button>
    <Button className="bg-white text-black rounded-full border-[1px] shadow-none px-4 py-2">
      Best Training & Gym
    </Button>
  </div>
</section>

</section>


</main>

  )}
