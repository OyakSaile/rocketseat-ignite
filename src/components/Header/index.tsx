import { useState } from "react";
import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";
import Modal from "react-modal";
interface HeaderProps {
  SetTransactionModalOpen: () => void
}
export function Header({SetTransactionModalOpen} : HeaderProps) {
 
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" title="dt money" />
        <button type="button" onClick={SetTransactionModalOpen}>
          Nova Transação
        </button>
      </Content>

   
    </Container>
  );
}
