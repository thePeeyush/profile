

export default function Home() {
  return (
    <>
        <Image
      src='/bubble.gif'
      alt="bg"
      width={300}
      height={300}
      className="absolute top-0 right-[15%] rounded-lg m-5 -z-40"
    />
    <Ribbon/>
    <Cursor/>
      <div className="md:flex flex-col justify-between w-screen min-h-screen ">
      
      <Header/>
      <Sample/>
      <Base/> 
      </div>
      <div>
        <Intro/>
        <Skills/>
        <Projects/>
        <Footer/>
      </div>
    </>
  )
}
