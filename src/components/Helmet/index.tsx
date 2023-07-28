interface HelmetProps {
  title?: string;
  children?: React.ReactNode;
}
const Helmet = ({ title, children }: HelmetProps) => {
  document.title = "EShop" + (title ? ` - ${title}` : "");
  return <>{children}</>;
};

export default Helmet;
