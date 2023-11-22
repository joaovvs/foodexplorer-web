import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Banner } from "../../components/Banner";
import { Section } from "../../components/Section";
import { SideMenu } from "../../components/SideMenu";
import { useEffect, useState } from "react";
import { api } from "../../services/api";



export function Home(){
    const [menuIsOpen, setMenuIsOpen] = new useState(false);
    const [foodList,setFoodList] = new useState([]);
    const [sections, setSections] = new useState([]);

    const[search, setSearch] = useState("");

    const updateSearch = (newSearch) => {
        setSearch(newSearch);
    };


    async function foodListFetch(){
        try{
            const response = await api.get(`/foods/?ingredients=${""}&name=${""}`);
            setFoodList(response.data);

        }catch(error){
            if(error.response){
                alert(error.response.data.message)

            } else{
                alert("Não foi possível recuperar a lista de pratos!");
            }
        }
    }

    useEffect(()=>{
        const existentSections = [];
        if(foodList.length>0){
            foodList.forEach(food => {
            if(!existentSections.some(category => category ===food.category)){
                existentSections.push(food.category);
            }
            });
        }
        setSections(existentSections);
    },[foodList]);

    useEffect(()=>{
        foodListFetch();
        
    },[]);
    return(
        <Container> 
            <SideMenu
                onSearchChange={updateSearch}
                menuIsOpen={menuIsOpen}
                onCloseMenu={() => setMenuIsOpen(false)}
            />
            <Header onOpenMenu={()=> setMenuIsOpen(true)}/>
            <Content>
                
                <Banner/>

               { sections &&  sections.map( (section,index) => <Section key={index} title={section} foodList={foodList}/>)}
            </Content>
            <Footer/>
        </Container>
    );
}