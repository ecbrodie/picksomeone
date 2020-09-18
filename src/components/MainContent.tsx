import React from "react"
import { styled } from "@material-ui/core"

const StyledMain = styled("main")({
  margin: "20px 5px",
})

interface Props {
  children: React.ReactNode
}

export default function MainContent({ children }: Props) {
  return <StyledMain>{children}</StyledMain>
}
