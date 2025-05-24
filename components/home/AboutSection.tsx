import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about-us" className="py-20 bg-gradient-to-r from-blue-700 to-blue-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-yellow-500 opacity-10"></div>
        <div className="absolute top-1/2 -right-24 w-80 h-80 rounded-full bg-blue-400 opacity-10"></div>
        <div className="absolute -bottom-20 left-1/4 w-72 h-72 rounded-full bg-white opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Kami Menawarkan Hunian Berkualitas untuk Kenyamanan Anda.
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Selamat datang di situs resmi penjualan rumah pribadi kami yang berlokasi di
            Perumahan Pantai Tanjung Gunung, RT 11, Kecamatan Pangkalanbaru, Kabupaten Bangka Tengah,
            Provinsi Bangka Belitung. Kami menawarkan hunian eksklusif dengan lingkungan asri, strategis,
            dan dekat dengan pesisir pantai yang indah. Setiap rumah dirancang untuk menghadirkan kenyamanan,
            keamanan, dan kemudahan akses, didukung proses pembelian yang transparan serta layanan profesional.
            Temukan rumah impian Anda bersama kami dan jadikan Perumahan Pantai Tanjung Gunung sebagai pilihan
            hunian ideal bagi Anda dan keluarga.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white">
              Lihat Properti
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Hubungi Kami
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;