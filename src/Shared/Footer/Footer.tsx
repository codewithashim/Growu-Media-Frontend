 
import Button from "@/src/Components/Buttons/Button"
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Have a project in mind? <br/> Let us work together </h2>
          
            <Button className="bg-black text-white hover:bg-gray-800">Book an Intro Call</Button>
            <div className="flex space-x-4">
              <Link href="#" aria-label="LinkedIn"><Linkedin className="w-6 h-6" /></Link>
              <Link href="#" aria-label="Twitter"><Twitter className="w-6 h-6" /></Link>
              <Link href="#" aria-label="Instagram"><Instagram className="w-6 h-6" /></Link>
              <Link href="#" aria-label="Facebook"><Facebook className="w-6 h-6" /></Link>
              <Link href="#" aria-label="YouTube"><Youtube className="w-6 h-6" /></Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link href="#">About</Link></li>
              <li><Link href="#">About us</Link></li>
              <li><Link href="#">What We Do</Link></li>
              <li><Link href="#">To The Power of 10</Link></li>
              <li><Link href="#">Donate</Link></li>
              <li><Link href="#">Community</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="#">Help centre</Link></li>
              <li><Link href="#">FAQ</Link></li>
              <li><Link href="#">Contact</Link></li>
              <li><Link href="#">Status</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="#">General info</Link></li>
              <li><Link href="#">Privacy Policy</Link></li>
              <li><Link href="#">Terms of Use</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 space-y-4">
          {/* <div className="flex flex-wrap justify-between text-4xl font-light text-gray-300">
            <span>Public</span>
            <span>Thumbnail</span>
            <span>Video Edit</span>
            <span>Podcast</span>
            <span>TV</span>
          </div> */}
          <div className="text-center my-2 text-gray-500">
            © 2024 Growunmedia. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}