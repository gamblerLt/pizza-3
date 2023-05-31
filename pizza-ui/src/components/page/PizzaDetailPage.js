import { useEffect, useState } from "react";
import { Button, CircularProgress, Grid, Typography, Paper, ImageListItem, Input } from "@mui/material";
import { useParams } from "react-router-dom";
import { getPizzaById, updatePizza, deletePizza } from "../api/pizzaApi";
import DeletePizza from "../DeletePizza";

const PizzaDetailPage = (props) => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [pizza, setPizza] = useState({});
    const [editableFields, setEditableFields] = useState({
        title: false,
        size: false,
        description: false,
        price: false,
    });

    useEffect(() => {
        getPizzaById(id)
            .then(({ data }) => setPizza(data))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }, []);

    const handleFieldChange = (field, value) => {
        setPizza((prevPizza) => ({
            ...prevPizza,
            [field]: value,
        }));
    };

    const handleUpdate = () => {
        if (Object.values(editableFields).some((editable) => editable)) {
            // Save changes
            updatePizza(id, pizza)
                .then((response) => {
                    // Handle successful update
                    console.log("Pizza updated:", response.data);
                    setEditableFields({
                        title: false,
                        size: false,
                        description: false,
                        price: false,
                    }); // Set all fields as not editable after saving changes
                })
                .catch((error) => {
                    // Handle update error
                    console.error("Failed to update pizza:", error);
                });
        } else {
            // Toggle edit mode for all fields
            setEditableFields((prevEditableFields) => ({
                title: !prevEditableFields.title,
                size: !prevEditableFields.size,
                description: !prevEditableFields.description,
                price: !prevEditableFields.price,
            }));
        }
    };

    return (
        <>
            {loading ? (
                <CircularProgress />
            ) : (
                <Paper elevation={2} sx={{ p: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={5}>
                            <ImageListItem>
                                <img
                                    src={`http://localhost:3000/${pizza.picture}`}
                                    alt={pizza.title}
                                    style={{ width: "65vh", height: "65vh" }}
                                />
                            </ImageListItem>
                        </Grid>
                        <Grid item xs={7}>
                            <Grid container spacing={2} direction="column">
                                <Grid item>
                                    <Typography variant="h3">
                                        {editableFields.title ? (
                                            <Input
                                                value={pizza.title}
                                                onChange={(e) => handleFieldChange("title", e.target.value)}
                                            />
                                        ) : (
                                            pizza.title
                                        )}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Grid container spacing={1} alignItems="center">
                                        <Grid item xs={2}>
                                            <b>Size:</b>
                                        </Grid>
                                        <Grid item xs={10}>
                                            {editableFields.size ? (
                                                <Input
                                                    value={pizza.size}
                                                    onChange={(e) => handleFieldChange("size", e.target.value)}
                                                />
                                            ) : (
                                                pizza.size
                                            )}
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Grid container spacing={1} alignItems="center">
                                        <Grid item xs={2}>
                                            <b>Description:</b>
                                        </Grid>
                                        <Grid item xs={10}>
                                            {editableFields.description ? (
                                                <Input
                                                    value={pizza.description}
                                                    onChange={(e) => handleFieldChange("description", e.target.value)}
                                                />
                                            ) : (
                                                pizza.description
                                            )}
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Grid container spacing={1} alignItems="center">
                                        <Grid item xs={2}>
                                            <b>Price:</b>
                                        </Grid>
                                        <Grid item xs={10}>
                                            {editableFields.price ? (
                                                <Input
                                                    value={pizza.price}
                                                    onChange={(e) => handleFieldChange("price", e.target.value)}
                                                />
                                            ) : (
                                                `${pizza.price} €`
                                            )}
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="outlined" onClick={handleUpdate}>
                                {Object.values(editableFields).some((editable) => editable)
                                    ? "Save Changes"
                                    : "Update Pizza"}
                            </Button>
                        </Grid>
                        <Grid item xs={9}>
                            <DeletePizza id={id} />
                        </Grid>
                    </Grid>
                </Paper>
            )}
        </>
    );
};

export default PizzaDetailPage;
