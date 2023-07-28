import { Icon } from "@iconify/react";

interface ServiceProps {
  icon: string;
  title: string;
  subtitle: string;
}

const Service = ({ icon, title, subtitle }: ServiceProps) => {
  return (
    <div className="flex bg-orange-200/30 p-2 rounded-lg">
      <div className="w-20 flex items-center justify-center pr-2">
        <span className="flex items-center justify-center w-10 h-10 bg-green-8 text-white text-3xl rounded-full ">
          <Icon icon={icon} />
        </span>
      </div>
      <div>
        <h3 className="font-bold">{title}</h3>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default Service;
