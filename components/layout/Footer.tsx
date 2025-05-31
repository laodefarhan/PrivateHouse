import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Instagram, WhastApp } from '../icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Private<span className="text-yellow-500">House</span>
            </h3>
            <p className="mb-4 text-blue-100">
              Kami membantu Anda menemukan rumah impian dengan layanan profesional dan
              terpercaya sejak 2025.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-blue-700 pb-2">
              Tautan Cepat
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="#beranda" className="text-blue-100 hover:text-yellow-400 transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="#properties" className="text-blue-100 hover:text-yellow-400 transition-colors">
                  Properti
                </Link>
              </li>
              <li>
                <Link href="#information" className="text-blue-100 hover:text-yellow-400 transition-colors">
                  Informasi
                </Link>
              </li>
              <li>
                <Link href="#about-us" className="text-blue-100 hover:text-yellow-400 transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-blue-100 hover:text-yellow-400 transition-colors">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-blue-700 pb-2">
              Layanan Kami
            </h4>
            <ul className="space-y-2">
              <li className="text-blue-100">Penjualan Rumah</li>
              <li className="text-blue-100">Konsultasi Properti</li>
              <li className="text-blue-100">Penilaian Properti</li>
              <li className="text-blue-100">Pengurusan Dokumen</li>
              <li className="text-blue-100">Survei Lokasi</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-blue-700 pb-2">
              Kontak Kami
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-yellow-500 mt-1" />
                <span className="text-blue-100">
                  Perumahan Pantai Tanjung Gunung, RT. 11, Prov. Bangka Belitung,
                  Kec. Pangkalanbaru, Kab. Bangka Tengah
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-yellow-500" />
                <span className="text-blue-100">+62 821 2565 2157</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-yellow-500" />
                <span className="text-blue-100">+62 897 4159 938</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-yellow-500" />
                <span className="text-blue-100">fiklaodefarhanfadilah@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-10 pt-6 text-center text-blue-200">
          <p>&copy; {currentYear} PrivateHouse. Website Created by Laode F. Fadilah</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;