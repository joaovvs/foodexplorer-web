import { Container } from "./styles";
import { Card } from "../Card";
import foodImage from "../../assets/Mask group-10.png"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useState } from "react";
import { CaretRight, CaretLeft } from "@phosphor-icons/react";

export function Section({title, ...rest}){
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
                
                <Card  
                    className="keen-slider__slide number-slide1" 
                    name="Salada Ravanello1" 
                    price="49,97" 
                    image={foodImage}
                />
                <Card  
                    className="keen-slider__slide number-slide2" 
                    name="Salada Ravanello2" 
                    price="49,97" 
                    image={foodImage}
                />
                <Card  
                    className="keen-slider__slide number-slide3" 
                    name="Salada Ravanello3" 
                    price="49,97" 
                    image={foodImage}
                />
                <Card  
                    className="keen-slider__slide number-slide4" 
                    name="Salada Ravanello4" 
                    price="49,97" 
                    image={foodImage}
                />
                <Card  
                    className="keen-slider__slide number-slide5" 
                    name="Salada Ravanello5" 
                    price="49,97" 
                    image={foodImage}
                /> 
                <Card  
                    className="keen-slider__slide number-slide6" 
                    name="Salada Ravanello6" 
                    price="49,97" 
                    image={foodImage}
                /> 
                <Card  
                className="keen-slider__slide number-slide7" 
                    name="Salada Ravanello7" 
                    price="49,97" 
                    image={foodImage}
                /> 
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

            <div className="gradient"></div>
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