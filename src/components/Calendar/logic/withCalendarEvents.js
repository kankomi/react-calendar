import { withHandlers } from 'recompose';

const onSelectSlot = ({ addEvent }) => ({ start, end }) => {
  addEvent({ start, end, title: 'testevent112' });
};

export default withHandlers({ onSelectSlot });
