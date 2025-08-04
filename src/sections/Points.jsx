import CardSwap, { Card } from '../components/CardSwap';
import innovativeSolutions from '../assets/images/innovative_solutions.jpg';
import userCentricDesign from '../assets/images/user_centric_design.jpg';
import sustainability from '../assets/images/sustainability.webp';

const Points = [
  {
    id: "0",
    title: "Innovative Solutions",
    text: "We strive to develop cutting-edge technologies that address real-world challenges, enhancing the quality of life for individuals and communities.",
    imageUrl: innovativeSolutions,
    light: true,
  },
  {
    id: "1",
    title: "User-Centric Design",
    text: "Our products are designed with the user in mind, ensuring that technology is accessible, intuitive, and enhances everyday experiences.",
    imageUrl: userCentricDesign,
  },
  {
    id: "2",
    title: "Sustainability",
    text: "We are committed to sustainable and responsible practices, ensuring that our innovations contribute positively to both the environment and society.",
    imageUrl: sustainability,
    light: true,
  },
];

const Pointssection = () => {
  return (
    <div className="relative w-full">
      {/* Mobile view - Simple stacked boxes */}
      <div className="block lg:hidden space-y-4">
        {Points.map((point) => (
          <div
            key={point.id}
            style={{ 
              backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${point.imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            className="flex flex-col justify-center items-center text-center p-6 h-48 rounded-lg"
          >
            <h3 className="text-xl font-bold mb-3 text-white">{point.title}</h3>
            <p className="text-sm text-white">{point.text}</p>
          </div>
        ))}
      </div>

      {/* Desktop view - CardSwap component */}
      <div className="hidden lg:block h-[400px] sm:h-[500px] md:h-[600px] w-full flex items-center">
        <CardSwap
          cardDistance={60}
          verticalDistance={70}
          delay={5000}
          pauseOnHover={false}
        >
          {Points.map((point) => (
            <Card
              key={point.id}
              style={{ 
                backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${point.imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              className="flex flex-col justify-center items-center text-center p-8"
            >
              <h3 className="text-2xl font-bold mb-4 text-white">{point.title}</h3>
              <p className="text-lg text-white">{point.text}</p>
            </Card>
          ))}
        </CardSwap>
      </div>
    </div>
  );
};

export default Pointssection;