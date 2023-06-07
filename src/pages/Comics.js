import { useState } from "react";
import { Grid, Header } from "semantic-ui-react";
import Container from "../components/Container";
import ListComics from "../components/ListComics";
import useFetch from "../hooks/useFetch";
export default function Comics() {
    const [renderComics, setRenderComics]= useState(10);
    const url = `http://gateway.marvel.com/v1/public/comics?ts=1&apikey=68bc3c997df8b9480da196ebdc97bd56&hash=f3ac4be189468336ccea74b21bb34113&limit=${renderComics}`;
    const listComics = useFetch(url);

    /*const listComics= useFetch(
        `<a href="http://gateway.marvel.com/v1/public/comics?ts=1&apikey=b1d0af8d550133575ff0f35e1d00fc67&hash=fb8f2143575c36a250b7c15ad06d4438&limit=%24%7BrenderComics%7D%60" rel="nofollow"><u>http://gateway.marvel.com/v1/public/comics?ts=1&apikey=b1d0af8d550133575ff0f35e1d00fc67&hash=fb8f2143575c36a250b7c15ad06d4438&limit=${renderComics}`</u></a>
    );*/
    return(
        <div className="comics-page">
            <div id="slide-comics-image"/>
            <Grid>
                <Grid.Column>
                    <Container bg="light">
                        <Header as="h2">Los mejores Comics</Header>
                        <ListComics 
                            listComics={listComics}
                            renderComics={renderComics}
                            setRenderComics={setRenderComics}    
                        />
                    </Container>
                </Grid.Column>
            </Grid>
            
        </div>
    );
}