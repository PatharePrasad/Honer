function App(){
    return(
        <div className="container">
        <Card 
        imgLink="https://forumstatic.oneplusmobile.com/opforum-gl/upload/image/app/thread/20231112/4318020878898572541/1462181598320394244/1462181598320394244.jpeg"
        name="Lamborghini"
        description="This is cars webiste"
        btn= "click here for more info" />
        <Card 
        imgLink="https://img.freepik.com/premium-vector/full-body-toyota-fortuner-vector-illustration_969863-27284.jpg"
         name="Fortuner"
        description="This is cars webiste"
        btn= "click here for more info" />
        <Card 
        imgLink="https://img.freepik.com/premium-vector/full-body-land-rover-range-rover-evoque-4k-high-quality-vector-illustration_969863-22034.jpg"
         name="Range Rover"
        description="This is cars webiste"
        btn= "click here for more info" />
        <Card 
        imgLink="https://img.freepik.com/premium-vector/vector-bugatti-chiron-cartoon-vector-icon-illustration-icon-isolated-flat-vector-logo-design_1241361-293.jpg?semt=ais_hybrid"
        name="Bugatti Chiron"
        description="This is cars webiste"
        btn= "click here for more info" />
        <Card 
        imgLink="https://i.pinimg.com/1200x/19/95/fd/1995fdb4d875cdfce34aadd0257fe876.jpg"
        name="BMW"
        description="This is cars webiste"
        btn= "click here for more info" />
        <Card 
        imgLink="https://forumstatic.oneplusmobile.com/opforum-gl/upload/image/app/thread/20231112/4318020878898572541/1462181598320394244/1462181598320394244.jpeg"
        name="hello"
        description="This is cars webiste"
        btn= "click here for more info" />
        <Card 
        imgLink="https://forumstatic.oneplusmobile.com/opforum-gl/upload/image/app/thread/20231112/4318020878898572541/1462181598320394244/1462181598320394244.jpeg"
        name="hello"
        description="This is cars webiste"
        btn= "click here for more info" />
        <Card 
        imgLink="https://forumstatic.oneplusmobile.com/opforum-gl/upload/image/app/thread/20231112/4318020878898572541/1462181598320394244/1462181598320394244.jpeg"
        name="hello"
        description="This is cars webiste"
        btn= "click here for more info" />
        <Card description="hey there" action={()=> console.log("WOW")} />
        </div>
    )
}

import Card from "./Card";
export default App;