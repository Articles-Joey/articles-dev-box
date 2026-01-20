import ReturnToLauncherButton from '#root/src/components/Games/ReturnToLauncherButton.jsx';
import ArticlesAd from '#root/src/components/Ads/ArticlesAd.jsx';
import Ad from '#root/src/components/Ads/Ad.jsx';
import GameScoreboard from '#root/src/components/Games/GameScoreboard.jsx';
import GlobalHead from '#root/src/components/Global/GlobalHead.jsx';
import GlobalBody from '#root/src/components/Global/GlobalBody.jsx';
import ViewUserModal from '#root/src/components/UI/ViewUserModal/ViewUserModal.jsx';

import FriendsList from '#root/src/components/Friends/FriendsList.jsx';

import useUserDetails from '#root/src/hooks/User/useUserDetails';
import useUserToken from '#root/src/hooks/User/useUserToken';

// Button and switch not exported from index.js to reduce bundle size?
// import ArticlesButton from '#root/src/components/UI/Button';
// import ArticlesSwitch from '#root/src/components/UI/ArticlesSwitch';

// function helloWorld() {
//   return "Hello, world!";
// }



export {
  // helloWorld,
  ReturnToLauncherButton,
  ArticlesAd,
  Ad,
  GameScoreboard,
  GlobalHead,
  GlobalBody,
  ViewUserModal,

  FriendsList,

  useUserDetails,
  useUserToken,
};