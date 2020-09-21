import { styled } from "@material-ui/core"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"
import CloseIcon from "@material-ui/icons/Close"
import React, { useState } from "react"

const NoPeoplePlaceholder = styled(Typography)({
  fontWeight: 200,
  fontStyle: "italic",
})

const PersonBox = styled(Box)({
  border: "2px solid black",
  width: "50%",
})

const PersonText = styled(Typography)({
  fontSize: "1.2rem",
})

export default function PickSomeone() {
  const [people, setPeople] = useState<string[]>([])
  const [personInput, setPersonInput] = useState("")

  const onInputSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmedPersonInput = personInput.trim()
    if (trimmedPersonInput.length > 0) {
      if (!people.some(p => p.toLocaleLowerCase() === trimmedPersonInput.toLocaleLowerCase())) {
        setPeople([...people, trimmedPersonInput])
      }
      setPersonInput("")
    }
  }

  const removePerson = (person: string) => () => {
    setPeople(people.filter(p => p !== person))
  }

  return (
    <Box display="flex" flexDirection="column">
      <Box my={2}>
        <Button variant="contained">Pick Someone!</Button>
      </Box>
      <form onSubmit={onInputSubmit}>
        <TextField
          fullWidth
          label="Add Someone"
          variant="outlined"
          value={personInput}
          onChange={e => setPersonInput(e.target.value)}
        />
      </form>
      <Box mt={3} mb={1}>
        <Typography variant="h6">The People</Typography>
      </Box>
      {people.length === 0 ? (
        <Box>
          <NoPeoplePlaceholder>There are none...why don&apos;t you add some people?</NoPeoplePlaceholder>
        </Box>
      ) : (
        people.map(person => (
          <PersonBox key={person} my={0.5} display="flex" justifyContent="space-between">
            <PersonText noWrap>{person}</PersonText>
            <IconButton aria-label="remove" size="small" onClick={removePerson(person)}>
              <CloseIcon />
            </IconButton>
          </PersonBox>
        ))
      )}
    </Box>
  )
}
