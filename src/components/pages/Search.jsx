import firestore from "../../database/firebase";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Search = (params) => {
  const [text, setText] = useState(params.match.params.searchText);
  const [event, setEvent] = useState([]);
  const [filtEvent, setFilt] = useState([]);
  const [isLoad, setLoad] = useState(false);
  const searchText = params.match.params.searchText;

  function fetchEvent() {
    console.log("fetching");
    firestore
      .collection("events")
      .orderBy("dateCreated", "desc")
      .onSnapshot((querySnapshot) => {
        const events = querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setEvent(events);
        setLoad(true);
      });
  }

  useEffect(() => {
    fetchEvent();
    resetAndFind(text);
  }, [isLoad]);
  useEffect(() => {
    setText(searchText);
    resetAndFind(searchText);
  }, [searchText]);

  function resetAndFind(text) {
    console.log("run reset and find", text);
    setFilt([]);
    var pattern = text.toLowerCase();
    var wordList = text.split(" ");
    
    const checkTag = (tags, wordList)=>{
      for(var i=0;i<wordList.length;i++){
        if(tags.includes(wordList[i])){
          return true;
        }
      }
      return false;
    }
    event.forEach((doc) => {
      var title = doc.title.toLowerCase();
      var desc = doc.description.toLowerCase();
      var tags = doc.tags;
      if (title.includes(pattern) || desc.includes(pattern) || checkTag(tags,wordList))
        setFilt((filtEvent) => [...filtEvent, doc]);
    });
  }

  function handleChange(e) {
    setText(e.target.value);
    e.preventDefault();
  }
  function handleClick(e) {
    resetAndFind(text);
    e.preventDefault();
  }
  return (
    <div className="App-skeleton-ground">
      <div className="App-skeleton-bg">
        <form className="search-section" onSubmit={handleClick}>
          <label>
            <h2>Search</h2>
            <input
              type="text"
              onChange={handleChange}
              placeholder="Enter search value"
              value={text}
            />
          </label>
          <input type="submit" value="Find" />
        </form>
        <div className="event">
          <h2>Result:</h2>
          {filtEvent.length ? (
            filtEvent.map((events) => (
              <div className="events" key={events.id}>
                <Link to={`/events/${events.id}`}>
                  <h3>{events.title}</h3>
                </Link>
                <p>{events["description"]}</p>
              </div>
            ))
          ) : (
            <div>We didn't find any results.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
