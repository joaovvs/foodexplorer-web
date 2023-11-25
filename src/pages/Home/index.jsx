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
    const [userFavorites, setUserFavorites] = new useState([]);
    

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

    async function fetchUserFavorites(){
        try{
            const response = await api.get("/favorites/");
            setUserFavorites(response.data);
        }catch(error){
            if(error.response){
                alert(error.response.data.message)
            } else{
                alert("Não foi possível recuperar a lista de favoritos do usuário!");
            }
        }
    }

    async function handleFavoritesChange(food_id){
        console.log(userFavorites);
        console.log(food_id);
        console.log(userFavorites.some(food => food.food_id ==food_id));
        if(userFavorites.some(food => food.food_id ==food_id)){
           console.log("já é um favorito, remover")
           await handleRemoveFavorites(food_id);
           fetchUserFavorites();
        }else{
            console.log("não é um favorito, adicionar");
            await handleAddFavorites(food_id);
            fetchUserFavorites();
        }

        await fetchUserFavorites();
    }

    async function handleAddFavorites(food_id){
        const confirm = window.confirm("Deseja realmente incluir o prato dos favoritos?");
        if(confirm){
        try{
            await api.post(`/favorites/${food_id}`); 
            alert("Prato adicionado aos favoritos com sucesso!");
        }catch(error){
          if(error.response){
              alert(error.response.data.message)
          } else{
              alert("Não foi possível favoritar o prato, tente novamente!");
          }
        }
      }
    }
  
      async function handleRemoveFavorites(food_id){
        const confirm = window.confirm("Deseja realmente remover o prato dos favoritos?");
        if(confirm){
            try{
                const result =await api.delete(`/favorites/${food_id}`); 
                console.log(result);
                alert("Prato removido dos favoritos com sucesso!");
            }catch(error){
            if(error.response){
                alert(error.response.data.message)
            } else{
                alert("Não foi remover o prato dos favoritos, tente novamente!");
            }
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
        fetchUserFavorites();
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

               { sections &&  sections
                .map( (section,index) => 
                    <Section 
                        key={index} 
                        title={section} 
                        foodList={foodList} 
                        userFavorites={userFavorites}
                        onFavoriteChange={handleFavoritesChange}
                        />)}
            </Content>
            <Footer/>
        </Container>
    );
}