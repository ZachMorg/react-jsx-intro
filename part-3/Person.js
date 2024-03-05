const Person = function(person){
    let name;
    if(person.name.length > 8){
        name = person.name.substring(0,6);
    }
    else{
        name = person.name;
    }

    let hobbyList = [];
    for(let hobby of person.hobbies){
        hobbyList.push(<li>{hobby}</li>);
    }
    return(
        <div>
            <br></br>
            <p>Learn some information about this person</p>
            <h3>Name: {name}</h3>
            <h5>Age: {person.age}</h5>
            <h3>{person.age >= 18 ? 'please go vote!' : 'you must be 18'}</h3>
            <ul className="hobbyList">{hobbyList}</ul>
            <br></br>
        </div>
    );
}