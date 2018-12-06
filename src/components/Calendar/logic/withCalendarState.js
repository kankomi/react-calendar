import { withStateHandlers } from 'recompose';

const initialState = {
  events: [],
  isLoading: false
};

const setEvents = () => events => ({ events });
const addEvent = ({ events }) => event => ({ events: [...events, event] });
const setLoading = () => val => ({ isLoading: val });

export default withStateHandlers(initialState, {
  setEvents,
  addEvent,
  setLoading
});
