import styled from "styled-components";

export const StyledDiv = styled.div`
.div_conteiner{
    display: flex;
    align-items: center;
    justify-content:center;
    width: 100%;
	height: 20%;
	overflow: hidden;
	background-color: #FFFFFFF;
	box-shadow: 0px 0px 3px 5px rgba(0, 0, 0, 0.3);
    margin-top: 2%;
}

.div_pagos{
    margin: 0% 0% 0% 0%;
    display: block;
    align-items: center;
}
.div_logo {
    margin-bottom: 1%;
    margin-top: 1%;
    margin-left: 10%;
    margin-right: 10%;
    font-size: 15px;
    display: flex;
    flex-direction:column;
    align-items: center;
}

.div_info {
    margin: 3% 0% 2% 0%;
    display: block;
    flex-direction: row;
    align-items: center;
    justify-content:center;
}

`