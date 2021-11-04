// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'Cole',
  imageBackground: false,
  openInNewTab: true,
  twelveHourFormat: true,

  // Greetings
  greetingMorning: '☀️ Hello,',
  greetingAfternoon: '🕒 Good afternoon,',
  greetingEvening: '🌙 Good evening,',
  greetingNight: '💤 Good Night,',

  // Weather
  weatherKey: 'd086ffc6bf6c0917f8370af845d25523',
  weatherIcons: 'OneDark', // 'Nord', 'Dark', 'White'
  weatherUnit: 'C', // 'F', 'C'
  language: 'en', // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: '52.059311',
  defaultLongitude: '1.155670',

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'DuckDuckGo',
      icon: 'search',
      link: 'https://duckduckgo.com/',
    },
    {
      id: '2',
      name: 'YouTube',
      icon: 'youtube-play',
      link: 'https://youtube.com/',
    },
    {
      id: '3',
      name: 'GitHub',
      icon: 'github',
      link: 'https://github.com/aw1cks',
    },
    {
      id: '4',
      name: 'GitLab',
      icon: 'gitlab',
      link: 'https://courses.maine.edu',
    },
    {
      id: '5',
      name: 'Reddit',
      icon: 'reddit',
      link: 'https://reddit.com',
    },
    {
      id: '6',
      name: 'Phoronix',
      icon: 'linux',
      link: 'https://phoronix.com/',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'newspaper',
  secondListIcon: 'coffee',

  // Links
  lists: {
    firstList: [
      {
        name: 'Phoronix',
        link: 'https://phoronix.com',
      },
      {
        name: 'The Register',
        link: 'https://theregister.com',
      },
      {
        name: 'lobste.rs',
        link: 'https://lobste.rs',
      },
      {
        name: 'HN',
        link: 'https://news.ycombinator.com/',
      },
    ],
    secondList: [
      {
        name: 'Unsplash',
        link: 'https://unsplash.com/',
      },
      {
        name: 'r/linux',
        link: 'https://reddit.com/r/linux',
      },
      {
        name: 'GitHub Explore',
        link: 'https://github.com/explore',
      },
    ],
  },
};
