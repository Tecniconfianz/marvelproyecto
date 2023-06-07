import { Grid, Header } from "semantic-ui-react";
import Container from "../components/Container";
import ListSeries from "../components/ListSeries";
import useFetch from "../hooks/useFetch";
export default function Series() {
    const listSeries = useFetch('http://gateway.marvel.com/v1/public/series?ts=1&apikey=68bc3c997df8b9480da196ebdc97bd56&hash=f3ac4be189468336ccea74b21bb34113&limit=20');
    console.log(listSeries);
    return(
        <div>
            <div className="series-page"> 
                <div id="slide-series-image"/>
                <Grid>
                    <Grid.Column>
                        <Container bg="light">
                            <Header as="h2">Las últimas series de Marvel</Header>
                            <ListSeries listSeries={listSeries}/>
                        </Container>
                    </Grid.Column>
                </Grid>
            </div>
        </div>
    );
}