function PetInfo(props){
    const {animal, age, hasPet} = props
    const petText = hasPet 
    ? `${animal} is ${age} years old` 
    : 'I dont have an animal';

    return(
    
        <h1>
            {petText}
        </h1>
    )
}

export default PetInfo;