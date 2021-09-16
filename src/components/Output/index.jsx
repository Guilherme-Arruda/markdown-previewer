import styled from "styled-components";

export const Output = styled.div`
  height: calc(100vh - 107px);
  padding: 6px 15px;
  border: 1px solid #d3d3d3;
  border-radius: 4px;
  word-break: break-all;
  overflow: auto;
  @media (max-width: 768px) {
    height: calc(100vh - 24px);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  table {
    margin-bottom: 15px;
  }

  pre {
    background: #ececec;
    padding: 15px;
    border-radius: 3px;
  }

  blockquote {
    padding: 0 15px;
    color: #6a737d;
    border-left: 0.25em solid #d3d3d3;
  }

  p {
    margin-left: 1em;
  }

  tbody,
  td,
  tr,
  thead,
  th,
  tfoot {
    border-width: 1px !important;
  }

  table {
    border-color: #d3d3d3;
  }

  td,
  th {
    padding: 6px 12px;
  }
`;
