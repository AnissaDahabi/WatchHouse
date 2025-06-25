import '../../StyleSheets/style.css';
import '../../index'

function HomeTitle() {
    return (
        <div className="homeTitle">
            <div>
                <h1>Modern Coffee.</h1>
                <p>Pourers of the world’s best coffees and providers of the tools and <br/>
                    techniques from our House to yours.</p>
            </div>
            <button className="button">SHOP NOW</button>
        </div>
    );
}

export default HomeTitle;