import {Numbers} from "../components/Numbers";
import {useState} from "react";

export function FavoriteNumbersPage(props) {
    const {numbers} = props;
    const [favorite, setFavorite] = useState();
    return (
        <div className="mx-3">
            <Numbers numbers={numbers} title="alle getallen"
                     isInitiallyOpen={true}
                     markedNumber={favorite}
                     onSelectNumber={n => setFavorite(n)}/>
            <div>Mijn favoriete getal is {favorite ?? "(nog niet gekozen)"}</div>
        </div>
    );
}