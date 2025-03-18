import Typewriter from 'typewriter-effect';
import profile from '/images/Profile.jpg'
export const HeroProfile = () => {
    return (
        <div className="w-full md:mt-16 bg-[#0F0F0F] pt-20 md:pt-0 md:rounded-4xl py-10 px-5 md:px-20" id='#About'>
            <div className="flex flex-col md:flex-row text-gray-400 items-center h-full gap-2 space-y-2 ">
                <div className="flex flex-col w-[60%] h-1/2 md:justify-start">
                    <span className="text-gray-400">Hi, I'm</span>
                    <span className='text-white'> Einar Gatchlian</span>
                    <span className='ml-1 text-3xl md:text-4xl'>
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
                <div className="h-1/2 aspect-square rounded-full bg-white overflow-hidden border-4 border-[#F6BD60] shadow-lg">
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