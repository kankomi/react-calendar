import { lifecycle, compose, pure } from 'recompose';

import { fetchCalendarEvents, initGAPI } from '../../../services/gapi';
import withCalendarEvents from './withCalendarEvents';
import withCalendarState from './withCalendarState';

const withLogic = compose(
  pure,
  withCalendarState,
  lifecycle({
    async componentDidMount() {
      const { setLoading, setEvents } = this.props;
      setLoading(true);
      initGAPI();
      const events = await fetchCalendarEvents();
      setEvents(events);
      setLoading(false);
    }
  }),
  withCalendarEvents
);

export default withLogic;
