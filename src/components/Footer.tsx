import React from "react"
import { styled } from "@material-ui/core/styles"

interface Props {
  children: React.ReactNode
}

const StyledFooter = styled("footer")({
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  textAlign: "center",
  margin: "20px",
})

const StyledHR = styled("hr")({
  background: "black",
  height: "3px",
})

// TODO: Vertically centre the footer text, somehow...
export default function Footer({ children }: Props) {
  return (
    <StyledFooter>
      <StyledHR />
      <div>{children}</div>
    </StyledFooter>
  )
}
