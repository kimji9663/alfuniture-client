import React, { useState } from "react"
import { Box, FormControl, Typography, Checkbox, Button } from "@mui/material"
import { styled } from "@mui/material/styles"
import { jamesLee } from "../../assets/images/brand"
import { chair03, sofa01, sofa02, sofa03 } from "../../assets/images/product"
import { Link } from "react-router-dom";
import { casual, cen, classic, minimal, modern, northernEU, plant, romantic } from "../../assets/images/filterIcon/styles";

const RectCheckbox = styled(FormControl)(({ }) => ({
  '& input': {
    display: 'none',
  },
  '& label': {
    padding: '3px 12px',
    border: '1px solid #DADADA',
    fontSize: '0.875rem',
  },
  '& input:checked + label': {
    border: '1px solid #242223',
    backgroundColor: '#242223',
    color: '#fff',
  },
}))

const itemList = [
  {
    id: '1',
    name: '모던',
  },
  {
    id: '2',
    name: '클래식',
  },
  {
    id: '3',
    name: '북유럽',
  },
  {
    id: '4',
    name: '내츄럴',
  },
  {
    id: '5',
    name: '엔티크',
  },
  {
    id: '6',
    name: '빈티지',
  },
  {
    id: '7',
    name: '프로방스',
  },
  {
    id: '8',
    name: '정크',
  },
  {
    id: '9',
    name: '미니멀',
  },
]

const StyleTypes = [
  {avatar: modern, name: '모던', discription: '혼자 사는 자취방'},
  {avatar: northernEU, name: '북유럽', discription: '아이들이 좋아하는'},
  {avatar: classic, name: '클래식', discription: '잔잔한 바이브'},
  {avatar: casual, name: '캐주얼', discription: '에너지 넘치는'},
  {avatar: cen, name: '첸', discription: '고요함이 좋다면'},
  {avatar: plant, name: '플랜테리어', discription: '생기를 불어넣는'},
  {avatar: minimal, name: '미니멀', discription: '깔끔함이 최고'},
  {avatar: romantic, name: '로맨틱', discription: '달달한 신혼'},
];

const evenIndexStyles = StyleTypes.filter((_, index) => index % 2 === 0);
const oddIndexStyles = StyleTypes.filter((_, index) => index % 2 !== 0);

const StyleTab = () => {
  const [filterItem, setFilterItem] = useState<string[]>([])

  const handleCheckedFilterItem = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    if (id === 'all') {
      if (e.currentTarget.checked) {
        setFilterItem(itemList.map(el => el.id))
      } else {
        setFilterItem([])
      }
    } else {
      if (e.currentTarget.checked) {
        setFilterItem([...filterItem, id])
      } else {
        setFilterItem(filterItem.filter(el => el !== id))
      }
    }
  }

  return (
    <>
      <Box sx={{
        pl: 2,
        pt: 5,
        pb: 3,
        overflow: 'auto',
        whiteSpace: 'nowrap',
        '.MuiFormControl-root:first-of-type': {
          ml: 0
        }
      }}
      >
        <RectCheckbox key={`all`} sx={{ ml: 1 }}>
          <input
            type="checkbox"
            id={`check_all`}
            onChange={e => handleCheckedFilterItem(e, 'all')}
          />
          <label htmlFor={`check_all`}>전체</label>
        </RectCheckbox>
        {itemList.map((el) => (
          <RectCheckbox key={el.id} sx={{ ml: 1 }}>
            <input
              type="checkbox"
              id={`check_${el.id}`}
              onChange={e => handleCheckedFilterItem(e, el.id)}
              checked={filterItem.includes(el.id)}
            />
            <label htmlFor={`check_${el.id}`}>{el.name}</label>
          </RectCheckbox>
        ))}
      </Box>
      <Box
        sx={{
          mt: 3,
          mx: 2,
          pb: 2,
          display: 'flex',
          justifyContent: 'space-between',
          borderBottom: '1px solid #DADADA',
        }}
      >
        {/* <List data={testData} /> */}
        
        <Box sx={{ mr: 1, width: 'calc(50vw - 20px)'}}>
          {/* 반복1 */}
          {evenIndexStyles.map((style, index) => (
            <Box
              key={index}
              sx={{
                position: "relative",
                overflow: "hidden",
                width: "100%",
                height: index === evenIndexStyles.length - 1 ? "200px" : "250px", // 마지막 요소일 때 height를 200px로 설정
                mb: 1
              }}
            >
              <Link to="/">
                <img
                  src={style.avatar}
                  alt={style.name}
                  style={{ objectFit: "cover", objectPosition: "center", width: '100%', height: '100%' }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6))',
                  }}
                />
                <Box sx={{ ml: 2, mb: 2, position: "absolute", bottom: 0, left: 0, color: "white" }}>
                  <Typography sx={{ fontSize: 14, fontWeight: "700", letterSpacing: "-0.25px", mb: "4px" }}>{style.discription}</Typography>
                  <Typography sx={{ fontSize: 14, fontWeight: "400", letterSpacing: "-0.25px" }}>{"# "+style.name}</Typography>
                </Box>
              </Link>
            </Box>
          ))}
        </Box>
        <Box sx={{ width: 'calc(50vw - 20px)'}}>
          {/* 반복2 */}
          {oddIndexStyles.map((style, index) => (
            <Box
              key={index}
              sx={{
                position: "relative",
                overflow: "hidden",
                width: "100%",
                height: index === 0 ? "200px" : "250px", 
                mb: 1
              }}
            >
              <Link to="/">
                <img
                  src={style.avatar}
                  alt={style.name}
                  style={{ objectFit: "cover", objectPosition: "center", width: '100%', height: '100%' }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6))',
                  }}
                />
                <Box sx={{ ml: 2, mb: 2, position: "absolute", bottom: 0, left: 0, color: "#FAFAFA" }}>
                  <Typography sx={{ fontSize: 14, fontWeight: "700", letterSpacing: "-0.25px", mb: "4px" }}>{style.discription}</Typography>
                  <Typography sx={{ fontSize: 14, fontWeight: "400", letterSpacing: "-0.25px" }}>{"# "+style.name}</Typography>
                </Box>
              </Link>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  )
}

export default StyleTab
