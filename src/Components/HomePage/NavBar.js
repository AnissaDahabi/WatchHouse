import '../../StyleSheets/style.css';
import '../../index'

function NavBar() {
    return (
            <div className="navBar">
                <h1>WatchHouse.</h1>
                <div className="navBarLinks">
                    <a href="/public">Subscribe.</a>
                    <a href="/public">Coffee.</a>
                    <a href="/public">Equipment.</a>
                    <a href="/public">Visit us.</a>
                    <a href="/public">Info.</a>
                </div>
                <hr/>
            </div>
    );
}

export default NavBar;
