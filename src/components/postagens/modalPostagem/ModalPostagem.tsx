import { makeStyles, Theme, createStyles, Button } from "@material-ui/core";
import React from "react";
import CadastroPost from "../cadastroPost/CadastroPost";
import CloseIcon from "@material-ui/icons/Close";
import { Box, Modal } from "@mui/material";


//Esta função retorna um objeto com as coordenadas de posição para centralizar o modal na tela.
function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
//É uma chamada para a função makeStyles que retorna os estilos personalizados para o componente.
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  })
);

function ModalPostagem() {
  const classes = useStyles(); //recebe os estilos personalizados retornados pela função useStyles
  const [modalStyle] = React.useState(getModalStyle); //é um estado que armazena as coordenadas de estilo para posicionar o modal.
  const [open, setOpen] = React.useState(false); //é um estado que controla se o modal está aberto ou fechado.

    //É uma função que é chamada quando o botão é clicado para abrir o modal.
  const handleOpen = () => {
    
    setOpen(true); //Define o estado open como true para abrir o modal.
  };
    //É uma função que é chamada quando o ícone de fechamento é clicado para fechar o modal.
  const handleClose = () => {
    
    setOpen(false); //Define o estado open como false para fechar o modal.
  };

  //contém o conteúdo do modal.
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Box display="flex" justifyContent="flex-end" className="cursor">
        {/*Contém um ícone de fechamento no canto superior direito que chama a
        função handleClose quando clicado.*/}
        <CloseIcon onClick={handleClose} />
      </Box>
      <CadastroPost />
      {/*CadastroPost para exibir o formulário de cadastro de postagem dentro do modal.*/}
    </div>
  );

  return (
    <div>
      {/*chama handleOpen quando clicado e abre o modal*/}
      <Button variant="outlined" className="btnModal" onClick={handleOpen}>
        Nova Postagem
      </Button>
      <Modal
        //open para controlar se o modal está aberto ou fechado.
        open={open}
        //handleClose para serem chamadas quando o modal for fechado pelo usuário.
        onClose={handleClose}
        
        //são propriedades de acessibilidade para descrever o modal.
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
export default ModalPostagem;