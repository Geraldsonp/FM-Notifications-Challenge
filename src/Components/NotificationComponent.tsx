import React from "react";

import { INotification } from "../Models/Notification";

interface componentProps {
  Item: INotification;
}

export default function NotificationComponent({ Item }: componentProps) {
  let { Post, FriendName, ProfileImg, Action, Group, TimeStamp, Message, picture, New } = Item;
  return (
    <div className={"content " + (New ? " new-bg" : "")}>
      <img src={ProfileImg} alt='' />
      <div>
        <p>
          <strong className='cursor-pointer hover-blue'>{FriendName}</strong>
          {Action}
          {Post ? <strong className='post-n cursor-pointer hover-blue'>{Post}</strong> : null}
          {Group ? <strong className='group-n cursor-pointer hover-blue'>{Group}</strong> : null}
          {New ? <span className='dot'>&#9679;</span> : null}
        </p>

        <p className='time-stamp'>{TimeStamp}</p>
        {Message ? <p className='message-n cursor-pointer'>{Message}</p> : null}
      </div>
      {Image ? <img className='picture-n cursor-pointer' src={picture}></img> : null}
    </div>
  );
}
