import React, { useState } from "react"
import Box from "@material-ui/core/Box"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { styled, Typography } from "@material-ui/core"

const NoPeoplePlaceholder = styled(Typography)({
  fontWeight: 200,
  fontStyle: "italic",
})

export default function PickSomeone() {
  const [people, setPeople] = useState<string[]>([])
  const [personInput, setPersonInput] = useState("")

  // TODO: Do I need useCallback?
  const onInputSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (personInput.length > 0) {
      setPeople([...people, personInput])
      setPersonInput("")
    }
  }

  return (
    <Box display="flex" flexDirection="column">
      <Box my={2}>
        <Button variant="contained">Pick Someone!</Button>
      </Box>
      <form onSubmit={onInputSubmit}>
        <TextField
          style={{ width: "100%" }}
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
          <NoPeoplePlaceholder>
            There are none...why don&apos;t you add some people?
          </NoPeoplePlaceholder>
        </Box>
      ) : (
        people.map(person => (
          <Box key={person}>
            <Typography>{person}</Typography>
          </Box>
        ))
      )}
    </Box>
  )
}
