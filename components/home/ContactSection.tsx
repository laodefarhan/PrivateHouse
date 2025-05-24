"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Process form submission here
    console.log('Contact form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
    // Show success message or redirect
  };

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            Hubungi <span className="text-blue-600">Kami</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Kami siap membantu Anda menemukan rumah impian. Jangan ragu untuk menghubungi kami untuk informasi lebih lanjut.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Kirim Pesan
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-gray-700">Nama Lengkap</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Masukkan nama Anda"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-gray-700">Nomor Telepon</Label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="Contoh: 08123456789"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="email" className="text-gray-700">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-gray-700">Pesan</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tuliskan kebutuhan properti Anda"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="mt-1"
                />
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Kirim Pesan
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <div className="bg-blue-600 p-8 rounded-lg shadow-lg text-white mb-8">
              <h3 className="text-2xl font-semibold mb-6">
                Informasi Kontak
              </h3>
              <ul className="space-y-6">
                <li className="flex">
                  <MapPin className="h-6 w-6 text-yellow-400 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Alamat</h4>
                    <p className="text-blue-100">
                      Perumahan Pantai Tanjung Gunung, RT. 11, Prov. Bangka Belitung,
                      Kec. Pangkalanbaru, Kab. Bangka Tengah
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <Phone className="h-6 w-6 text-yellow-400 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Telepon</h4>
                    <p className="text-blue-100">+62 821 2565 2157</p>
                  </div>
                </li>
                <li className="flex">
                  <Phone className="h-6 w-6 text-yellow-400 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Telepon</h4>
                    <p className="text-blue-100">+62 897 4159 938</p>
                  </div>
                </li>
                <li className="flex">
                  <Mail className="h-6 w-6 text-yellow-400 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-blue-100">fiklaodefarhanfadilah@gmail.com</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-yellow-500 p-8 rounded-lg shadow-lg text-white">
              <h3 className="text-xl font-semibold mb-4">
                Butuh Konsultasi Cepat?
              </h3>
              <p className="mb-6">
                Kami siap membantu Anda dengan pertanyaan seputar properti dan kebutuhan Anda.
              </p>
              <Button className="bg-white text-yellow-600 hover:bg-gray-100">
                <Phone className="mr-2 h-4 w-4" />
                Hubungi Sekarang
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;