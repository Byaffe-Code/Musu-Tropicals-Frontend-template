import React, { Component, Fragment } from "react";

import Header from '../components/Header';
import Headermob from '../components/Headermob';
import Upperheader from '../components/Upperheader';
import Footer from '../components/Footer';
// import Blog from '../components/Blog';
import Productfilter from '../components/Productfilter';
import Productlisting from '../components/Productlisting';
import Lowerheadertwo from '../components/Lowerheadertwo';
import axios from "axios";

const productList = [
    {
        imageUrl: 'p.png',
        title: 'Blue Diamond Almonds Lightly Salted',
        weight: '100',
        price: '19',
    },
    {
        imageUrl: 'p.png',
        title: 'Assorted Donuts Each Salted',
        weight: '500',
        price: '54',
    },
    {
        imageUrl: 'p.png',
        title: 'Natures Own 100% Wheat',
        weight: '400',
        price: '43',
    },
    {
        imageUrl: 'p.png',
        title: 'Tailgater Ham Sandwich Organic',
        weight: '500',
        price: '29',
    },
    {
        imageUrl: 'p.png',
        title: 'Kobita Almonds Lightly Salted',
        weight: '500',
        price: '29',
    },
    {
        imageUrl: 'p.png',
        title: 'Apple Juice Organic <br> Food',
        weight: '500',
        price: '29',
    },
    {
        imageUrl: 'p.png',
        title: 'Blue Diamond Almonds Lightly Salted',
        weight: '500',
        price: '29',
    },
    {
        imageUrl: 'p.png',
        title: 'Assorted Donuts Each Salted',
        weight: '500',
        price: '29',
    },
    {
        imageUrl: 'p.png',
        title: 'Natures Own 100% Wheat',
        weight: '500',
        price: '29',
    },
    {
        imageUrl: 'p.png',
        title: 'Blue Diamond Almonds Lightly Salted',
        weight: '500',
        price: '29',
    },
    {
        imageUrl: 'p.png',
        title: 'Assorted Donuts Each Salted',
        weight: '500',
        price: '29',
    },
    {
        imageUrl: 'p.png',
        title: 'Natures Own 100% Wheat',
        weight: '500',
        price: '29',
    }, {
        imageUrl: 'p.png',
        title: 'Blue Diamond Almonds Lightly Salted',
        weight: '100',
        price: '19',
    },
    {
        imageUrl: 'p.png',
        title: 'Assorted Donuts Each Salted',
        weight: '500',
        price: '54',
    },
    {
        imageUrl: 'p.png',
        title: 'Natures Own 100% Wheat',
        weight: '400',
        price: '43',
    },
    {
        imageUrl: 'p.png',
        title: 'Tailgater Ham Sandwich Organic',
        weight: '500',
        price: '29',
    },
    {
        imageUrl: 'p.png',
        title: 'Kobita Almonds Lightly Salted',
        weight: '500',
        price: '29',
    },
    {
        imageUrl: 'p.png',
        title: 'Apple Juice Organic <br> Food',
        weight: '500',
        price: '29',
    },
    {
        imageUrl: 'p.png',
        title: 'Blue Diamond Almonds Lightly Salted',
        weight: '500',
        price: '29',
    },
    {
        imageUrl: 'p.png',
        title: 'Assorted Donuts Each Salted',
        weight: '500',
        price: '29',
    },
    {
        imageUrl: 'p.png',
        title: 'Natures Own 100% Wheat',
        weight: '500',
        price: '29',
    },
    {
        imageUrl: 'p.png',
        title: 'Blue Diamond Almonds Lightly Salted',
        weight: '500',
        price: '29',
    },
    {
        imageUrl: 'p.png',
        title: 'Assorted Donuts Each Salted',
        weight: '500',
        price: '29',
    },
    {
        imageUrl: 'p.png',
        title: 'Natures Own 100% Wheat',
        weight: '500',
        price: '29',
    },
    {
        imageUrl: 'p.png',
        title: 'Assorted Donuts Each Salted',
        weight: '500',
        price: '29',
    },
    {
        imageUrl: 'p.png',
        title: 'Natures Own 100% Wheat',
        weight: '500',
        price: '29',
    }, {
        imageUrl: 'p.png',
        title: 'Assorted Donuts Each Salted',
        weight: '500',
        price: '29',
    },
    {
        imageUrl: 'p.png',
        title: 'Natures Own 100% Wheat',
        weight: '500',
        price: '29',
    },

]
class Shopfour extends Component {
    constructor(props) {
        super(props);

        this.state = {
            productList: [],
            currentPage: 1,
            productsPerPage: 12,//this should be the same value as the nextPageLimit divisor
            firstPageIndex: 0,
            lastPageIndex: 5,
            
        };

        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
    }

