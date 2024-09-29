import Link from 'next/link'
import { Mail, Send } from 'lucide-react'

const Footer = () => {
  return (
    <footer className=" text-gray-400 py-4 px-6  border-t">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-2 justify-between">
        <div className="flex items-center mb-4 md:mb-0 mx-4">
          <h2 className="text-2xl font-bold text-white mr-4">FIGHTCLUB</h2>
          <div className="flex space-x-4">
            <Link href="#" aria-label="Twitter" className="hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Link>
            <Link href="#" aria-label="Telegram" className="hover:text-white">
              <Send className="w-5 h-5" />
            </Link>
            <Link href="#" aria-label="Email" className="hover:text-white">
              <Mail className="w-5 h-5"/>
            </Link>
          </div>
        </div>
        <div className="text-xs max-w-2xl text-center md:text-left">
          <p>
            Please review this legal disclaimer carefully. Seek professional advice for any doubt. The information provided is not exhaustive and doesn't constitute part of a contractual agreement. While we strive for accuracy, the information, services, and timelines are subject to change without notice. This disclaimer doesn't obligate anyone to enter a contract or binding commitment. By using this information, you acknowledge that it doesn't contravene applicable laws, regulatory requirements, or regulations. Cryptocurrency may be unregulated in your jurisdiction. The value of cryptocurrencies may fluctuate. Profits may be subject to capital gains or other taxes applicable in your jurisdiction.
            <span className="mt-2 text-xm font-bold">© Fight Club. All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer