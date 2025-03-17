import Typewriter from 'typewriter-effect';
import profile from '/images/Profile.jpg'
export const HeroProfile = () => {
    return (
        <div className="w-full mt-16 h-[calc(100vh-6rem)] bg-[#0F0F0F]  rounded-4xl py-5 md:px-20" id='#About'>
            <div className="flex text-gray-400 font-secondary items-center h-full gap-2">
                <div className="flex flex-col text-4xl w-[60%] h-1/2 justify-start">
                    <span className="text-6xl">Hi, I'm</span>
                    <span className='text-6xl text-white'> Einar Gatchlian</span>
                    <span className='ml-1'>
                        <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .typeString("a")
                                .typeString('<span style="color: white;"> Software Engineer.</span>')
                                .pauseFor(1000)
                                .deleteChars(18)
                                .typeString('<span style="color: white;"> Student and Teacher.</span>')
                                .pauseFor(1000)
                                .deleteChars(20)
                                .typeString(' <span style="color: white;"> Researcher.</span>')
                                .pauseFor(1000)
                                .start();
                            }}
                            options={{
                                loop: true,
                            }}
                        />
                    </span>
                </div>
                <div className="w-[40%] aspect-square rounded-full bg-white overflow-hidden border-4 border-[#F6BD60] shadow-lg">
                    <img 
                    src={profile} 
                    alt="" 
                    className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    )
}