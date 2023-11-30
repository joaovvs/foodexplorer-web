import { Container } from "./styles";
import { Card } from "../Card";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import { useEffect, useState } from "react";
import { CaretRight, CaretLeft } from "@phosphor-icons/react";
import { api } from "../../services/api";


export function Section({title, foodList,userFavorites,onFavoriteChange,...rest}){

    
    //keenSlider init
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)





    function handleSectionTitle(){
      const sectionTitle = title;

      switch (sectionTitle){
        case "refeição":
          return "Refeições";
        case "sobremesa":
          return "Sobremesas";
        case "bebida":
          return "bebidas";
        default:
          return "Seção";
      }
    }


    return(
    <Container {...rest}>
        <h3>{handleSectionTitle()}</h3>
        <div className="wrapper">
            <div className="gradient-left"/>
            <div className="gradient-right"/>

            <Swiper 
              slidesPerView={3} 
              loop={true} 
              centeredSlides={true} 
              navigation={true} 
              modules={[Navigation]}
              spaceBetween={15}
              className="foodSwiper"
              >
                { foodList.length>0 && 
                  foodList.map((food,index) => {
                      if(food.category.includes(title)){
                       return <SwiperSlide><Card  
                        isFavorite={(userFavorites && userFavorites.some(favorite=> favorite.food_id===food.id))}
                        key={index}
                        food={food}
                        onFavoriteChange={onFavoriteChange}
                        />
                        </SwiperSlide>
                      }
                  })
                }
            </Swiper>
            {loaded && instanceRef.current && (
            <>
                <Arrow
                left
                onClick={(e) =>
                    e.stopPropagation() || instanceRef.current?.prev()
                }
                />

                <Arrow
                onClick={(e) =>
                    e.stopPropagation() || instanceRef.current?.next()
                }
                />
            </>
            )}
        </div>

    </Container>
    );
}


function Arrow(props) {
    const disabled = props.disabled ? " arrow--disabled" : ""
    return (
      <svg
        onClick={props.onClick}
        className={`arrow ${
          props.left ? "arrow--left" : "arrow--right"
        } ${disabled}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        {props.left && (
          <CaretLeft />
        )}
        {!props.left && (
            <CaretRight/>
        )}
      </svg>
    )
  }