import Header from "../header";

const ExperiencePage = () =>{
    return(<div>
        <Header name={"Experience"}></Header>
        <h2 className="text-2xl mt-10">Software Engineer, ASB</h2>
        <h2 className="text-2xl">(FEBURARY 2020 - CURRENT)</h2>
        <p className="text-lg w-3/4 mt-4">
        Design and developed features on a wide range of projects, from legacy applications using .net 461 framework, to containerized Kafka consumers using event-driven architecture, to React website with Redux setup. 
        </p>

        <h2 className="text-2xl mt-10">PART-TIME RESEARCH ASSISTANT, UNIVERSITY OF AUCKLAND</h2>
        <h2 className="text-2xl">(NOVEMBER 2019 – FEBURARY 2020)</h2>
        <p className="text-lg w-3/4 mt-4">
        Built an Android mobile application in Xamarin that helps a master student taking surveys and 
send survey data to a MongoDB database through a .net core API.
        </p>

        <h2 className="text-2xl mt-10">MOBILE APPLICATION DEVELOPER, VERIFY UNION</h2>
        <h2 className="text-2xl">(NOVEMBER 2018 – FEBRUARY 2019)</h2>
        <p className="text-lg w-3/4 mt-4">
        Built and published an Android and IOS application in Xamarin, involving Google Maps and Firebase Cloud Messaging services.
        </p>

        <h2 className="text-2xl mt-10">RESEARCH ASSISTANT, UNIVERSITY OF AUCKLAND</h2>
        <h2 className="text-2xl">(MAY 2018 – OCTOBER 2018)</h2>
        <p className="text-lg w-3/4 mt-4">
        Built an application involving machine learning methods in MATLAB to process and analyse CT scan images.
        </p>

        <h2 className="text-2xl mt-10">GAME DEVELOPER, REDFOX GAME STUDIO </h2>
        <h2 className="text-2xl">(DECEMBER 2017 – FEBRUARY 2018)</h2>
        <p className="text-lg w-3/4 mt-4">
        Designed, developed and tested a 2D Unity game in C# within a team environment.
        </p>
    </div>)
}

export default ExperiencePage;