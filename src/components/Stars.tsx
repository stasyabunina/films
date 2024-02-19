import '../App.css';
import Star from './Star'

type Props = {
    count: number,
}

function Stars({ count }: Props) {
    if (count < 1 || count > 5) {
        return (null);
    }

    return (
        <ul className="card-body-stars">
            {[...Array(count)].map((_, index) =>
                <Star key={index} />
            )}
        </ul>
    );
}

export default Stars;
