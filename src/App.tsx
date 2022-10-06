import { useState, useEffect } from "react";
import "./App.css";
import { Notifications } from "./Models/Notification";
import NotificationComponent from "./Components/NotificationComponent";

function App() {
  const [notifications, setNotification] = useState(Notifications);

  var state = [...notifications];

  const handleMarkAllRead = () => {
    state.forEach(x => (x.New = false));
    setNotification(state);
    console.log("this fires");
  };

  return (
    <div className='container-grid'>
      <div className='header-menu'>
        <div className='not-div'>
          <h2>Notifications</h2>
          <span className='count-badge'>{notifications.filter(x => x.New == true).length}</span>
        </div>
        <a className='hover-blue' onClick={handleMarkAllRead}>
          Mark all as read
        </a>
      </div>
      <div className='cards-contaner'>
        {notifications.map(n => (
          <NotificationComponent Item={n} key={n.FriendName}></NotificationComponent>
        ))}
      </div>
    </div>
  );
}

export default App;
