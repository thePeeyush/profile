const Sample = () => {

  const wrap = () => {
    document.querySelectorAll(".textref").forEach((e) => {
      e.classList.add("wrap");
      e.classList.remove("unwrap");
      console.log(e);
    });
  };

  const unwrap = () => {
    document.querySelectorAll(".textref").forEach((e) => {
      e.classList.add("unwrap");
      e.classList.remove("wrap");
      console.log(e);
    });
  };

  return (
   <div className="p-8">
    <div
        onMouseEnter={wrap}
        onMouseLeave={unwrap}
        className="text-[2.5rem] h-[5rem] -rotate-90 -translate-x-20 md:translate-x-20 md:rotate-0 md:text-[6rem] md:h-[12rem] lg:text-[8rem] lg:h-[16rem]  xl:text-[10rem] xl:h-[20rem] leading-none overflow-hidden mt-10 "
      >
        <div className=" max-h-[50%] overflow-hidden">
          <h1 className=" unwrap  textref  savo-reg">tech</h1>
          <h1 className="unwrap   textref savo-out">the</h1>
        </div>
        <div className=" max-h-[50%] overflow-hidden">
          <h1 className=" unwrap textref savo-out">Person</h1>
          <h1 className="unwrap  textref savo-reg">Peeyush</h1>
        </div>
      </div>
   </div>
  );
};

export default Sample;
