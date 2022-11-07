import React,{Component} from 'react';
import { Link } from 'react-router-dom';

class Addbannerone extends Component {
    render() {
        return (
            <div className="card border-0 banner-wrap bg-image-cover bg-image-center" style={{backgroundImage: `url("assets/images/banner/super-discount-two.jpeg")`}}>
                <div className="slide-content style4 text-center w-100">
                    <span className="text-current">All natural products</span>
                    <h2 className="text-grey-900"><b className="d-block">SUMMER DISCOUNT </b>of the week</h2>    
                    <div className="clearfix"></div>
                    <Link to="/shop-4"><div className="btn-lg rounded-25 btn bg-current">SHOP NOW</div></Link>
                </div>
            </div>
        );
    }
}

export default Addbannerone;