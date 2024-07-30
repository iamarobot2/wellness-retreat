import logo from "../assets/logo.png";

export default function Header() {
  return (
    <>
      <header className=" h-24 w-full flex flex-row justify-center items-center gap-4 px-2">
        <img src={logo} alt="wellness retreat logo" className="lg:w-14 w-12" />
        <h1 className=" lg:text-4xl md:text-3xl text-2xl font-satoshi font-light">
          Wellness Retreats
        </h1>
      </header>
    </>
  );
}
