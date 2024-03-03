import image from "../../assets/image-3.jpg";
export default function Content2() {
  return (
    <div className="w-full  h-screen sticky top-0 z-[-1] ">
      <img
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
}
 