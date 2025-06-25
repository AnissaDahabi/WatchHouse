import '../../StyleSheets/style.css';
import '../../index'
import img1 from '../../Assets/img1.png'
import img2 from '../../Assets/img2.png'
import img3 from '../../Assets/img3.png'

function Banner() {
    return (
        <div className="banner">
            <div className="banner1">
                <img src={img1} alt="img1" className="banner1-img"/>
                <div className="banner1-text">
                    <h3>Globally sourced. Locally crafted.</h3>
                    <p>Cupped, tested, developed and roasted at our Coffee Lab right here in South London.</p>
                </div>
            </div>
            <div className="banner2">
                <img src={img2} alt="img2" className="banner2-img"/>
                <div className="banner2-text">
                    <h3>Modern Coffee. Holistic approach.</h3>
                    <p>It encapsulates the attention to detail, creativity and focus on provenance and quality.</p>
                </div>
            </div>
            <div className="banner3">
                <img src={img3} alt="img3" className="banner3-img"/>
                <div className="banner3-text">
                    <h3>No two Houses the same.</h3>
                    <p>Each of our locations are designed to play a contemporary role in the Modern Coffee experience.</p>
                </div>
            </div>
        </div>
    );
}

export default Banner;