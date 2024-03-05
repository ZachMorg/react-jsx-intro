const Tweet = function(tweet){
    return(
        <div className = "tweet">
            <h4>{tweet.username}</h4>
            <h5>{tweet.name}</h5>
            <h5>{tweet.date}</h5>
            <p>{tweet.message}</p>
        </div>
    );
}