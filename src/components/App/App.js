import { PageTitle } from '../PageTitle/PageTitle';
import { EventBoard } from '../EventBoard/EventBoard';
import upcomingEvents from 'utils/upcoming-events.json';
import { Container } from 'components/App/App.styled';

export const App = () => {
  return (
    <Container>
      <PageTitle text="24th Core Worlds Coalition Conference" />
      <EventBoard events={upcomingEvents} />
    </Container>
  );
};
