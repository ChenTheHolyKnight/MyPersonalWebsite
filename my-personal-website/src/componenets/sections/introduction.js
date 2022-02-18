import Header from "../header";

const Introduciton = () =>{
    return (
        <div>
            <Header name={"Introduction"}/>
            <p className="w-3/4 mt-6 text-lg">
            I am a Software Engineer in ASB. I am self-motivated and hardworking, seeking for an opportunity 
to work in a challenging environment to improve my skills and utilize my knowledge and
intelligence in the growth of the organization.
            </p>

            <h2 className="text-4xl mt-12">Education</h2>
            <p className="text-2xl font-semibold mt-4">The University of Auckland (March 2016 - November 2019)</p>
            <p className="mt-2 text-lg">Bachelor of Software Engineering</p>
            <p className="text-lg">First Class Honours</p>
            <p className="mt-4 text-lg">See Transcript</p>

            <h2 className="text-4xl mt-12">License and certifications</h2>
            <p className="mt-4 text-lg">Microsoft Certified: Azure Fundamentals az-900</p>
            <p className="text-lg">Microsoft</p>
            <p className="text-lg">Issued Jul 2021</p>
            <p className="mt-4 text-lg">See Credential</p>
        </div>
    );
}

export default Introduciton;
