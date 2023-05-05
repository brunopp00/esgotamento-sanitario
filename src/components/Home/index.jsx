import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, Typography, useMediaQuery } from "@mui/material";
import {  } from "react";
// import imgFossas from '../../assets/fossas.webp'
import './styles.css';
import { ArrowDownward } from "@mui/icons-material";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    accordionRoot: { 
      '& .MuiButtonBase-root': {
            backgroundColor:'#282828',
      },
      '& .MuiAccordion-region': {
        backgroundColor:'#282828',
        color: 'white',
    },
    width: '81%',
    marginBottom:'10px',
    borderRadius:'10px'


    },
    box: {
        padding:'20px',
        backgroundColor: '#282828',
        borderRadius:'10px',
        display:'flex',
        flexDirection:'column',
        margin:'10px',
    },
    boxSecondary: {
        backgroundColor: '#282828',
        textAlign:'center',
    },
    icon: {
        color:'white',
        cursor: 'pointer',

        '&:hover': {
           animation: '$up-down 1s infinite linear',
           borderRadius: '50%',
        }
    },
    
    
     '@keyframes up-down': {
        '0%': { 
            transform: 'translateY(0)',
         },
        '50%': { 
            transform: 'translateY(10px)',
            backgroundColor: 'white',
            color:'black'
         },
        '100%': { 
            transform: 'translateY(0)',
        }
     }
  }));

