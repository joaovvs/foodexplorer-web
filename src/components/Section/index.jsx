import { Container } from "./styles";
import { Card } from "../Card";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';


import { CaretRight, CaretLeft } from "@phosphor-icons/react";


export function Section({title, foodList,userFavorites,onFavoriteChange,...rest}){

    
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
            <Swiper 
              slidesPerView={3} 
              loop={true} 
              centeredSlides={true} 
              navigation={true} 
              modules={[Navigation]}
              spaceBetween={15}
              className="foodSwiper"
              >
                <div className="gradient-left"/>
                <div className="gradient-right"/>
                { foodList.length>0 && 
                  foodList.map((food,index) => {
                      if(food.category.includes(title)){
                       return (<SwiperSlide key={index}>
                          <Card  
                            isFavorite={(userFavorites && userFavorites.some(favorite=> favorite.food_id===food.id))}
                            key={index}
                            food={food}
                            onFavoriteChange={onFavoriteChange}
                          />
                        </SwiperSlide>)
                      }
                  })
                }
            </Swiper>
          
        </div>

    </Container>
    );
}
