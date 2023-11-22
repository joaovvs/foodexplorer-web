import { Container } from "./styles";
import { Card } from "../Card";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css"
import { useState } from "react";
import { CaretRight, CaretLeft } from "@phosphor-icons/react";
import { api } from "../../services/api";
import noImage from "../../assets/no image.png";

export function Section({title, foodList,...rest}){
        //keenSlider init
        const [currentSlide, setCurrentSlide] = useState(0)
        const [loaded, setLoaded] = useState(false)
        const [sliderRef, instanceRef] = useKeenSlider({  
          slides: {
            perView: 3,
            spacing: 15,
          },
          initial: 0,
          loop: true,
          mode: "free-snap",
          slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
          },
          created() {
            setLoaded(true)
          },
        });

    return(
    <Container {...rest}
        >
        <h3>{title}</h3>
        <div className="navigation-wrapper">
            <div id="card-list" ref={sliderRef} className="keen-slider">
                { foodList.length>0 && 
                  foodList.map((food,index) => (
                      <Card  
                      key={index}
                      cardId={food.id}
                      className={`keen-slider__slide number-slide${index}`}
                      name={food.name} 
                      price={food.price}
                      image={food.image ?`${api.defaults.baseURL}/files/${food.image}` : noImage}
                      />
                  ))
                }
            </div>
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
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
      <svg
        onClick={props.onClick}
        className={`arrow ${
          props.left ? "arrow--left" : "arrow--right"
        } ${disabeld}`}
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