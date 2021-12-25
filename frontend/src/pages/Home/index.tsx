import React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Card>
        <CardContent>
          <Typography variant="h5">
            Redux Example
          </Typography>
          <Typography
            align="center"
            variant="subtitle1"
          >
            Counter
          </Typography>
        </CardContent>
        <CardActions>
          <Button color="primary" variant="contained">
            Increment
          </Button>
          <Button
            color="secondary"
            variant="contained"
          >
            Decrement
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};