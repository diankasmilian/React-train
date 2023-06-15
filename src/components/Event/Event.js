import PropTypes from 'prop-types';
import { FaMapMarkerAlt, FaUserAlt, FaCalendarAlt, FaClock } from "react-icons/fa";
import {formatEventDuration, formatEventStart} from 'utils';
import { Card, EventName, Info, Chip } from './Event.styled';

export const Event = ({name, location, speaker, type, start, end}) => {
   const formattedStartTime = formatEventStart(start);
   const formattedDuration = formatEventDuration(start, end)
   return <Card>
   <EventName>{name}</EventName>
   <Info >
     <FaMapMarkerAlt  />
     {location}
   </Info>
   <Info>
   <FaUserAlt />
     {speaker}
   </Info>
   <Info>
   <FaCalendarAlt />
     {formattedStartTime}
   </Info>
   <Info>
   <FaClock />
     {formattedDuration}
   </Info>
   <Chip eventType={type}>{type}</Chip>
 </Card>
}

Event.propType = {
   name: PropTypes.string.isRequired,
   location:PropTypes.string.isRequired,
   speaker: PropTypes.string.isRequired,
   type: PropTypes.string.isRequired,
   start:PropTypes.string.isRequired,
   end: PropTypes.string.isRequired,
}