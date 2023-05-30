import {useEffect, useState} from "react";
import {Button, CircularProgress, Grid, Typography, Paper, ImageListItem} from "@mui/material";
import {NavLink, useParams} from "react-router-dom";
import {getPizzaById, deletePizza} from "../api/pizzaApi";
import DeletePizza from "../DeletePizza";

const PizzaDetailPage = () => {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [pizza, setPizza] = useState({});

    useEffect(() => {
        getPizzaById(id)
            .then(({data}) => setPizza(data))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }, []);


    return (
        <>
            {
                loading ? <CircularProgress/>
                    :
                    <Paper elevation={2} sx={{p: 1}}>
                        <Grid container spacing={2}>
                            <Grid item xs={5}>
                                <ImageListItem>
                                    <img
                                        src={`http://localhost:3000/${pizza.picture}`}
                                        alt={pizza.title}
                                        style={{width: "45vh", height: "45vh"}}
                                    />
                                </ImageListItem>
                            </Grid>
                            <Grid item xs={7}>

                                <Grid container spacing={2} direction="column">
                                    <Grid item>
                                        <Typography variant="h3">{pizza.title}</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Grid container spacing={1} alignItems="center">
                                            <Grid item xs={2}>
                                                <b>Size:</b>
                                            </Grid>
                                            <Grid item xs={10}>
                                                {pizza.size}
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Grid container spacing={1} alignItems="center">
                                            <Grid item xs={2}>
                                                <b>Description:</b>
                                            </Grid>
                                            <Grid item xs={10}>
                                                {pizza.description}
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Grid container spacing={1} alignItems="center">
                                            <Grid item xs={2}>
                                                <b>Price:</b>
                                            </Grid>
                                            <Grid item xs={10}>
                                                {pizza.price} €
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    variant="outlined"
                                    //ce negerai
                                    to={`/pizzas/${pizza.id}/update`}

                                    component={NavLink}>Update pizza</Button>
                            </Grid>

                            <Grid item xs={9}>

                                <DeletePizza id={id}/>

                            </Grid>
                        </Grid>
                    </Paper>
            }
        </>
    );
};


export default PizzaDetailPage;
