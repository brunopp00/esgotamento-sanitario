import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import {  } from "react";
import imgFossas from '../../assets/fossas.webp'
import './styles.css';

export const Home = () => {

    const milPx = useMediaQuery('(min-width:1300px)')
  const quinhentosPx = useMediaQuery('(min-width:500px)')

  return (
    <Grid
      container
      spacing={2}
      id="projetos"
      style={{
        padding: '1rem',
        height: '100%',
        displa: 'flex',
        justifyContent: 'center',
      }}
    >
      <Grid
        item
        xs={12}
        style={{
          marginBottom: '10px',
          textAlign: 'center',
        }}
      >
        <Typography
          style={{ fontFamily: 'Tilt Warp, cursive' }}
          variant="h3"
          color={'white'}
        >
            Bem-Vindos! 
        </Typography>
        <Typography
          style={{ fontFamily: 'Tilt Warp, cursive' }}
          variant="h5"
          color={'#ababab'}
        >
            Neste site vocês conhecerão nosso trabalho sobre o Esgotamento Sanitário. Realizamos este projeto em pareceria com a Prefeitura Municipal de Maratá, com o objetivo de mostrar à população como deve ser a construção adequada das fossas residenciais e evidenciar possíveis problemas causados pela má elaboração das mesmas.
        </Typography>
      </Grid>
        <Box
          className="box"
          width={milPx ? '40%' : quinhentosPx ? '45%' : '100%'}
          height={milPx ? '200px' : '250px'}
        >
          <Box className='box-secondary' >
          <Typography
          style={{ fontFamily: 'Tilt Warp, cursive' }}
          variant="h3"
          color={'white'}
        >
            Bem-Vindos! 
        </Typography>
            <Typography
              style={{ fontFamily: 'Tilt Warp, cursive', color: '#d0d0d0' }}
              variant="body2"
            >
            Neste site vocês conhecerão nosso trabalho sobre o Esgotamento Sanitário. Realizamos este projeto em pareceria com a Prefeitura Municipal de Maratá, com o objetivo de mostrar à população como deve ser a construção adequada das fossas residênciais e evidenciar possíveis problemas causados pela má elaboração das mesmas.
            </Typography>
          </Box>
        </Box>
        <Box
          className="box"
          width={milPx ? '40%' : quinhentosPx ? '45%' : '100%'}
          height={milPx ? '200px' : '200px'}
        >
          <Box width={'100%'} height={'45%'}>
            <img style={{width:'100%', height: '200px', borderRadius:'10px'}} src={imgFossas} alt="" />
          </Box>
        </Box>
        <Box
          className="box"
          width={milPx ? '26.1%' : quinhentosPx ? '45%' : '100%'}
          height={milPx ? '90%' : '100%'}
        >
          <Box className='box-secondary'>
            <Typography
              style={{ fontFamily: 'Tilt Warp, cursive', color: '#d0d0d0' }}
              variant="body2"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt nisi nostrum voluptatem maxime, accusamus, dolorem maiores repudiandae eligendi assumenda fugit cum. Id aspernatur quod aut rerum eligendi nulla corrupti magni?
            </Typography>
          </Box>
        </Box>
        <Box
          className="box"
          width={milPx ? '26.2%' : quinhentosPx ? '45%' : '100%'}
          height={milPx ? '90%' : '100%'}
        >
          <Box className='box-secondary'>
            <Typography
              style={{ fontFamily: 'Tilt Warp, cursive', color: '#d0d0d0' }}
              variant="body2"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt nisi nostrum voluptatem maxime, accusamus, dolorem maiores repudiandae eligendi assumenda fugit cum. Id aspernatur quod aut rerum eligendi nulla corrupti magni?
            </Typography>
          </Box>
        </Box>
        <Box
          className="box"
          width={milPx ? '26.2%' : quinhentosPx ? '45%' : '100%'}
          height={milPx ? '90%' : '100%'}
        >
          <Box className='box-secondary'>
            <Typography
              style={{ fontFamily: 'Tilt Warp, cursive', color: '#d0d0d0' }}
              variant="body2"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt nisi nostrum voluptatem maxime, accusamus, dolorem maiores repudiandae eligendi assumenda fugit cum. Id aspernatur quod aut rerum eligendi nulla corrupti magni?
            </Typography>
          </Box>
        </Box>
        <Box
          className="box"
          width={milPx ? '40%' : quinhentosPx ? '45%' : '100%'}
          height={milPx ? '90%' : '100%'}
        >
          <Box className='box-secondary'>
            <Typography
              style={{ fontFamily: 'Tilt Warp, cursive', color: '#d0d0d0' }}
              variant="body2"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt nisi nostrum voluptatem maxime, accusamus, dolorem maiores repudiandae eligendi assumenda fugit cum. Id aspernatur quod aut rerum eligendi nulla corrupti magni?
            </Typography>
          </Box>
        </Box>
        <Box
          className="box"
          width={milPx ? '40%' : quinhentosPx ? '45%' : '100%'}
          height={milPx ? '90%' : '100%'}
        >
          <Box className='box-secondary'>
            <Typography
              style={{ fontFamily: 'Tilt Warp, cursive', color: '#d0d0d0' }}
              variant="body2"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt nisi nostrum voluptatem maxime, accusamus, dolorem maiores repudiandae eligendi assumenda fugit cum. Id aspernatur quod aut rerum eligendi nulla corrupti magni?
            </Typography>
          </Box>
        </Box>
        
    </Grid>
    )
}