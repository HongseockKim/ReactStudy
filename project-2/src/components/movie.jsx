import React from 'react';
import styles from './movie.module.css'

function Movie({id,year,title,summary,poster}) {
    return (
        <>
            <div className={'movie_con'} style={{display:'inline-block'}}>
                <div className="poster_wrap">
                    <img src={poster} alt={title}/>
                </div>
                <div className="movie_data">
                    <h3 className={'movie_title'}>{title}</h3>
                    <h5 className={'movie_year'}>{year}</h5>
                    <h5 className={'movie_summary'}>{summary}</h5>
                </div>
            </div>
        </>
    );
}




export default Movie;