import CardSwap, { Card } from '../components/CardSwap';

const Points = [
  {
    id: "0",
    title: "Innovative Solutions",
    text: "We strive to develop cutting-edge technologies that address real-world challenges, enhancing the quality of life for individuals and communities.",
    imageUrl: "https://images.unsplash.com/photo-1732112622699-fd32f6e7b19e?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    light: true,
  },
  {
    id: "1",
    title: "User-Centric Design",
    text: "Our products are designed with the user in mind, ensuring that technology is accessible, intuitive, and enhances everyday experiences.",
    imageUrl: "https://images.unsplash.com/photo-1496115965489-21be7e6e59a0?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "2",
    title: "Sustainability",
    text: "We are committed to sustainable and responsible practices, ensuring that our innovations contribute positively to both the environment and society.",
    imageUrl: "https://images.unsplash.com/photo-1527525443983-6e60c75fff46?q=80&w=1285&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    light: true,
  },
];

const Pointssection = () => {
  return (
    <div className="relative h-[600px] w-full">
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
              backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${point.imageUrl})`,
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
  );
};

export default Pointssection;