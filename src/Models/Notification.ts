import angela from "../assets/images/avatar-angela-gray.webp";
import mark from "../assets/images/avatar-mark-webber.webp";
import Jacob from "../assets/images/avatar-jacob-Thompson.webp";
import Rizky from "../assets/images/avatar-rizky-hasanuddin.webp";
import Kimberly from "../assets/images/avatar-kimberly-smith.webp";
import chess from "../assets/images/image-chess.webp";
import Nathan from "../assets/images/avatar-nathan-peterson.webp";
import Anna from "../assets/images/avatar-anna-kim.webp";

export const Notifications: INotification[] = [
  {
    ProfileImg: mark,
    New: true,
    FriendName: "Mark Webber",
    Action: "reacted to your recent post",
    Post: "My first tournament today!",
    TimeStamp: "1m ago",
  },
  {
    ProfileImg: angela,
    New: true,
    FriendName: "Angela Gray",
    Action: "followed you",
    TimeStamp: "5m ago",
  },
  {
    ProfileImg: Jacob,
    New: true,
    FriendName: "Jacob Thompson",
    Action: "has joined your group",
    Group: "Chess Club",
    TimeStamp: "1 day ago",
  },
  {
    ProfileImg: Rizky,
    New: false,
    FriendName: "Rizky Hasanuddin",
    Action: "sent you a private message",
    TimeStamp: "5 days ago",
    Message:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
  },
  {
    ProfileImg: Kimberly,
    FriendName: "Kimberly Smith",
    Action: "commented on your picture",
    TimeStamp: "1 week ago",
    picture: chess,
    New: false,
  },
  {
    ProfileImg: Nathan,
    FriendName: "Nathan Peterson",
    Action: "reacted to your recent post",
    Post: "5 end-game strategies to increase your win rate",
    TimeStamp: "2 weeks ago",
    New: false,
  },
  {
    ProfileImg: Anna,
    FriendName: "Anna Kim",
    Action: "left the group",
    Group: "Chess Club",
    TimeStamp: "2 weeks ago",
    New: false,
  },
];

export interface INotification {
  Post?: string;
  FriendName: string;
  ProfileImg: string;
  Action: string;
  TimeStamp: string;
  Message?: string;
  picture?: string;
  Group?: string;
  New: boolean;
}
