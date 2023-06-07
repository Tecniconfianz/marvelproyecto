import { Card, Header } from "semantic-ui-react";
import Container from "../Container";
import "./ListLastEvent.scss";
import useFetch from "../../hooks/useFetch";
import LastEvents from "../LastEvents/LastEvents";


export default function ListLastEvents() {
  const lastEventsFetch = useFetch('http://gateway.marvel.com/v1/public/comics?ts=1&apikey=68bc3c997df8b9480da196ebdc97bd56&hash=f3ac4be189468336ccea74b21bb34113&limit=5');

   console.log(lastEventsFetch);
   
  return (
    <div className="container-list-last-events">
      <Header size="large">Últimos eventos</Header>

      <Container>
        <Card.Group itemsPerRow={5}>
          <LastEvents lastEventsFetch={lastEventsFetch} />

        </Card.Group>
      </Container>
    </div>
  );
}