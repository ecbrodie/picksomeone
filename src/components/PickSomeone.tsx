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
  const [chosenPerson, setChosenPerson] = useState("")

  const pickSomeone = () => {
    const randomPersonIndex = getRandomInt(people.length)
    setChosenPerson(people[randomPersonIndex])
  }

  const onInputSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmedPersonInput = personInput.trim()
    if (trimmedPersonInput.length > 0) {
      if (!people.some(p => p.toLocaleLowerCase() === trimmedPersonInput.toLocaleLowerCase())) {
        setPeople([...people, trimmedPersonInput])
      }
      setPersonInput("")
    }
    setChosenPerson("")
  }

  const removePerson = (person: string) => () => {
    setPeople(people.filter(p => p !== person))
    setChosenPerson("")
  }

  return (
    <Box display="flex" flexDirection="column">
      <Box my={2} display="flex" alignItems="baseline">
        <Button variant="contained" onClick={pickSomeone} disabled={people.length === 0}>
          Pick Someone!
        </Button>
        {chosenPerson.length > 0 && (
          <Box ml={1}>
            <Typography>
              🙌&nbsp;&nbsp;<b>THE CHOSEN ONE:</b>&nbsp;{chosenPerson}&nbsp;🙌
            </Typography>
          </Box>
        )}
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
          <PersonBox key={person} my={0.5} py={0.5} display="flex" alignItems="center" justifyContent="space-between">
            <Box ml={0.5}>
              <PersonText noWrap>{person}</PersonText>
            </Box>
            <IconButton aria-label="remove" size="small" onClick={removePerson(person)}>
              <CloseIcon />
            </IconButton>
          </PersonBox>
        ))
      )}
    </Box>
  )
}

// From JavaScript MDN documentation for Math.floor()
function getRandomInt(max: number) {
  return Math.floor(Math.random() * Math.floor(max))
}