    componentDidMount() {
        axios.get('https://musutropicals.herokuapp.com/musubackend/api/products').then(
            data => {
                this.setState({
                    productList: data.data.filter(p => p.brand != 'Kasaki')
                })
                console.log(data)
            }
        ).catch(
            e => console.log(e)
        )
    }

    nextPage() {
        const nextPageLimit = Math.ceil(this.state.productList.length / this.state.productsPerPage)

        if (this.state.currentPage < nextPageLimit) {//add next page as long as current page o sless than the limit
            this.setState({ currentPage: this.state.currentPage + 1 })

            if (this.state.currentPage >= this.state.lastPageIndex - 1) { //changing pages to display on continous clicking of > btn
                this.setState({
                    firstPageIndex: this.state.firstPageIndex + 1,
                    lastPageIndex: this.state.lastPageIndex + 1
                })
            }
        }

        // console.log(this.state.currentPage)
    }

    previousPage() {

        if (this.state.currentPage > 1) {
            this.setState({ currentPage: this.state.currentPage - 1 })

            if (this.state.currentPage === this.state.firstPageIndex + 1) { //changing pages to display on continous clicking of > btn
                this.setState({
                    firstPageIndex: this.state.firstPageIndex - 1,
                    lastPageIndex: this.state.lastPageIndex - 1
                })
            }
        }
        // console.log(this.state.currentPage)
    }

    render() {
        const { currentPage, productsPerPage, productList, firstPageIndex, lastPageIndex } = this.state
        console.log(this.state, currentPage)
        const lastProductIndex = currentPage * productsPerPage;
        const firstProductIndex = lastProductIndex - productsPerPage;
        const currentProducts = productList.slice(firstProductIndex, lastProductIndex);

        let pages = [];

        for (let i = 1; i <= Math.ceil(productList.length / productsPerPage); i++) {
            pages.push(i);
        }
        const pagesToDisplay = pages.slice(firstPageIndex, lastPageIndex)
        console.log(pagesToDisplay)

        return (
            <Fragment>
                <Headermob />
                <Upperheader />
                <Header />
                <Lowerheadertwo />

                <div className="listing-wrapper pt-3 pb-3 md-mt-6">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card d-flex flex-wrap flex-row w-100 p-lg-5 p-4 border-0 bg-image-cover bg-image-center mb-3" style={{ backgroundImage: `url("assets/images/slider-12.jpg")` }} >
                                    <div className="col-lg-5 col-md-12">
                                        <h2 className="fw-700 display1-size display1-sm-size ls-0 text-grey-900 mb-0">Choose the best <span className="text-current">healthier way</span> of life</h2>
                                        <span className="text-grey-700 fw-500 font-xssss mt-1 d-block">All Natural Italian-Style Chicken Meatballs</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 pe-lg-5">
                                <Productfilter />
                            </div>
                            <div className="col-lg-8">
                                <div className="row m-0">
                                    <div className="card d-flex flex-row justify-content-start p-3 bg-greylight border-0 mb-3">
                                        <a href="/" className="mt-1"><span className="feather-grid text-grey-600 font-xs"></span></a>
                                        <select className="form-select ms-auto float-end" aria-label="Default select example">
                                            <option>Sort by latest</option>
                                            <option defaultValue="1">Sort by popularity</option>
                                            <option defaultValue="2">Sort by price : low to high</option>
                                            <option defaultValue="3">Sort by price : high to low</option>
                                        </select>
                                    </div>
                                </div>

                                <Productlisting divClass="col-lg-4 col-md-4 col-xs-6 p-4 border-end border-bottom rounded-0 posr" productList={currentProducts} />


                                <div className="row">
                                    <div className="col-lg-12 mt-5 mb-4">
                                        <nav aria-label="Page navigation example">
                                            <ul className="pagination justify-content-center">
                                                <li className={currentPage === 1 ? 'page-item disabled' : 'page-item '} onClick={() => this.previousPage()}><a className="page-link" ><i className="feather-chevron-left"></i></a></li>
                                                {/* <li className="page-item active"><a className="page-link" href="/">1</a></li>
                                                <li className="page-item"><a className="page-link" >2</a></li>
                                                <li className="page-item"><a className="page-link" href="/">3</a></li>
                                                <li className="page-item"><a className="page-link" href="/">4</a></li> */}
                                                {pagesToDisplay.map((page, index) => {
                                                    return (
                                                        <li
                                                            key={index}
                                                            onClick={() => this.setState({ currentPage: page })}
                                                            className={currentPage === page ? "page-item active" : "page-item"}>
                                                            <span className="page-link" style={{ cursor: 'pointer' }}>{page}</span>

                                                        </li>
                                                    );
                                                })}
                                                <li className={currentPage === pages.length ? 'page-item disabled' : 'page-item '} onClick={() => this.nextPage()}><a className="page-link"><i className="feather-chevron-right"></i></a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* <Blog /> */}
                <Footer />

            </Fragment>
        );
    }
}

export default Shopfour;