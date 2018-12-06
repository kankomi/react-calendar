import React from 'react';

import moment from 'moment';
import 'moment/locale/de';

import BigCalendar from 'react-big-calendar';
import Loader from '../Loader';
require('react-big-calendar/lib/css/react-big-calendar.css');

moment.locale('de');
const localizer = BigCalendar.momentLocalizer(moment);

const Calendar = ({ events, onSelectSlot, isLoading }) => (
  <div style={{ position: 'relative' }}>
    {isLoading && <Loader />}

    <BigCalendar
      selectable
      style={{ height: '100vh' }}
      defaultDate={new Date()}
      scrollToTime={moment()
        .subtract(2, 'h')
        .toDate()}
      defaultView="week"
      events={events}
      localizer={localizer}
      onSelectSlot={onSelectSlot}
      drilldownView="agenda"
    />
  </div>
);

export default Calendar;
