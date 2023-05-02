import React from 'react';
import Title from './../components/Title/index';
import Card from './../components/Card/index';
import SearchInput from '../components/SearchInput';


function Home() {
    return (
        <div style={{ paddingBottom: '80px'}}>
            <Title
                title={"Catálogo de Filmes"}
                text={"Filmes Disponíveis"} />
            {/* <Title title=""/> */}
            <Card />
        </div>
    )
}
export default Home;