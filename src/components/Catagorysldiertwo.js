import React,{Component} from 'react';
import Slider from "react-slick";

const categoryList = [
    {   
        imageUrl: 'categories/meal.png',
        name: 'Meal',
    },
    {   
        imageUrl: 'categories/meat.png',
        name: 'Meat',
    },
    {   
        imageUrl: 'categories/vegi.png',
        name: 'Vegi',
    },
    {   
        imageUrl: 'categories/flower.png',
        name: 'Flower',
    },
    {   
        imageUrl: 'categories/drinks.png',
        name: 'Drinks',
    },
    {   
        imageUrl: 'categories/meal2.png',
        name: 'Fresh',
    },
    {   
        imageUrl: 'categories/meat2.png',
        name: 'Frozen',
    },
    {   
        imageUrl: 'categories/vegi2.png',
        name: 'Wine',
    },
    {   
        imageUrl: 'categories/flower2.png',
        name: 'Barkery',
    },
    {   
        imageUrl: 'categories/drinks2.png',
        name: 'Organic',
    },
    {   
        imageUrl: 'categories/drinks.png',
        name: 'Beer',
    },
    {   
        imageUrl: 'categories/vegi.png',
        name: 'Vegi',
    },
    
]

class Catagorysldiertwo extends Component {
    render() {
        const storysettings = {
            arrows: true,
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            centerMode: false,
            variableWidth: true
        };
        return (
            <Slider {...storysettings} className="slick-arrow-top">
                {categoryList.map((value , index) => (
                    <div key={index} className="me-1">
                        <div className="category-card style-three shadow-none text-center bg-transparent border-0">
                            <a href="/g-6" className="rounded-circle image-round"><img src={`assets/images/${value.imageUrl}`} className="w-110 rounded-circle" alt="category" /></a>
                            <h4 className="font-xssss text-grey-900 mt-0 fw-700 d-block">{value.name}</h4>
                        </div>
                    </div>
                ))}
            </Slider>
        );
    }
}

export default Catagorysldiertwo;