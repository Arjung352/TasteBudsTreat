import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./Crousal.css";
import { useNavigate } from "react-router-dom";
function ActionAreaCard(prop) {
  const redirecting = useNavigate();
  const redirect = () => {
    redirecting("/cart");
  };
  return (
    <Card sx={{ maxWidth: 345 }} className=" gap-3 over mt-36 ">
      <CardActionArea>
        <CardMedia
          className=" h-52"
          component="img"
          height="140"
          image={prop.img}
          alt={prop.name}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="name"
          >
            {prop.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {prop.about}
          </Typography>
          <button
            className="p-2 bg-olive text-white px-4 rounded-2xl mt-4 hover:bg-darkOlive font-normal "
            onClick={redirect}
          >
            Buy Now
          </button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default ActionAreaCard;
