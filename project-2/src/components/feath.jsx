import React, {Component} from 'react';
import axios from "axios";
import Movie from "./movie";


class Feath extends Component {
    state ={
        isLoading : true,
        movies :[]
    };

    getMoies = async () =>{//기달려 async
        //무엇을 axios 를
        const {data:{data :{movies}}} = await axios.get('https://yts-proxy.now.sh/list_movies.json=rating')
        //console.log(movies.data.data.movies);
        console.log(movies);

        this.setState({movies : movies, isLoading: false})
    }

    componentDidMount() {//컴포넌트가 마운트 되면 실행시킬 함수
        console.log('컴포넌트디드마운트 렌더순서2');
        // setTimeout(() =>{
        //     this.setState({isLoading : false})
        // },6000);
        this.getMoies();
    }

    render() {
        console.log('렌더')
        const {isLoading,movies} = this.state;


        return (<>
            <div>{
                isLoading ? "Loading" : movies.map(movies => {
                    console.log(movies);
                    return (<Movie key={movies.id} id={movies.id} year={movies.year} title={movies.title}  summary={movies.summary} poster={movies.medium_cover_image}/>)
                })
            }</div>

        </>);
    }
}

export default Feath;