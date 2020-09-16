import React from 'react'
import Grid from '@material-ui/core/Grid';
import './style.css';
function Recipe(props) {
    return (
        <div className="content">
            <h1>{props.label}</h1>
            <h4>{props.ingredientLines}</h4>
            <Grid item xs={6}>
                {<img className="image" src={props.image} />}
            </Grid>
            <Grid item xs={6}>
            <h5>Calories : {props.calories}</h5>
            </Grid>
        </div>
    )
}

export default Recipe
