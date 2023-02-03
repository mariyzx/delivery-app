import styled from 'styled-components';

const TableCheckout = styled.table`
  border-collapse: collapse;
  padding: 10px;
  margin-top: 0.75rem;

  th {
    margin: 2rem;
    padding: 10px;
  }

  td {
    text-align: center;
    margin: 2rem;
    padding: 10px;
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

  .removeButton:hover {
    color: #777;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    
    .removeButton, .deliveredButton {
      font-size: 12px;
      padding: 0;
      margin: 0;
    }

    th {
      padding: 3px;
    }

    td {
      margin: 0;
      padding: 0;
    }
  }
`;

export default TableCheckout;
