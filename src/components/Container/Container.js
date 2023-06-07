import { Container as Content } from "semantic-ui-react";

import "./Container.scss";

export default function Container({children, bg}) {
    //http://gateway.marvel.com/v1/public/comics?ts=1&apikey=68bc3c997df8b9480da196ebdc97bd56&hash=f3ac4be189468336ccea74b21bb34113//
    return (
        <div className={bg ? '': 'container-bg'}>;
            <Content>{children}</Content>
        </div>
    );
    
}