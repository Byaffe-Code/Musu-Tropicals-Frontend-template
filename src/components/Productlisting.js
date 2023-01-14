import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


// const productList = [
//     {
//         imageUrl: 'p.png',
//         title: 'Blue Diamond Almonds Lightly Salted',
//         weight: '100',
//         price: '19',
//     },
//     {
//         imageUrl: 'p.png',
//         title: 'Assorted Donuts Each Salted',
//         weight: '500',
//         price: '54',
//     },
//     {
//         imageUrl: 'p.png',
//         title: 'Natures Own 100% Wheat',
//         weight: '400',
//         price: '43',
//     },
//     {
//         imageUrl: 'p.png',
//         title: 'Tailgater Ham Sandwich Organic',
//         weight: '500',
//         price: '29',
//     },
//     {
//         imageUrl: 'p.png',
//         title: 'Kobita Almonds Lightly Salted',
//         weight: '500',
//         price: '29',
//     },
//     {
//         imageUrl: 'p.png',
//         title: 'Apple Juice Organic <br> Food',
//         weight: '500',
//         price: '29',
//     },
//     {
//         imageUrl: 'p.png',
//         title: 'Blue Diamond Almonds Lightly Salted',
//         weight: '500',
//         price: '29',
//     },
//     {
//         imageUrl: 'p.png',
//         title: 'Assorted Donuts Each Salted',
//         weight: '500',
//         price: '29',
//     },
//     {
//         imageUrl: 'p.png',
//         title: 'Natures Own 100% Wheat',
//         weight: '500',
//         price: '29',
//     },
//     {
//         imageUrl: 'p.png',
//         title: 'Blue Diamond Almonds Lightly Salted',
//         weight: '500',
//         price: '29',
//     },
//     {
//         imageUrl: 'p.png',
//         title: 'Assorted Donuts Each Salted',
//         weight: '500',
//         price: '29',
//     },
//     {
//         imageUrl: 'p.png',
//         title: 'Natures Own 100% Wheat',
//         weight: '500',
//         price: '29',
//     },

// ]

class Productlisting extends Component {
    // state = {
    //     productList: []
    // }

    // componentDidMount() {
    //     axios.get('https://musutropicals.herokuapp.com/musubackend/api/products').then(
    //         data => {this.setState({
    //             productList: data.data.filter(p=>p.brand!='Kasaki').slice(0,12)
    //         })
    //     console.log(data)
    //     }
    //     )



    render() {
        const { divClass, productList } = this.props;

        return (
            <div className="row border rounded-6 m-0 bg-white">
                {productList.map((value, index) => (
                    // Start Single Demo 
                    <div key={index} className={divClass}>
                        <span className="ls-3 font-xsssss text-white text-uppercase bg-current fw-700 p-2 lh-1 d-inline-block posa rounded-3 left-15 top-15">30% off</span>
                        <Link to="/single-product-4" className="posa right-0 top-0 mt-3 me-3"><i className="ti-heart font-xs text-grey-500"></i></Link>
                        <div className="clearfix"></div>

                        <Link to="/single-product-4" className="d-block text-center" data-bs-toggle="modal" data-bs-target="#productmodal"><img src={value.image1Url} alt="banner" className="w-100 mt-3 mb-3 d-inline-block p-2 pt-0" /></Link>
                        <div className="star d-inline text-left">
                            <img src="assets/images/star.png" alt="star" className="w-10 me-1 float-start" />
                            <img src="assets/images/star.png" alt="star" className="w-10 me-1 float-start" />
                            <img src="assets/images/star.png" alt="star" className="w-10 me-1 float-start" />
                            <img src="assets/images/star.png" alt="star" className="w-10 me-1 float-start" />
                            <img src="assets/images/star-disable.png" alt="star" className="w-10 me-1 float-start" />
                        </div>
                        <div className="clearfix"></div>
                        <h2 className="mt-2"><Link to="/single-product-4" className="text-grey-700 fw-600 font-xsss lh-22 d-block ls-0">{value.name}</Link></h2>
                        <h6 className="font-xss ls-3 fw-700 text-current d-flex"><span className="font-xsssss text-grey-500">$</span>{value.price} <span className="ms-auto text-grey-500 fw-500 mt-1 font-xsssss">{value.price}</span></h6>
                        <div className="cart-count d-flex mt-4">
                            <div className="number">
                                <span className="minus">-</span>
                                <input type="text" className="open-font ms-1 me-1" defaultValue="1" />
                                <span className="plus">+</span>
                            </div>
                        </div>
                    </div>

                    // End Single Demo
                ))}
            </div>
        );
    }
}

export default Productlisting;