export const Home = () => {
    const classes = useStyles()
    const milPx = useMediaQuery('(min-width:1300px)')

  return (
    <Grid
      container
      spacing={2}
      style={{
        padding: '1rem',
        height: '100%',
        displa: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box
          className={classes.box}
          width={'81%'}
          height={milPx ? '200px' : '100%'}
        >
          <Box className={classes.boxSecondary} >
          <Typography
          style={{ fontFamily: 'Tilt Warp, cursive', marginBottom:'20px' }}
          variant="h3"
          color={'white'}
        >
            Bem-Vindos! 
        </Typography>
            <Typography
             className={classes.text}
              style={{ fontFamily: 'Tilt Warp, cursive', color: '#d0d0d0' }}
              variant="body1"
            >
                Neste site vocês conhecerão nosso trabalho sobre o Esgotamento Sanitário. Realizamos este projeto em pareceria com a Prefeitura Municipal de Maratá, com o objetivo de mostrar à população como deve ser a construção adequada das fossas residenciais e evidenciar possíveis problemas causados pela má elaboração das mesmas.
            </Typography>
          </Box>
        </Box>
        <Accordion className={classes.accordionRoot}>
            <AccordionSummary
                expandIcon={<ArrowDownward className={classes.icon} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Box className={classes.box}>
                    <Typography
                        style={{ fontFamily: 'Tilt Warp, cursive', marginBottom:'15px' }}
                        variant="h5"
                        color={'white'}
                        >
                      O que são fossas sépticas?
                    </Typography>
                </Box>
            </AccordionSummary>
            <AccordionDetails style={{padding:'30px'}}>
                <Typography  style={{ fontFamily: 'Tilt Warp, cursive' }}>
                    Uma fossa séptica é um sistema de tratamento de esgoto doméstico que é usado em áreas sem acesso ao sistema de esgoto público. Ela é uma espécie de tanque enterrado no solo que é projetado para receber e tratar os dejetos de um imóvel residencial ou comercial.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion className={classes.accordionRoot}>
            <AccordionSummary
                expandIcon={<ArrowDownward className={classes.icon} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Box className={classes.box}>
                    <Typography
                        style={{ fontFamily: 'Tilt Warp, cursive', marginBottom:'15px' }}
                        variant="h5"
                        color={'white'}
                    >
                        Documentos necessários para a construção das fossas sépticas
                    </Typography>
                </Box>
            </AccordionSummary>
            <AccordionDetails>
                <table style={{padding:'20px'}}>
                    <ul style={{fontFamily: 'Tilt Warp, cursive', marginBottom:'20px'}}>
                        <span style={{fontSize:'1.5rem',fontFamily: 'Tilt Warp, cursive'}}>• Licença ou autorização da autoridade local: </span><br/>A construção de uma fossa séptica requer uma autorização ou licença da autoridade local competente, como a prefeitura, secretaria do meio ambiente ou órgão sanitário.
                    </ul>
                    <ul style={{fontFamily: 'Tilt Warp, cursive', marginBottom:'20px'}}>
                        <span style={{fontSize:'1.5rem',fontFamily: 'Tilt Warp, cursive'}}>• Projeto de construção: </span><br/>  Um projeto de construção detalhado é necessário para garantir que a fossa séptica seja construída de acordo com as especificações exigidas pelas normas e regulamentações locais. Esse projeto deve incluir as dimensões da fossa, o material de construção, o sistema de distribuição do efluente tratado e o local da instalação.
                    </ul>
                    <ul style={{fontFamily: 'Tilt Warp, cursive', marginBottom:'20px'}}>
                        <span style={{fontSize:'1.5rem',fontFamily: 'Tilt Warp, cursive'}}>• Avaliação do solo: </span><br/>  Antes de construir a fossa séptica, é importante avaliar o solo onde ela será instalada. A avaliação do solo é feita para determinar se o solo é adequado para a construção da fossa e se atende aos requisitos de infiltração.
                    </ul>
                    <ul style={{fontFamily: 'Tilt Warp, cursive', marginBottom:'20px'}}>
                        <span style={{fontSize:'1.5rem',fontFamily: 'Tilt Warp, cursive'}}>• Plano de manutenção: </span><br/> É importante ter um plano de manutenção da fossa séptica para garantir seu bom funcionamento ao longo do tempo. O plano de manutenção deve incluir informações sobre a frequência de limpeza e esvaziamento da fossa, inspeção e reparo do sistema de distribuição do efluente tratado, e outras medidas preventivas.
                    </ul>
                    <ul style={{fontFamily: 'Tilt Warp, cursive', marginBottom:'20px'}}>
                        <span style={{fontSize:'1.5rem',fontFamily: 'Tilt Warp, cursive'}}>• Autorização de uso do terreno: </span><br/>Caso a fossa séptica seja construída em um terreno que não seja de propriedade do solicitante, é necessário obter uma autorização de uso do terreno por parte do proprietário.
                    </ul>
                </table>
            </AccordionDetails>
        </Accordion>
        <Accordion className={classes.accordionRoot}>
            <AccordionSummary
                expandIcon={<ArrowDownward className={classes.icon} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Box className={classes.box}>
                    <Typography
                        style={{ fontFamily: 'Tilt Warp, cursive', marginBottom:'15px' }}
                        variant="h5"
                        color={'white'}
                    >
                     Lista de Materiais
                    </Typography>
                </Box>
            </AccordionSummary>
            <AccordionDetails>
                <div style={{display:'flex', width:'100%', justifyContent:'center'}}>
                    <table style={{padding:'20px'}}>
                        <ul style={{fontFamily: 'Tilt Warp, cursive', marginBottom:'20px'}}>• Tubos de PVC </ul>
                        <ul style={{fontFamily: 'Tilt Warp, cursive', marginBottom:'20px'}}>• Cimento</ul>
                        <ul style={{fontFamily: 'Tilt Warp, cursive', marginBottom:'20px'}}>• Areia</ul>
                        <ul style={{fontFamily: 'Tilt Warp, cursive', marginBottom:'20px'}}>• Pedra britada</ul>
                        <ul style={{fontFamily: 'Tilt Warp, cursive', marginBottom:'20px'}}>• Tampas para os tubos de inspeção</ul>
                        <ul style={{fontFamily: 'Tilt Warp, cursive', marginBottom:'20px'}}>• Chapa metálica</ul>
                        <ul style={{fontFamily: 'Tilt Warp, cursive', marginBottom:'20px'}}>• Manta geotêxtil</ul>
                    </table>
                    <table style={{padding:'20px'}}>
                        <ul style={{fontFamily: 'Tilt Warp, cursive', marginBottom:'20px'}}>• Tinta para impermeabilização</ul>
                        <ul style={{fontFamily: 'Tilt Warp, cursive', marginBottom:'20px'}}>• Bombas para o sistema de drenagem</ul>
                        <ul style={{fontFamily: 'Tilt Warp, cursive', marginBottom:'20px'}}>• Ferramentas de escavação (pás, enxadas, picaretas, etc.)</ul>
                        <ul style={{fontFamily: 'Tilt Warp, cursive', marginBottom:'20px'}}>• Nível de bolha</ul>
                        <ul style={{fontFamily: 'Tilt Warp, cursive', marginBottom:'20px'}}>• Medidor de PH</ul>
                        <ul style={{fontFamily: 'Tilt Warp, cursive', marginBottom:'20px'}}>• Luvas e equipamentos de proteção individual (EPIs)</ul>
                    </table>
                </div>
            </AccordionDetails>
        </Accordion>
        <Accordion className={classes.accordionRoot}>
            <AccordionSummary
                expandIcon={<ArrowDownward className={classes.icon} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Box className={classes.box}>
                    <Typography
                        style={{ fontFamily: 'Tilt Warp, cursive', marginBottom:'15px' }}
                        variant="h5"
                        color={'white'}
                    >
                       Passo a Passo da Contrução
                    </Typography>
                </Box>
            </AccordionSummary>
            <AccordionDetails>
                <table style={{padding:'20px'}}>
                    <ul style={{fontFamily: 'Tilt Warp, cursive', marginBottom:'20px'}}>
                        <span style={{fontSize:'1.5rem',fontFamily: 'Tilt Warp, cursive'}}>
                            • Escolha do local: 
                        </span><br/>
                        Escolha um local afastado da casa e de outras construções, com uma boa área para escavação e drenagem.
                    </ul>
                    <ul style={{fontFamily: 'Tilt Warp, cursive', marginBottom:'20px'}}>
                        <span style={{fontSize:'1.5rem',fontFamily: 'Tilt Warp, cursive'}}>
                            • Preparação do terreno: 
                        </span><br/>  
                        Limpe a área onde a fossa será construída e faça a marcação do tamanho da fossa.
                    </ul>
                    <ul style={{fontFamily: 'Tilt Warp, cursive', marginBottom:'20px'}}>
                        <span style={{fontSize:'1.5rem',fontFamily: 'Tilt Warp, cursive'}}>
                            • Escavação: 
                        </span><br/>  
                        Faça a escavação da fossa, que deve ter uma profundidade de pelo menos 1,5 metros e uma largura que permita a circulação de uma pessoa dentro dela. A fossa deve ter um formato retangular ou circular.
                    </ul>
                    <ul style={{fontFamily: 'Tilt Warp, cursive', marginBottom:'20px'}}>
                        <span style={{fontSize:'1.5rem',fontFamily: 'Tilt Warp, cursive'}}>
                            • Colocação do anel de concreto: 
                        </span><br/> 
                        Coloque um anel de concreto na parte superior da fossa para servir de base para a tampa.
                    </ul>
                    <ul style={{fontFamily: 'Tilt Warp, cursive', marginBottom:'20px'}}>
                        <span style={{fontSize:'1.5rem',fontFamily: 'Tilt Warp, cursive'}}>
                            • Instalação do tubo de entrada:
                        </span><br/>
                        Instale o tubo de entrada, que deve ser de PVC e ter cerca de 10 cm de diâmetro. Ele deve ser conectado ao esgoto da casa e desembocar no topo da fossa.
                    </ul>
                    <ul style={{fontFamily: 'Tilt Warp, cursive', marginBottom:'20px'}}>
                        <span style={{fontSize:'1.5rem',fontFamily: 'Tilt Warp, cursive'}}>
                            • Instalação do tubo de saída: 
                        </span><br/>
                        Instale o tubo de saída, que também deve ser de PVC e ter cerca de 10 cm de diâmetro. Ele deve sair na parte lateral da fossa e conectar-se a um sistema de drenagem ou vala de infiltração.
                    </ul>
                    <ul style={{fontFamily: 'Tilt Warp, cursive', marginBottom:'20px'}}>
                        <span style={{fontSize:'1.5rem',fontFamily: 'Tilt Warp, cursive'}}>
                            • Preenchimento do fundo da fossa: 
                        </span><br/>
                        Coloque uma camada de pedra brita ou pedrisco no fundo da fossa, com cerca de 10 cm de altura.
                    </ul>
                    <ul style={{fontFamily: 'Tilt Warp, cursive', marginBottom:'20px'}}>
                        <span style={{fontSize:'1.5rem',fontFamily: 'Tilt Warp, cursive'}}>
                            • Instalação do anel de inspeção: 
                        </span><br/>
                        Coloque um  anel de concreto com tampa na parte superior do tubo de entrada para permitir a inspeção e a limpeza da fossa.
                    </ul>
                    <ul style={{fontFamily: 'Tilt Warp, cursive', marginBottom:'20px'}}>
                        <span style={{fontSize:'1.5rem',fontFamily: 'Tilt Warp, cursive'}}>
                            • Revestimento da fossa:
                        </span><br/>
                        Revesta as paredes da fossa com tijolos ou blocos de concreto, deixando uma abertura na parte superior para a tampa.
                    </ul>
                    <ul style={{fontFamily: 'Tilt Warp, cursive', marginBottom:'20px'}}>
                        <span style={{fontSize:'1.5rem',fontFamily: 'Tilt Warp, cursive'}}>
                            • Instalação da tampa: 
                        </span><br/>
                        Coloque uma tampa de concreto ou plástico na parte superior da fossa, deixando uma abertura para a inspeção e a limpeza.
                    </ul>
                    <ul style={{fontFamily: 'Tilt Warp, cursive', marginBottom:'20px'}}>
                        <span style={{fontSize:'1.5rem',fontFamily: 'Tilt Warp, cursive'}}>
                            • Conclusão:  
                        </span><br/>
                        Verifique se todas as conexões estão bem feitas e finalize a construção da fossa com o preenchimento da área ao redor com terra e grama.
                    </ul>
                </table>
            </AccordionDetails>
        </Accordion>
    </Grid>
    )
}