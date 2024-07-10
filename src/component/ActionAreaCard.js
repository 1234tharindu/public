import * as React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Box } from "@mui/material";

const cardStyles = {
  width: 220,
  height: 270,
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  position: "relative",
  borderRadius: 4,
};

function ActionAreaCard({ title, image, description, link, moduleId }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link, { state: { key: moduleId } });
  };

  return (
    // <Card sx={{ maxWidth: 250, height: 300, display: 'flex', flexDirection: 'column' }}>
    <Card sx={cardStyles} onClick={handleClick}>
      {/* <Card sx={cardStyles} > */}
      <CardActionArea
        sx={{ display: "flex", flexDirection: "column", height: "100%" }}
      >
        <CardMedia component="img" height="210" image={image} alt={title} />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h7" component="div">
            {title}
          </Typography>
        </CardContent>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            color: "white",
            opacity: 0,
            transition: "opacity 0.3s",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: 2,
          }}
          className="hover-content"
        >
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2" component="p">
            {description}
          </Typography>
        </Box>
      </CardActionArea>
    </Card>
  );
}

ActionAreaCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  moduleId: PropTypes.number.isRequired,
};

export default ActionAreaCard;
