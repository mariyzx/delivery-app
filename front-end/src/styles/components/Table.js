import styled from 'styled-components';

const TableCheckout = styled.table`
  border-collapse: collapse;
  border: 3px solid #d69c33;
  padding: 10px;

  th {
    margin: 2rem;
    padding: 10px;
    border: 3px solid #d69c33;
  }

  td {
    text-align: center;
    margin: 2rem;
    padding: 10px;
    border: 3px solid #d69c33;
  }

  .removeButton, .deliveredButton {
    background: transparent;
    border: none;
    color: #d69c33;
    text-align: center;
    box-shadow: none;
    padding: 5px;
    margin: 0;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    
    .removeButton, .deliveredButton {
      font-size: 12px;
    }

    th {
      padding: 3px;
    }

    td {
      margin: 0;
      padding: 0;
    }
  }

  @media (max-width: 565px) {
    font-size: 12px;
    
    .removeButton {
      padding: 0;
      margin: 0;
    }
  }
`;

export default TableCheckout;
