"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Home, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="beranda" className="relative min-h-screen flex items-center pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg"
          alt="Luxury home"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-900/40" />
      </div>

      <div className="container mx-auto px-4 z-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Hero Text */}
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Temukan Rumah Impian Anda Bersama Kami
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Kami membantu Anda menemukan rumah yang sesuai dengan kebutuhan dan impian Anda dengan layanan profesional.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium">
                <Home className="mr-2 h-5 w-5" />
                Lihat Properti
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                <Phone className="mr-2 h-5 w-5" />
                Hubungi Kami
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;