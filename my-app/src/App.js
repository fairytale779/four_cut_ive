import "./App.css";
import Upload from "./Upload";

function App({ onChange }) {
  let today = new Date();

  let year = today.getFullYear();
  let month = ("0" + (today.getMonth() + 1)).slice(-2);
  let day = ("0" + today.getDate()).slice(-2);
  let dateString = year + "-" + month + "-" + day;
  console.log(`today:`, today);
  console.log(`year:`, year);
  console.log(`month:`, month);
  console.log(`day:`, day);

  return (
    <>
      <div className="App">
        <div className="container">
          <div className="photos">
            <Upload onChange={onChange} />
            <Upload onChange={onChange} />
            <Upload onChange={onChange} />
            <Upload onChange={onChange} />
          </div>
          <div className="footer">
            <p className="f-title">
              <img
                className="bottom_pic"
                src={process.env.PUBLIC_URL + "wonyeong.png"}
                alt="원영"
              />
            </p>
            <p className="f-date">{dateString}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
