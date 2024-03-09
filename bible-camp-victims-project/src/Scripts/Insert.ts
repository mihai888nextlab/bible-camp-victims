import axios from "axios";
//import { useEffect } from "react";

interface Props {
    type: number;
    line: string | undefined;
    details: number;
    date: number;
    }

function Insert(props: Props) {
  
    axios
      .get("/bibleCamp/vehicle.php?type=" + props.type + "&line=" + props.line + "&details=" + props.details + "&date=" + props.date)
      .then((res) => {
        console.log(res);
      });
  
}

export default Insert;