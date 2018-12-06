export const API_KEY = 'AIzaSyBp63LQ7fT2twe5l-FMr9OlZTFncUoVtuw';
export const CALENDAR_ID =
  'ihhjtsi2rqcouqut6stahca0mg@group.calendar.google.com';
export const CALENDAR_URL = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`;

const DISCOVERY_DOCS = [
  'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'
];

const CLIENT_ID =
  '152104667171-pg9efivtiik4sp37n2c1sg4s39f42skd.apps.googleusercontent.com ';

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly';

export const initGAPI = () => {
  const { gapi } = window;

  if (!gapi) {
    console.error('Google API not loaded!');
    return;
  }

  gapi.load('client:auth2', async () => {
    try {
      console.log(gapi);

      await gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES
      });
      console.log('sfsdf');
      // Listen for sign-in state changes.
      // gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

      // Handle the initial sign-in state.
      if (!gapi.auth2.getAuthInstance().isSignedIn.get()) {
        gapi.auth2.getAuthInstance().signIn();
      }
    } catch (error) {
      console.error(error);
    }
  });
};

/**
 * Load Google Calendar events
 */
export const fetchCalendarEvents = () => {
  return fetch(CALENDAR_URL, { mode: 'cors' })
    .then(resp => resp.json())
    .then(data => data.items)
    .then(items =>
      items.map(event => ({
        start: new Date(event.start.date || event.start.dateTime),
        end: new Date(event.end.date || event.end.dateTime),
        title: event.summary
      }))
    )
    .catch(err => console.error(err));
};

export const addCalendarEvent = event => {
  return fetch(CALENDAR_URL, { mode: 'cors', method: 'POST' }).then(resp => {});
};
