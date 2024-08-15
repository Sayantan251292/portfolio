import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import styles from "./card.module.css";

export default function CommonCard(props) {
  const {
    company_name,
    end_date,
    responsibilities,
    location,
    company_logo,
    position,
    start_date,
  } = props.work_details;

  return (
    <Card sx={{ width: "100%", zIndex: 0 }}>
      <CardActionArea>
        <CardContent>
          <div className={`d-flex`}>
            <div
              className={`d-flex justify-content-between w-100 align-items-center ${styles.left_margin}`}
            >
                <span className={`${styles.roboto}`}>{company_name}</span>
              <span className={`${styles.roboto_bold}`}>{position} </span>
              <span>
                <span></span>
                <FontAwesomeIcon icon={faLocationDot} />
                <span className={`${styles.roboto} ${styles.left_margin}`}>
                  {" "}
                  {location}{" "}
                </span>
              </span>
              <span className={`${styles.roboto}`}>
                {start_date} - {end_date}
              </span>
            </div>
          </div>

          <div className={`mt-3 ${styles.roboto}`}>
            <ul>
              {responsibilities.map((res, i) => <li key={i}>{res}</li>)}
            </ul>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
