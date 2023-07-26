import { Tweet, Timeline, Share, Follow, Hashtag} from 'react-twitter-widgets'
import './App.css';

function App() {
  return (
    <div>
      <Tweet options={{align: "center"}} tweetId='1516801882190381056'/>
      <Share url = 'https://www.google.com' option = {{text: "Share"}} />
      <Follow username='Naval' />
      <Hashtag hashtag='{SpaceX}' />

  <Timeline
  dataSource={{
    sourceType: 'profile',
    screenName: 'elon',
  }}
  options={{
    align: 'center',
    theme: 'dark',
    width: '70%',
  }}
/>
    </div>
  );
}

export default App;