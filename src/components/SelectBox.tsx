import React, { useEffect, useState, useRef } from "react"
import { styled } from "@mui/material/styles"
import { Box, Button } from "@mui/material"

interface SelectProps {
  isopen: string
}

interface OptionsProps {
  id?: string | undefined
  name?: string | undefined
  img?: string | undefined
  type?: string | undefined
}

interface SelectBoxProps {
  children: React.JSX.Element
  selected: OptionsProps
  setSelected: React.Dispatch<React.SetStateAction<OptionsProps>>
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const OutlinedSelect = styled(Box)<SelectProps>((props) => ({
  position: "relative",
  "&::before": {
    content: "'⌵'",
    position: "absolute",
    top: "8px",
    right: "16px",
    color: "#DADADA",
    fontSize: "20px",
  },
  "& > .MuiButton-root": {
    padding: "6px 16px",
    minHeight: 52,
    borderRadius: 0,
    border: "1px solid #DADADA",
    justifyContent: "start",
    color: "#999"
  },
  "& > .MuiButton-root > img": {
    width: "18px",
    marginRight: "4px",
  },
  "& .dropmenu": {
    display: props.isopen === "true" ? "block" : "none",
    marginTop: "-1px",
    padding: 0,
    color:"#999999",
    border: "1px solid #dadada",
    borderTop: "none",
  },
  "& .dropmenu > ul > li": {
    padding: 0,
  },
  "& .dropmenu > ul > li:not(:last-of-type)": {
    borderBottom: "1px solid #dadada",
  },
  "& .dropmenu .MuiListItemButton-root": {
    padding: "13.5px 16px",
  },
  "& .dropmenu .MuiListItemButton-root > img": {
    width: "18px",
    marginRight: "4px",
  }
}))

const SelectBox = (props: SelectBoxProps) => {
  const [selected, setSelected] = useState<OptionsProps>(
    { name: props.selected.name, img: props.selected.img }
  )
  const dropMenuRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    setSelected(props.selected)
  }, [props.selected, props.setSelected])

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    props.setOpen(prevState => !prevState)
  }

  return (
    <OutlinedSelect 
      ref={dropMenuRef}
      isopen={props.open.toString()}
    >
      <Button
        fullWidth
        onClick={handleOpen}
      >
        {selected.img && (
          <img src={selected.img} alt={selected.name} />
        )}
        {selected.type ? (
          <>
            <Box component="span" sx={{ mr: 'auto', color: '#333' }}>
              {selected.type}
            </Box>
            <Box component="span" sx={{ pr: 3 }}>
              {selected.name}
            </Box>
          </>
        ) : (
          <span>{selected.name}</span>
        )}
      </Button>
      <Box className="dropmenu">
        {props.children}
      </Box>
    </OutlinedSelect>
  )
}

export default SelectBox