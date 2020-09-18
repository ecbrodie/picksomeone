import React from "react"
import { Typography } from "@material-ui/core"

interface Props {
  siteTitle: string
}
const Header = ({ siteTitle }: Props) => (
  <Typography variant="h2">{siteTitle}</Typography>
)

export default Header
