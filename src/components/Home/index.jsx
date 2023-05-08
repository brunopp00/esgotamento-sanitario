import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  Box,
  Card,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
} from '@mui/material'
// import imgFossas from '../../assets/fossas.webp'
import { ArrowDownward, Close } from '@mui/icons-material'
import './styles.css'
import axios from 'axios'
import { FormularioEmail } from '../FormularioEmail'
import { useState } from 'react'

export const Home = () => {
  const milPx = useMediaQuery('(min-width:1300px)')
  const mobile = useMediaQuery('(min-width:600px)')
  const [message, setMessage] = useState('teste')

  const enviaEmail = (res, resetForm, setSubmitting) => {
    const conteudo = `${res.conteudo} Email: ${res.email}`
    const obj = {
      email: res.email,
      title: res.title,
      conteudo,
    }
    axios.post('https://servidor-esgotamento.onrender.com', obj).then((res) => {
      if (res.status === 200) {
        resetForm()
        setSubmitting(false)
        setMessage(res.data.message)
        showAlert()
      }
    })
  }

  function showAlert() {
    document.getElementById('my-alert').style.display = 'block'
  }

  function hideAlert() {
    document.getElementById('my-alert').style.display = 'none'
  }
  return (
    <>
      <Card id="my-alert" style={{ width: '90vw' }}>
        <Alert
          action={
            <IconButton onClick={() => hideAlert()}>
              <Close style={{ color: 'white' }} />
            </IconButton>
          }
          variant="filled"
          severity={'success'}
        >
          <Typography>{message}</Typography>
        </Alert>
      </Card>
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
          style={{
            padding: '20px',
            backgroundColor: '#014703',
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            margin: '10px',
          }}
          width={'81%'}
          height={milPx ? '200px' : '100%'}
        >
          <Box
            style={{
              backgroundColor: 'transparent',
              textAlign: 'center',
            }}
          >
            <Typography
              style={{ fontFamily: 'Tilt Warp, cursive', marginBottom: '20px' }}
              variant={mobile ? 'h3' : 'h4'}
              color={'white'}
            >
              Bem-Vindos!
            </Typography>
            <Typography
              style={{ fontFamily: 'Tilt Warp, cursive', color: '#ffff' }}
              variant="body1"
            >
              Neste site vocês conhecerão nosso trabalho sobre o Esgotamento
              Sanitário. Realizamos este projeto em pareceria com a Prefeitura
              Municipal de Maratá, com o objetivo de mostrar à popliação como
              deve ser a construção adequada das fossas residenciais e
              evidenciar possíveis problemas causados pela má elaboração das
              mesmas.
            </Typography>
          </Box>
        </Box>
        <Accordion
          style={{
            backgroundColor: '#014703',
            width: '81%',
            marginBottom: '10px',
            borderRadius: '10px',
          }}
        >
          <AccordionSummary
            expandIcon={<ArrowDownward className="icon" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Box
              style={{
                padding: '20px',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                margin: '10px',
              }}
            >
              <Typography
                style={{
                  fontFamily: 'Tilt Warp, cursive',
                  marginBottom: '15px',
                }}
                variant="h5"
                color={'white'}
              >
                O que são fossas sépticas?
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails style={{ padding: '30px' }}>
            <Typography
              style={{
                fontFamily: 'Tilt Warp, cursive',
                textAlign: mobile ? 'start' : 'center',
              }}
              color={'white'}
            >
              Uma fossa séptica é um sistema de tratamento de esgoto doméstico
              que é usado em áreas sem acesso ao sistema de esgoto público. Ela
              é uma espécie de tanque enterrado no solo que é projetado para
              receber e tratar os dejetos de um imóvel residencial ou comercial.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          style={{
            backgroundColor: '#014703',
            width: '81%',
            marginBottom: '10px',
            borderRadius: '10px',
          }}
        >
          <AccordionSummary
            expandIcon={<ArrowDownward className="icon" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Box
              style={{
                padding: '20px',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                margin: '10px',
              }}
            >
              <Typography
                style={{
                  fontFamily: 'Tilt Warp, cursive',
                  marginBottom: '15px',
                }}
                variant="h5"
                color={'white'}
              >
                Documentos necessários para a construção das fossas sépticas
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <table
              style={{
                padding: '20px',
                textAlign: mobile ? 'start' : 'center',
              }}
            >
              <li
                style={{
                  fontFamily: 'Tilt Warp, cursive',
                  marginBottom: '20px',
                  color: 'white',
                }}
              >
                <span
                  style={{
                    fontSize: '1.5rem',
                    fontFamily: 'Tilt Warp, cursive',
                    color: 'white',
                  }}
                >
                  Licença ou autorização da autoridade local:{' '}
                </span>
                <br />A construção de uma fossa séptica requer uma autorização
                ou licença da autoridade local competente, como a prefeitura,
                secretaria do meio ambiente ou órgão sanitário.
              </li>
              <li
                style={{
                  fontFamily: 'Tilt Warp, cursive',
                  marginBottom: '20px',
                  color: 'white',
                }}
              >
                <span
                  style={{
                    fontSize: '1.5rem',
                    fontFamily: 'Tilt Warp, cursive',
                    color: 'white',
                  }}
                >
                  Projeto de construção:{' '}
                </span>
                <br /> Um projeto de construção detalhado é necessário para
                garantir que a fossa séptica seja construída de acordo com as
                especificações exigidas pelas normas e regliamentações locais.
                Esse projeto deve incluir as dimensões da fossa, o material de
                construção, o sistema de distribuição do efluente tratado e o
                local da instalação.
              </li>
              <li
                style={{
                  fontFamily: 'Tilt Warp, cursive',
                  marginBottom: '20px',
                  color: 'white',
                }}
              >
                <span
                  style={{
                    fontSize: '1.5rem',
                    fontFamily: 'Tilt Warp, cursive',
                    color: 'white',
                  }}
                >
                  Avaliação do solo:{' '}
                </span>
                <br /> Antes de construir a fossa séptica, é importante avaliar
                o solo onde ela será instalada. A avaliação do solo é feita para
                determinar se o solo é adequado para a construção da fossa e se
                atende aos requisitos de infiltração.
              </li>
              <li
                style={{
                  fontFamily: 'Tilt Warp, cursive',
                  marginBottom: '20px',
                  color: 'white',
                }}
              >
                <span
                  style={{
                    fontSize: '1.5rem',
                    fontFamily: 'Tilt Warp, cursive',
                    color: 'white',
                  }}
                >
                  Plano de manutenção:{' '}
                </span>
                <br /> É importante ter um plano de manutenção da fossa séptica
                para garantir seu bom funcionamento ao longo do tempo. O plano
                de manutenção deve incluir informações sobre a frequência de
                limpeza e esvaziamento da fossa, inspeção e reparo do sistema de
                distribuição do efluente tratado, e outras medidas preventivas.
              </li>
              <li
                style={{
                  fontFamily: 'Tilt Warp, cursive',
                  marginBottom: '20px',
                  color: 'white',
                }}
              >
                <span
                  style={{
                    fontSize: '1.5rem',
                    fontFamily: 'Tilt Warp, cursive',
                    color: 'white',
                  }}
                >
                  Autorização de uso do terreno:{' '}
                </span>
                <br />
                Caso a fossa séptica seja construída em um terreno que não seja
                de propriedade do solicitante, é necessário obter uma
                autorização de uso do terreno por parte do proprietário.
              </li>
            </table>
          </AccordionDetails>
        </Accordion>
        <Accordion
          style={{
            backgroundColor: '#014703',
            width: '81%',
            marginBottom: '10px',
            borderRadius: '10px',
          }}
        >
          <AccordionSummary
            expandIcon={<ArrowDownward className="icon" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Box
              style={{
                padding: '20px',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                margin: '10px',
              }}
            >
              <Typography
                style={{
                  fontFamily: 'Tilt Warp, cursive',
                  marginBottom: '15px',
                }}
                variant="h5"
                color={'white'}
              >
                Lista de Materiais
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <div
              style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'center',
                textAlign: mobile ? 'start' : 'center',
              }}
            >
              <table style={{ padding: '20px' }}>
                <li
                  style={{
                    fontFamily: 'Tilt Warp, cursive',
                    marginBottom: '20px',
                    color: 'white',
                  }}
                >
                  Tubos de PVC{' '}
                </li>
                <li
                  style={{
                    fontFamily: 'Tilt Warp, cursive',
                    marginBottom: '20px',
                    color: 'white',
                  }}
                >
                  Cimento
                </li>
                <li
                  style={{
                    fontFamily: 'Tilt Warp, cursive',
                    marginBottom: '20px',
                    color: 'white',
                  }}
                >
                  Areia
                </li>
                <li
                  style={{
                    fontFamily: 'Tilt Warp, cursive',
                    marginBottom: '20px',
                    color: 'white',
                  }}
                >
                  Pedra britada
                </li>
                <li
                  style={{
                    fontFamily: 'Tilt Warp, cursive',
                    marginBottom: '20px',
                    color: 'white',
                  }}
                >
                  Tampas para os tubos de inspeção
                </li>
                <li
                  style={{
                    fontFamily: 'Tilt Warp, cursive',
                    marginBottom: '20px',
                    color: 'white',
                  }}
                >
                  Chapa metálica
                </li>
                <li
                  style={{
                    fontFamily: 'Tilt Warp, cursive',
                    marginBottom: '20px',
                    color: 'white',
                  }}
                >
                  Manta geotêxtil
                </li>
              </table>
              <table style={{ padding: '20px' }}>
                <li
                  style={{
                    fontFamily: 'Tilt Warp, cursive',
                    marginBottom: '20px',
                    color: 'white',
                  }}
                >
                  Tinta para impermeabilização
                </li>
                <li
                  style={{
                    fontFamily: 'Tilt Warp, cursive',
                    marginBottom: '20px',
                    color: 'white',
                  }}
                >
                  Bombas para o sistema de drenagem
                </li>
                <li
                  style={{
                    fontFamily: 'Tilt Warp, cursive',
                    marginBottom: '20px',
                    color: 'white',
                  }}
                >
                  Ferramentas de escavação (pás, enxadas, picaretas, etc.)
                </li>
                <li
                  style={{
                    fontFamily: 'Tilt Warp, cursive',
                    marginBottom: '20px',
                    color: 'white',
                  }}
                >
                  Nível de bolha
                </li>
                <li
                  style={{
                    fontFamily: 'Tilt Warp, cursive',
                    marginBottom: '20px',
                    color: 'white',
                  }}
                >
                  Medidor de PH
                </li>
                <li
                  style={{
                    fontFamily: 'Tilt Warp, cursive',
                    marginBottom: '20px',
                    color: 'white',
                  }}
                >
                  Luvas e equipamentos de proteção individual (EPIs)
                </li>
              </table>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          style={{
            backgroundColor: '#014703',
            width: '81%',
            marginBottom: '10px',
            borderRadius: '10px',
          }}
        >
          <AccordionSummary
            expandIcon={<ArrowDownward className="icon" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Box
              style={{
                padding: '20px',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                margin: '10px',
              }}
            >
              <Typography
                style={{
                  fontFamily: 'Tilt Warp, cursive',
                  marginBottom: '15px',
                }}
                variant="h5"
                color={'white'}
              >
                Passo a Passo da Contrução
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <table
              style={{
                padding: '20px',
                color: 'white',
                textAlign: mobile ? 'start' : 'center',
              }}
            >
              <li
                style={{
                  fontFamily: 'Tilt Warp, cursive',
                  marginBottom: '20px',
                }}
              >
                <span
                  style={{
                    fontSize: '1.5rem',
                    fontFamily: 'Tilt Warp, cursive',
                  }}
                >
                  Escolha do local:
                </span>
                <br />
                Escolha um local afastado da casa e de outras construções, com
                uma boa área para escavação e drenagem.
              </li>
              <li
                style={{
                  fontFamily: 'Tilt Warp, cursive',
                  marginBottom: '20px',
                }}
              >
                <span
                  style={{
                    fontSize: '1.5rem',
                    fontFamily: 'Tilt Warp, cursive',
                  }}
                >
                  Preparação do terreno:
                </span>
                <br />
                Limpe a área onde a fossa será construída e faça a marcação do
                tamanho da fossa.
              </li>
              <li
                style={{
                  fontFamily: 'Tilt Warp, cursive',
                  marginBottom: '20px',
                }}
              >
                <span
                  style={{
                    fontSize: '1.5rem',
                    fontFamily: 'Tilt Warp, cursive',
                  }}
                >
                  Escavação:
                </span>
                <br />
                Faça a escavação da fossa, que deve ter uma profundidade de pelo
                menos 1,5 metros e uma largura que permita a circliação de uma
                pessoa dentro dela. A fossa deve ter um formato retangliar ou
                circliar.
              </li>
              <li
                style={{
                  fontFamily: 'Tilt Warp, cursive',
                  marginBottom: '20px',
                }}
              >
                <span
                  style={{
                    fontSize: '1.5rem',
                    fontFamily: 'Tilt Warp, cursive',
                  }}
                >
                  Colocação do anel de concreto:
                </span>
                <br />
                Coloque um anel de concreto na parte superior da fossa para
                servir de base para a tampa.
              </li>
              <li
                style={{
                  fontFamily: 'Tilt Warp, cursive',
                  marginBottom: '20px',
                }}
              >
                <span
                  style={{
                    fontSize: '1.5rem',
                    fontFamily: 'Tilt Warp, cursive',
                  }}
                >
                  Instalação do tubo de entrada:
                </span>
                <br />
                Instale o tubo de entrada, que deve ser de PVC e ter cerca de 10
                cm de diâmetro. Ele deve ser conectado ao esgoto da casa e
                desembocar no topo da fossa.
              </li>
              <li
                style={{
                  fontFamily: 'Tilt Warp, cursive',
                  marginBottom: '20px',
                }}
              >
                <span
                  style={{
                    fontSize: '1.5rem',
                    fontFamily: 'Tilt Warp, cursive',
                  }}
                >
                  Instalação do tubo de saída:
                </span>
                <br />
                Instale o tubo de saída, que também deve ser de PVC e ter cerca
                de 10 cm de diâmetro. Ele deve sair na parte lateral da fossa e
                conectar-se a um sistema de drenagem ou vala de infiltração.
              </li>
              <li
                style={{
                  fontFamily: 'Tilt Warp, cursive',
                  marginBottom: '20px',
                }}
              >
                <span
                  style={{
                    fontSize: '1.5rem',
                    fontFamily: 'Tilt Warp, cursive',
                  }}
                >
                  Preenchimento do fundo da fossa:
                </span>
                <br />
                Coloque uma camada de pedra brita ou pedrisco no fundo da fossa,
                com cerca de 10 cm de altura.
              </li>
              <li
                style={{
                  fontFamily: 'Tilt Warp, cursive',
                  marginBottom: '20px',
                }}
              >
                <span
                  style={{
                    fontSize: '1.5rem',
                    fontFamily: 'Tilt Warp, cursive',
                  }}
                >
                  Instalação do anel de inspeção:
                </span>
                <br />
                Coloque um anel de concreto com tampa na parte superior do tubo
                de entrada para permitir a inspeção e a limpeza da fossa.
              </li>
              <li
                style={{
                  fontFamily: 'Tilt Warp, cursive',
                  marginBottom: '20px',
                }}
              >
                <span
                  style={{
                    fontSize: '1.5rem',
                    fontFamily: 'Tilt Warp, cursive',
                  }}
                >
                  Revestimento da fossa:
                </span>
                <br />
                Revesta as paredes da fossa com tijolos ou blocos de concreto,
                deixando uma abertura na parte superior para a tampa.
              </li>
              <li
                style={{
                  fontFamily: 'Tilt Warp, cursive',
                  marginBottom: '20px',
                }}
              >
                <span
                  style={{
                    fontSize: '1.5rem',
                    fontFamily: 'Tilt Warp, cursive',
                  }}
                >
                  Instalação da tampa:
                </span>
                <br />
                Coloque uma tampa de concreto ou plástico na parte superior da
                fossa, deixando uma abertura para a inspeção e a limpeza.
              </li>
              <li
                style={{
                  fontFamily: 'Tilt Warp, cursive',
                  marginBottom: '20px',
                }}
              >
                <span
                  style={{
                    fontSize: '1.5rem',
                    fontFamily: 'Tilt Warp, cursive',
                  }}
                >
                  Conclusão:
                </span>
                <br />
                Verifique se todas as conexões estão bem feitas e finalize a
                construção da fossa com o preenchimento da área ao redor com
                terra e grama.
              </li>
            </table>
          </AccordionDetails>
        </Accordion>
        <Accordion
          style={{
            backgroundColor: '#014703',
            width: '81%',
            marginBottom: '10px',
            borderRadius: '10px',
          }}
        >
          <AccordionSummary
            expandIcon={<ArrowDownward className="icon" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Box
              style={{
                padding: '20px',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                margin: '10px',
              }}
            >
              <Typography
                style={{
                  fontFamily: 'Tilt Warp, cursive',
                  marginBottom: '15px',
                }}
                variant="h5"
                color={'white'}
              >
                Precisa de Ajuda?
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <FormularioEmail enviaEmail={enviaEmail} />
          </AccordionDetails>
        </Accordion>
      </Grid>
    </>
  )
}

export const AlertSuccess = (message) => {
  return (
    <Card style={{ width: '90vw' }}>
      <Alert variant="filled" severity={'success'}>
        {message}
      </Alert>
    </Card>
  )
}
