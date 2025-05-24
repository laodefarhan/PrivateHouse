import { HomeAlt, ManWoman, Dollar } from '@/components/icons';

const Information = () => {
  const information = [
    {
      icon: <HomeAlt className="h-10 w-10 text-blue-600" />,
      title: '387 m²',
      description: 'Luas keseluruhan bangunan dan tanah.',
    },
    {
      icon: <ManWoman className="h-10 w-10 text-blue-600" />,
      title: '6 orang',
      description: 'Kapasitas hunian yang dapat ditempati.',
    },
    {
      icon: <Dollar className="h-10 w-10 text-blue-600" />,
      title: '± Rp 80 Juta',
      description: 'Harga estimasi yang ditawarkan.',
    },
  ];

  return (
    <section id="information" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            Informasi Mengenai <span className="text-blue-600">Private</span>
            <span className="text-yellow-500">House</span>?
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Berikut adalah informasi mengenai rumah yang tersedia, mencakup luas bangunan,
            kapasitas hunian, serta harga yang ditawarkan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {information.map((information, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:transform hover:scale-105"
            >
              <div className="flex justify-center mb-4">
                {information.icon}
              </div>
              <h3 className="text-xl font-semibold text-center mb-3 text-gray-800">
                {information.title}
              </h3>
              <p className="text-gray-600 text-center">
                {information.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Information;