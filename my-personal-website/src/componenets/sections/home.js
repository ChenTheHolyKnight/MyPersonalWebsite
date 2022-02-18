import profilePhoto from '../../profile.jpg'

const Home = () =>{
    return (<div class="grid grid-rows-3 grid-flow-col mr-20">
            <div class="row-start-2 row-end-2">  
                <div class="grid grid-col-5 gap-4">
                    <div class="col-start-3 col-end-3">
                        <div class="h-60 w-60 float-right mr-5">
                            <img class="object-cover rounded-full" src={profilePhoto} alt="ProfilePhoto"></img>
                        </div>  
                    </div>
                    <div class="col-start-4 col-end-5">
                        <h1 class="text-center text-8xl font-medium mt-3">Chen Zhao</h1>
                        <h1 class="text-center text-5xl font-medium mt-10">Software Enginer at ASB</h1> 
                    </div>
                </div>
                  
                
            </div>
        </div>
    )
}

export default Home;