import React from "react";
import { useNavigate } from "react-router";

interface innerProps {
  children: React.ReactElement
}

const RequireAuth: React.FC<innerProps> = (props) => {
  let navigate = useNavigate()

  return props.children
}

export default RequireAuth