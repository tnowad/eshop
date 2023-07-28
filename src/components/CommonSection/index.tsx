import banner from "../../assets/banner.webp";
interface CommonSectionProps {
  title?: string;
  imageUrl?: string;
}
const CommonSection = ({ title, imageUrl = banner }: CommonSectionProps) => {
  return (
    <section className="relative">
      <div className="absolute w-full h-full flex items-center justify-center">
        <p className="text-white font-bold text-3xl lg:text-6xl">{title}</p>
      </div>
      <div className="overflow-hidden h-50">
        <img
          src={imageUrl}
          alt="section image"
          className="min-h-50 object-cover"
        />
      </div>
    </section>
  );
};

export default CommonSection;
