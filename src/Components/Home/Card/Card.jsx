import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./Crousal.css";

function ActionAreaCard(prop) {
  return (
    <Card sx={{ maxWidth: 345 }} className=" gap-3 over mt-36">
      <CardActionArea>
        <CardMedia
          className=" h-52"
          component="img"
          height="140"
          image={prop.img}
          alt="green iguana"
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
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default ActionAreaCard;
